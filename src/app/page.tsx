import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-start gap-8 w-full">
            <h2 className="font-display font-bold text-2xl text-foreground-primary">
              Minhas postagens
            </h2>

            <form className="flex justify-end items-center relative w-full max-w-[320px]">
              <input
                aria-label="Pesquisa por palavra-chave"
                name="search"
                type="text"
                placeholder="Buscar..."
                className="px-4 py-2 w-full border border-brand-primary rounded-sm text-foreground-primary placeholder:text-base placeholder:text-foreground-primary placeholder:opacity-50 focus:ring-2 focus:ring-brand-primary/50 outline-0 transition-all"
              />

              <button
                aria-label="Pesquisar"
                type="submit"
                className="absolute mr-2 size-8 flex items-center justify-center transition-all outline-0 rounded-full group cursor-pointer hover:brightness-90 focus:bg-brand-primary focus:ring-2 focus:ring-brand-primary/50"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-brand-primary group-focus:stroke-white transition-colors size-6"
                >
                  <path
                    d="M21 21L16.66 16.66"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
          </div>

          <div className="flex items-center justify-end gap-4 w-full">
            <p className="text-base font-bold text-foreground-primary">
              Categorias:
            </p>

            <button className="px-3 py-2 bg-brand-primary text-white font-bold border border-brand-primary rounded-sm outline-0 transition-all cursor-pointer hover:brightness-90 focus:ring-2 focus:ring-brand-primary/50 disabled:bg-brand-disabled disabled:border-brand-disabled disabled:cursor-not-allowed">
              IA
            </button>
            <button className="px-3 py-2 bg-brand-primary text-white font-bold border border-brand-primary rounded-sm outline-0 transition-all cursor-pointer hover:brightness-90 focus:ring-2 focus:ring-brand-primary/50 disabled:bg-brand-disabled disabled:border-brand-disabled disabled:cursor-not-allowed">
              Back-end
            </button>
            <button className="px-3 py-2 bg-brand-primary text-white font-bold border border-brand-primary rounded-sm outline-0 transition-all cursor-pointer hover:brightness-90 focus:ring-2 focus:ring-brand-primary/50 disabled:bg-brand-disabled disabled:border-brand-disabled disabled:cursor-not-allowed">
              Front-end
            </button>
          </div>
        </div>

        <div className="grid grid-rows-2 grid-cols-3 gap-6">
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

          <article className="flex flex-col gap-4 p-6 border border-brand-primary rounded-sm hover:shadow-2xl hover:shadow-brand-primary/30 transition-all">
            <div className="relative">
              <img
                src="/posts/3.avif"
                alt="Imagem da postagem 4: Desenvolvendo uma ferramenta interativa de estudo."
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
              href="/posts/4"
              className="w-fit text-base text-brand-primary font-bold hover:underline hover:brightness-90 transition-all"
            >
              Ler mais
            </Link>
          </article>

          <article className="flex flex-col gap-4 p-6 border border-brand-primary rounded-sm hover:shadow-2xl hover:shadow-brand-primary/30 transition-all">
            <div className="relative">
              <img
                src="/posts/2.jpg"
                alt="Imagem da postagem 5: Utilizando a responsividade em aplicações com HTML e CSS."
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
              href="/posts/5"
              className="w-fit text-base text-brand-primary font-bold hover:underline hover:brightness-90 transition-all"
            >
              Ler mais
            </Link>
          </article>

          <article className="flex flex-col gap-4 p-6 border border-brand-primary rounded-sm hover:shadow-2xl hover:shadow-brand-primary/30 transition-all">
            <div className="relative">
              <img
                src="/posts/1.jpg"
                alt="Imagem da postagem 6: Desenvolvendo uma ferramenta interativa de estudo."
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
              href="/posts/6"
              className="w-fit text-base text-brand-primary font-bold hover:underline hover:brightness-90 transition-all"
            >
              Ler mais
            </Link>
          </article>
        </div>

        <div className="flex items-center gap-4">
          <button className="px-3 py-2 bg-brand-secondary text-white font-bold border border-brand-secondary rounded-sm outline-0 transition-all cursor-pointer hover:brightness-90 focus:ring-2 focus:ring-brand-secondary/50 disabled:bg-brand-disabled disabled:text-white disabled:border-brand-disabled">
            1
          </button>
          <button className="px-3 py-2 bg-brand-disabled text-white font-bold border border-brand-disabled rounded-sm outline-0 transition-all cursor-pointer hover:brightness-90 focus:ring-2 focus:ring-brand-disabled/50">
            2
          </button>
          <button className="px-3 py-2 bg-brand-disabled text-white font-bold border border-brand-disabled rounded-sm outline-0 transition-all cursor-pointer hover:brightness-90 focus:ring-2 focus:ring-brand-disabled/50">
            3
          </button>
        </div>
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
                href="mail:fernandamascheti@gmail.com"
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
