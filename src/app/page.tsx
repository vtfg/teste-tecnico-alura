import { Suspense } from "react";
import Image from "next/image";

import { ErrorAlert } from "@/components/error-alert";
import { Filters } from "@/components/filters";
import { Pagination } from "@/components/pagination";
import { PostGrid, PostGridItem } from "@/components/post";
import { Search } from "@/components/search";
import { getPosts } from "@/lib/services";

export default async function Home(props: {
  searchParams?: Promise<{
    category?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <>
      <section className="container flex items-center gap-6 flex-col">
        <Image
          src="/avatar.png"
          width={224}
          height={224}
          alt="Foto de perfil da Fernanda Mascheti."
          fetchPriority="high"
        />

        <p className="font-display font-bold text-sm md:text-base text-brand-primary text-center">
          Olá, meu nome é Fernanda_
        </p>

        <h1 className="font-display font-bold text-2xl md:text-3xl lg:text-6xl text-foreground-primary text-center">
          Eu ensino <span className="text-gradient">Programação</span>
        </h1>

        <p className="text-sm lg:text-base text-foreground-secondary text-center max-w-xl">
          Sou Engenheira de Computação e Pedagoga. Ensino pensamento
          computacional para estudantes do Ensino Fundamental e Médio. Ensino
          sobre pensamento computacional usando HTML, CSS e JavaScript. Veja os
          projetos que já desenvolvi!
        </p>

        <Image
          src="/divider.png"
          width={686}
          height={28}
          alt="Divisor de seções."
          className="mt-[42px] lg:mt-[85px]"
        />
      </section>

      <section
        id="blog"
        className="container flex items-center gap-8 flex-col mt-[42px] lg:mt-[84px] scroll-m-6"
      >
        <div className="flex flex-col lg:flex-row items-start justify-between w-full gap-4 xl:gap-0 ">
          <div className="flex flex-col xl:flex-row xl:items-center justify-start gap-4 w-full">
            <h2 className="font-display font-bold text-2xl text-foreground-primary">
              Minhas postagens
            </h2>

            <Search />
          </div>

          <Filters />
        </div>

        <Suspense
          key={(searchParams?.category || "") + currentPage}
          fallback={<PostsSkeleton />}
        >
          <Posts category={searchParams?.category} page={currentPage} />
        </Suspense>
      </section>

      <section className="container flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-[290px] mt-[122px] mb-[26px]">
        <div className="flex flex-col gap-3">
          <p className="font-display font-bold text-base text-brand-primary">
            Vamos conversar?
          </p>

          <h2 className="font-display font-bold text-6xl text-foreground-primary">
            Entre em contato
          </h2>
        </div>

        <ul className="flex flex-col gap-3">
          <li>
            <a
              href="mailto:fernandamascheti@gmail.com"
              className="flex gap-2.5 text-base text-foreground-secondary hover:underline hover:brightness-90 transition-all"
            >
              <Image
                src="/icons/mail.svg"
                alt="Ícone de email"
                width={24}
                height={24}
              />
              fernandamascheti@gmail.com
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/fernandamascheti"
              className="flex gap-2.5 text-base text-foreground-secondary hover:underline hover:brightness-90 transition-all"
            >
              <Image
                src="/icons/linkedin.svg"
                alt="Ícone do LinkedIn"
                width={24}
                height={24}
              />
              /Fernanda Mascheti
            </a>
          </li>
          <li>
            <a
              href="https://github.com/fernandamascheti"
              className="flex gap-2.5 text-base text-foreground-secondary hover:underline hover:brightness-90 transition-all"
            >
              <Image
                src="/icons/github.svg"
                alt="Ícone do Github"
                width={24}
                height={24}
              />
              /fernandamascheti
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}

interface PostsProps {
  category?: string;
  page: number;
}

async function Posts({ category, page }: PostsProps) {
  const { data, error } = await getPosts({ category, page });

  if (error || !data) {
    return <ErrorAlert error={error} />;
  }

  const { posts, pagination } = data;

  return (
    <>
      <PostGrid>
        {posts.map((post) => (
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

      <Pagination currentPage={page} totalPages={pagination.totalPages} />
    </>
  );
}

function PostsSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-rows-2 lg:grid-cols-3 w-full h-full gap-6">
      <div className="w-full h-[540px] rounded-sm bg-brand-gray/15 animate-pulse"></div>
      <div className="w-full h-[540px] rounded-sm bg-brand-gray/15 animate-pulse"></div>
      <div className="w-full h-[540px] rounded-sm bg-brand-gray/15 animate-pulse"></div>
      <div className="w-full h-[540px] rounded-sm bg-brand-gray/15 animate-pulse"></div>
      <div className="w-full h-[540px] rounded-sm bg-brand-gray/15 animate-pulse"></div>
      <div className="w-full h-[540px] rounded-sm bg-brand-gray/15 animate-pulse"></div>
    </div>
  );
}
