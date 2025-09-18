"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import clsx from "clsx";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export function Pagination({ currentPage, totalPages }: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  function handleChangePage(page: number) {
    if (page > totalPages) {
      alert("Página não encontrada.");
      return;
    }

    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());

    // TODO: Scroll to blog posts section
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex items-center justify-center gap-4 w-full overflow-x-auto">
      {[...Array(totalPages).keys()].map((i) => (
        <button
          key={i}
          className={clsx(
            "px-3 py-2 text-white bg-brand-gray border-brand-gray font-bold border rounded-sm outline-0 transition-all cursor-pointer hover:brightness-90 focus:ring-2 focus:ring-brand-gray/50",
            {
              "bg-brand-secondary border-brand-secondary focus:ring-brand-secondary/50":
                currentPage === i + 1,
            }
          )}
          onClick={() => handleChangePage(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}
