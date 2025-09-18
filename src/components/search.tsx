"use client";

import { FormEvent } from "react";

import { IconButton } from "@/components/ui/button";

export function Search() {
  function handleSearch(event: FormEvent) {
    event.preventDefault();

    // The API doesn't support keyword search.
  }

  return (
    <form
      onSubmit={handleSearch}
      className="flex justify-end items-center relative w-full max-w-[320px]"
    >
      <input
        aria-label="Pesquisa por palavra-chave"
        name="search"
        type="text"
        placeholder="Buscar..."
        readOnly
        className="px-4 py-2 w-full border border-brand-primary rounded-sm text-foreground-primary placeholder:text-base placeholder:text-foreground-primary placeholder:opacity-50 focus:ring-2 focus:ring-brand-primary/50 outline-0 transition-all"
      />

      <IconButton
        aria-label="Pesquisar"
        type="submit"
        className="absolute mr-2"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
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
      </IconButton>
    </form>
  );
}
