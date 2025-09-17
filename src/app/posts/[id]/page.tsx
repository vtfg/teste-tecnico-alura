import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  return {
    title: `Postagem ${id} - Fernanda Mascheti`,
    description: `Descrição da postagem ${id}`,
  };
}

export default async function Post({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

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
            Desenvolvendo uma ferramenta interativa de estudo
          </h1>

          <div className="flex flex-col gap-5">
            <p className="text-base font-bold text-foreground-secondary">
              Categoria:
            </p>

            <button className="px-3 py-2 max-w-fit pointer-events-none bg-brand-primary text-white font-bold border border-brand-primary rounded-sm outline-0 transition-all hover:brightness-90 focus:ring-2 focus:ring-brand-primary/50">
              Front-end
            </button>
          </div>

          <div className="flex flex-col gap-5">
            <p className="text-base font-bold text-foreground-secondary">
              Tags:
            </p>

            <div className="flex gap-[14px]">
              <button className="px-3 py-2 max-w-fit pointer-events-none bg-white text-brand-primary font-bold border border-brand-primary rounded-sm outline-0 transition-all hover:brightness-90 focus:ring-2 focus:ring-brand-primary/50">
                HTML
              </button>
              <button className="px-3 py-2 max-w-fit pointer-events-none bg-white text-brand-primary font-bold border border-brand-primary rounded-sm outline-0 transition-all hover:brightness-90 focus:ring-2 focus:ring-brand-primary/50">
                CSS
              </button>
              <button className="px-3 py-2 max-w-fit pointer-events-none bg-white text-brand-primary font-bold border border-brand-primary rounded-sm outline-0 transition-all hover:brightness-90 focus:ring-2 focus:ring-brand-primary/50">
                JavaScript
              </button>
            </div>
          </div>
        </div>

        <img
          src="/posts/1.jpg"
          alt={`Imagem da postagem ${id}`}
          className="object-cover size-full"
        />
      </section>

      <section className="container mt-[63px]">
        <p className="text-base text-foreground-secondary">
          Lorem ipsum dolor sit amet consectetur. Et morbi egestas facilisis
          neque gravida in diam fermentum. Leo sed eu donec mi elit facilisis id
          tortor. Vitae sagittis nunc duis mattis risus id. Quis lacus hendrerit
          eget vitae id. Pulvinar turpis sit pellentesque ac enim. Maecenas
          luctus cum ultricies dui auctor ullamcorper consequat sodales. Egestas
          dis semper mauris proin. Risus tellus ullamcorper leo tristique.
          <br />
          Tellus mollis pharetra risus viverra vel elementum semper et. Ac risus
          aliquam semper eros quam aenean. Nunc mauris ut sem volutpat. Nulla
          sem pharetra in ac. Velit tristique nibh vitae pellentesque sed quam
          diam dolor enim. Pulvinar ut feugiat ultricies sem sed neque viverra.
          Netus donec sit nam tortor vitae ac adipiscing non placerat.
        </p>
      </section>

      <section className="container flex flex-col gap-10 mt-[38px]">
        <h2 className="font-display font-bold text-2xl text-foreground-primary">
          Postagens relacionadas
        </h2>

        <div className="grid grid-rows-1 grid-cols-3 gap-6">
          <article className="flex flex-col gap-4 p-6 border border-brand-primary rounded-sm hover:shadow-2xl hover:shadow-brand-primary/30 transition-all">
            <div className="relative">
              <img
                src="/posts/1.jpg"
                alt="Imagem da postagem 1: Desenvolvendo uma ferramenta interativa de estudo."
              />

              <span className="w-full max-w-[130px] h-[30px] bg-brand-primary text-white font-display text-sm flex items-center justify-center  absolute bottom-0 right-0">
                Front-end
              </span>
            </div>

            <hgroup className="flex flex-col gap-4">
              <h3 className="font-display font-bold text-xl/[100%] text-foreground-primary">
                Desenvolvendo uma ferramenta interativa de estudo
              </h3>

              <p className="text-base text-foreground-secondary">
                Lorem ipsum dolor sit amet consectetur. Et morbi egestas
                facilisis neque gravida in diam fermentum. Leo sed eu donec mi
                elit...
              </p>
            </hgroup>

            <Link
              href="/posts/1"
              className="w-fit text-base text-brand-primary font-bold hover:underline hover:brightness-90 transition-all"
            >
              Ler mais
            </Link>
          </article>

          <article className="flex flex-col gap-4 p-6 border border-brand-primary rounded-sm hover:shadow-2xl hover:shadow-brand-primary/30 transition-all">
            <div className="relative">
              <img
                src="/posts/2.jpg"
                alt="Imagem da postagem 2: Utilizando a responsividade em aplicações com HTML e CSS."
              />

              <span className="w-full max-w-[130px] h-[30px] bg-brand-primary text-white font-display text-sm flex items-center justify-center  absolute bottom-0 right-0">
                Back-end
              </span>
            </div>

            <hgroup className="flex flex-col gap-4">
              <h3 className="font-display font-bold text-xl/[100%] text-foreground-primary">
                Utilizando a responsividade em aplicações com HTML e CSS
              </h3>

              <p className="text-base text-foreground-secondary">
                Lorem ipsum dolor sit amet consectetur. Et morbi egestas
                facilisis neque gravida in diam fermentum. Leo sed eu donec mi
                elit...
              </p>
            </hgroup>

            <Link
              href="/posts/2"
              className="w-fit text-base text-brand-primary font-bold hover:underline hover:brightness-90 transition-all"
            >
              Ler mais
            </Link>
          </article>

          <article className="flex flex-col gap-4 p-6 border border-brand-primary rounded-sm hover:shadow-2xl hover:shadow-brand-primary/30 transition-all">
            <div className="relative">
              <img
                src="/posts/3.avif"
                alt="Imagem da postagem 3: Desenvolvendo uma ferramenta interativa de estudo."
              />

              <span className="w-full max-w-[130px] h-[30px] bg-brand-primary text-white font-display text-sm flex items-center justify-center  absolute bottom-0 right-0">
                IA
              </span>
            </div>

            <hgroup className="flex flex-col gap-4">
              <h3 className="font-display font-bold text-xl/[100%] text-foreground-primary">
                Desenvolvendo um site de assinatura de conteúdo
              </h3>

              <p className="text-base text-foreground-secondary">
                Lorem ipsum dolor sit amet consectetur. Et morbi egestas
                facilisis neque gravida in diam fermentum. Leo sed eu donec mi
                elit...
              </p>
            </hgroup>

            <Link
              href="/posts/3"
              className="w-fit text-base text-brand-primary font-bold hover:underline hover:brightness-90 transition-all"
            >
              Ler mais
            </Link>
          </article>
        </div>
      </section>

      <footer className="container flex justify-center mt-[38px] mb-11">
        <p className="text-center text-base text-foreground-secondary">
          © Copyright 2025. Produzido por Fernanda Mascheti
        </p>
      </footer>
    </main>
  );
}
