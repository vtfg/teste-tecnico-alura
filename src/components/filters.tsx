"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import clsx from "clsx";

import { categories } from "@/lib/constants";
import { Category } from "@/lib/models";

export function Filters() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentCategory = searchParams.get("category");

  function handleChangeCategory(category: Omit<Category, "description">) {
    const categoryExists =
      categories.findIndex((c) => c.slug === category.slug) !== -1;

    if (!categoryExists) {
      alert("Categoria inexistente.");
      return;
    }

    const params = new URLSearchParams(searchParams);
    params.set("category", category.slug.toString());
    params.delete("page");

    // TODO: Scroll to blog posts section
    router.replace(`${pathname}?${params.toString()}`);
  }

  function handleClearFilter() {
    const params = new URLSearchParams(searchParams);
    params.delete("category");
    params.delete("page");

    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex items-center justify-end gap-4 w-full ">
      <p className="text-base font-bold text-foreground-primary">Categorias:</p>

      <div className="flex gap-4 max-w-md overflow-x-auto">
        {categories.map((category) => (
          <button
            key={category.slug}
            title={`Filtrar pela categoria ${category.name}`}
            className={clsx(
              "px-3 py-2 min-w-fit bg-brand-primary text-white font-bold border border-brand-primary rounded-sm outline-0 transition-all cursor-pointer hover:brightness-90 focus:ring-2 focus:ring-brand-primary/50 disabled:bg-brand-disabled disabled:border-brand-disabled disabled:cursor-not-allowed",
              {
                "bg-brand-disabled! border-brand-disabled! focus:ring-brand-disabled/50!":
                  currentCategory && currentCategory !== category.slug,
              }
            )}
            onClick={() => handleChangeCategory(category)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {currentCategory && (
        <button
          aria-label="Limpar filtro de categoria"
          title="Limpar filtro de categoria"
          className="size-8 flex items-center justify-center transition-all outline-0 rounded-full group cursor-pointer hover:brightness-90 focus:bg-brand-primary focus:ring-2 focus:ring-brand-primary/50"
          onClick={handleClearFilter}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-brand-primary group-focus:stroke-white transition-colors size-6"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="m15 9-6 6" />
            <path d="m9 9 6 6" />
          </svg>
        </button>
      )}
    </div>
  );
}
