import { Suspense } from "react";
import { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { PostPageErrorAlert } from "@/components/error-alert";
import { PostGrid, PostGridItem } from "@/components/post";
import { getPostById, getRelatedPosts } from "@/lib/services";
import { truncateText } from "@/lib/utils";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  const { data, error } = await getPostById({ id });

  if (error || !data) {
    return {};
  }

  const title = `${data.title} - Fernanda Mascheti`;
  const description = truncateText(data.content, 150);

  return {
    title,
    description,
    category: data.category.name,
    keywords: data.tags.map((tag) => tag.name),
    openGraph: {
      type: "article",
      title,
      description,
      siteName: "Fernanda Mascheti",
      images: [{ url: data.imageUrl, alt: `Imagem da postagem ${data.title}` }],
      authors: [data.author],
      locale: "pt-BR",
    },
  };
}

export default async function Post({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data, error } = await getPostById({ id });

  if (error || !data) {
    return <PostPageErrorAlert error={error} />;
  }

  return (
    <>
      <section className="container grid lg:grid-cols-2 grid-rows-1 items-stretch gap-6 mt-8">
        <div className="flex flex-col gap-6" id="post-description">
          <h1 className="font-display font-bold text-5xl/[100%] text-foreground-primary">
            {data.title}
          </h1>

          <div className="flex flex-col gap-5">
            <p className="text-base font-bold text-foreground-secondary">
              Categoria:
            </p>

            <Link
              href={`/?category=${data.category.slug}`}
              title={`Listar postagens da categoria ${data.category.name}`}
              className="max-w-fit"
            >
              <Button>{data.category.name}</Button>
            </Link>
          </div>

          <div className="flex flex-col gap-5">
            <p className="text-base font-bold text-foreground-secondary">
              Tags:
            </p>

            <div className="flex gap-[14px]">
              {data.tags.map((tag) => (
                <Button
                  key={tag.slug}
                  variant="outlined"
                  className="max-w-fit pointer-events-none"
                >
                  {tag.name}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <img
          src={data.imageUrl}
          alt={`Imagem da postagem ${data.title}`}
          className="object-cover size-full order-first lg:order-none"
        />
      </section>

      <section className="container mt-6 lg:mt-[63px]">
        <p className="text-base text-foreground-secondary">{data.content}</p>
      </section>

      <section className="container flex flex-col gap-10 mt-[38px]">
        <h2 className="font-display font-bold text-2xl text-foreground-primary">
          Postagens relacionadas
        </h2>

        <Suspense key={id} fallback={<RelatedPostsSkeleton />}>
          <RelatedPosts
            currentPostId={id}
            category={data.category.slug}
            tags={data.tags.map((t) => t.slug)}
          />
        </Suspense>
      </section>
    </>
  );
}

interface RelatedPostsProps {
  currentPostId: string;
  category: string;
  tags: string[];
}

async function RelatedPosts({
  currentPostId,
  category,
  tags,
}: RelatedPostsProps) {
  const { data, error } = await getRelatedPosts({
    currentPostId,
    category,
    tags,
  });

  if (error || !data) {
    return (
      <div className="flex flex-col items-center gap-2 py-8">
        <h2 className="font-display font-bold text-lg text-foreground-primary">
          Nenhuma postagem relacionada encontrada.
        </h2>
      </div>
    );
  }

  return (
    <PostGrid>
      {data.posts.map((post) => (
        <PostGridItem
          key={post.id}
          id={post.id}
          imageUrl={post.imageUrl}
          category={post.category}
          title={post.title}
          excerpt={post.content}
        />
      ))}
    </PostGrid>
  );
}

function RelatedPostsSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 w-full h-full gap-6">
      <div className="w-full h-[540px] rounded-sm bg-brand-gray/15 animate-pulse"></div>
      <div className="w-full h-[540px] rounded-sm bg-brand-gray/15 animate-pulse"></div>
      <div className="w-full h-[540px] rounded-sm bg-brand-gray/15 animate-pulse"></div>
    </div>
  );
}
