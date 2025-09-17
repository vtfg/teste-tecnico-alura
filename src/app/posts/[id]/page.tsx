import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PostGrid, PostGridItem } from "@/components/post";
import { getPostById, getRelatedPosts } from "@/lib/services";
import { truncateText } from "@/lib/utils";
import { PostPageErrorAlert } from "@/components/error-alert";

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
    <main className="flex flex-col items-center justify-center w-full">
      <nav className="container py-18 flex items-center justify-between">
        <Link href="/" className="flex gap-5 items-center group">
          <Image
            src="/logo.png"
            width={46}
            height={46}
            alt="Logo do website."
            className="group-hover:brightness-90 transition-all"
          />

          <span className="font-display font-bold text-2xl text-brand-secondary uppercase group-hover:underline">
            Fernanda Mascheti
          </span>
        </Link>

        <ul className="flex gap-8">
          <li className="font-display font-bold text-2xl text-foreground-primary hover:underline hover:brightness-90 transition-all">
            <Link href="/">Início</Link>
          </li>
          <li className="font-display font-bold text-2xl text-brand-primary hover:underline hover:brightness-90 transition-all">
            <Link href="/#blog">Blog</Link>
          </li>
        </ul>
      </nav>

      <section className="container grid grid-cols-2 grid-rows-1 items-stretch gap-6 mt-8">
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
              <button className="px-3 py-2 pointer-events-none bg-brand-primary text-white font-bold border border-brand-primary rounded-sm outline-0 transition-all hover:brightness-90 focus:ring-2 focus:ring-brand-primary/50">
                {data.category.name}
              </button>
            </Link>
          </div>

          <div className="flex flex-col gap-5">
            <p className="text-base font-bold text-foreground-secondary">
              Tags:
            </p>

            <div className="flex gap-[14px]">
              {data.tags.map((tag) => (
                <button
                  key={tag.slug}
                  className="px-3 py-2 max-w-fit pointer-events-none bg-white text-brand-primary font-bold border border-brand-primary rounded-sm outline-0 transition-all hover:brightness-90 focus:ring-2 focus:ring-brand-primary/50"
                >
                  {tag.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <img
          src={data.imageUrl}
          alt={`Imagem da postagem ${data.title}`}
          className="object-cover size-full"
        />
      </section>

      <section className="container mt-[63px]">
        <p className="text-base text-foreground-secondary">{data.content}</p>
      </section>

      <section className="container flex flex-col gap-10 mt-[38px]">
        <h2 className="font-display font-bold text-2xl text-foreground-primary">
          Postagens relacionadas
        </h2>

        <RelatedPosts
          currentPostId={id}
          category={data.category.slug}
          tags={data.tags.map((t) => t.slug)}
        />
      </section>

      <footer className="container flex justify-center mt-[38px] mb-11">
        <p className="text-center text-base text-foreground-secondary">
          © Copyright 2025. Produzido por Fernanda Mascheti
        </p>
      </footer>
    </main>
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
