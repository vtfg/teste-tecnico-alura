"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import clsx from "clsx";

import { Button, IconButton } from "@/components/ui/button";
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
          <Button
            key={category.slug}
            title={`Filtrar pela categoria ${category.name}`}
            className={clsx({
              "bg-brand-gray! border-brand-gray! focus:ring-brand-gray/50!":
                currentCategory && currentCategory !== category.slug,
            })}
            onClick={() => handleChangeCategory(category)}
          >
            {category.name}
          </Button>
        ))}
      </div>

      {currentCategory && (
        <IconButton
          aria-label="Limpar filtro de categoria"
          title="Limpar filtro de categoria"
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
          >
            <circle cx="12" cy="12" r="10" />
            <path d="m15 9-6 6" />
            <path d="m9 9 6 6" />
          </svg>
        </IconButton>
      )}
    </div>
  );
}
