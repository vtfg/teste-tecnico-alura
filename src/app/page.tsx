import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";

import { ErrorAlert } from "@/components/error-alert";
import { Filters } from "@/components/filters";
import { Pagination } from "@/components/pagination";
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
          <li className="font-display font-bold text-2xl text-brand-primary hover:underline hover:brightness-90 transition-all">
            <Link href="/">Início</Link>
          </li>
          <li className="font-display font-bold text-2xl text-foreground-primary hover:underline hover:brightness-90 transition-all">
            <Link href="#blog">Blog</Link>
          </li>
        </ul>
      </nav>

      <section className="container flex items-center gap-6 flex-col">
        <Image
          src="/avatar.png"
          width={224}
          height={224}
          alt="Foto de perfil da Fernanda Mascheti."
        />

        <p className="font-display font-bold text-base text-brand-primary text-center">
          Olá, meu nome é Fernanda_
        </p>

        <h1 className="font-display font-bold text-6xl text-foreground-primary text-center">
          Eu ensino <span className="text-gradient">Programação</span>
        </h1>

        <p className="text-base text-foreground-secondary text-center max-w-xl">
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
          className="mt-[85px]"
        />
      </section>

      <section
        id="blog"
        className="container flex items-center gap-8 flex-col mt-[84px] scroll-m-6"
      >
        <div className="flex items-start justify-between w-full">
          <div className="flex items-center justify-start gap-8 w-full">
            <h2 className="font-display font-bold text-2xl text-foreground-primary">
              Minhas postagens
            </h2>

            <Search />
          </div>

          <Filters />
        </div>

        <Suspense key={currentPage} fallback={<PostsSkeleton />}>
          <Posts category={searchParams?.category} page={currentPage} />
        </Suspense>
      </section>

      <footer className="container flex flex-col gap-16 mt-[122px] mb-[41px]">
        <div className="flex items-center gap-[290px]">
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
        </div>

        <p className="text-center text-base text-foreground-secondary">
          © Copyright 2025. Produzido por Fernanda Mascheti
        </p>
      </footer>
    </main>
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
      <div className="grid grid-cols-3 gap-6">
        {posts.map((post) => (
          <article
            key={post.id}
            className="flex flex-col gap-4 p-6 border border-brand-primary rounded-sm hover:shadow-2xl hover:shadow-brand-primary/30 transition-all"
          >
            <div className="relative">
              <img
                src={post.imageUrl}
                alt={`Imagem da postagem ${post.title}`}
                className="w-full object-cover"
              />

              <span className="w-full max-w-[130px] h-[30px] bg-brand-primary text-white font-display text-sm flex items-center justify-center  absolute bottom-0 right-0">
                {post.category.name}
              </span>
            </div>

            <hgroup className="flex flex-col gap-4">
              <h3 className="font-display font-bold text-xl/[100%] text-foreground-primary">
                {post.title}
              </h3>

              <p className="text-base text-foreground-secondary line-clamp-3 overflow-ellipsis">
                {post.content}
              </p>
            </hgroup>

            <Link
              href={`/posts/${post.id}`}
              className="w-fit text-base text-brand-primary font-bold hover:underline hover:brightness-90 transition-all"
            >
              Ler mais
            </Link>
          </article>
        ))}
      </div>

      <Pagination currentPage={page} totalPages={pagination.totalPages} />
    </>
  );
}

function PostsSkeleton() {
  return (
    <div className="grid grid-rows-2 grid-cols-3 w-full h-full gap-6">
      <div className="w-full h-[540px] rounded-sm bg-brand-disabled/15 animate-pulse"></div>
      <div className="w-full h-[540px] rounded-sm bg-brand-disabled/15 animate-pulse"></div>
      <div className="w-full h-[540px] rounded-sm bg-brand-disabled/15 animate-pulse"></div>
      <div className="w-full h-[540px] rounded-sm bg-brand-disabled/15 animate-pulse"></div>
      <div className="w-full h-[540px] rounded-sm bg-brand-disabled/15 animate-pulse"></div>
      <div className="w-full h-[540px] rounded-sm bg-brand-disabled/15 animate-pulse"></div>
    </div>
  );
}
