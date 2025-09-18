"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  return (
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
        <li
          className={clsx(
            "font-display font-bold text-2xl text-foreground-primary hover:underline hover:brightness-90 transition-all",
            {
              "text-brand-primary!": pathname === "/",
            }
          )}
        >
          <Link href="/">Início</Link>
        </li>
        <li
          className={clsx(
            "font-display font-bold text-2xl text-foreground-primary hover:underline hover:brightness-90 transition-all",
            {
              "text-brand-primary!": pathname.startsWith("/posts"),
            }
          )}
        >
          <Link href="/#blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
}
