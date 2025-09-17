import { ReactNode } from "react";
import Link from "next/link";

import { Category } from "@/lib/models";

interface PostGridProps {
  children: ReactNode;
}

export function PostGrid({ children }: PostGridProps) {
  return <div className="grid grid-cols-3 gap-6">{children}</div>;
}

interface PostGridItemProps {
  id: string;
  imageUrl: string;
  category: Category;
  title: string;
  excerpt: string;
}

export function PostGridItem({
  id,
  imageUrl,
  category,
  title,
  excerpt,
}: PostGridItemProps) {
  return (
    <article className="flex flex-col gap-4 p-6 border border-brand-primary rounded-sm hover:shadow-2xl hover:shadow-brand-primary/30 transition-all">
      <div className="relative">
        <img
          src={imageUrl}
          alt={`Imagem da postagem ${title}`}
          className="w-full object-cover"
        />

        <span className="w-full max-w-[130px] h-[30px] bg-brand-primary text-white font-display text-sm flex items-center justify-center  absolute bottom-0 right-0">
          {category.name}
        </span>
      </div>

      <hgroup className="flex flex-col justify-between gap-4 h-full">
        <h3 className="font-display font-bold text-xl/[100%] text-foreground-primary">
          {title}
        </h3>

        <p className="text-base text-foreground-secondary line-clamp-3 overflow-ellipsis">
          {excerpt}
        </p>
      </hgroup>

      <Link
        href={`/posts/${id}`}
        className="w-fit text-base text-brand-primary font-bold hover:underline hover:brightness-90 transition-all"
      >
        Ler mais
      </Link>
    </article>
  );
}
