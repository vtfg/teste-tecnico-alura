"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const ThemeSwitch = dynamic(() => import("./theme-switch"), { ssr: false });

export function Navbar() {
  const pathname = usePathname();

  return (
    <Disclosure
      as="nav"
      className="relative w-full flex flex-col justify-center items-center py-8! lg:py-18!"
    >
      <div className="container relative flex items-center justify-between">
        <div className="flex flex-1 items-stretch justify-between">
          <div className="flex shrink-0 items-center">
            <Link href="/" className="flex gap-2 lg:gap-5 items-center group">
              <Image
                src="/logo.png"
                width={46}
                height={46}
                alt="Logo do website."
                className="group-hover:brightness-90 transition-all size-8 lg:size-11.5"
              />

              <span className="font-display font-bold text-lg lg:text-2xl text-brand-secondary dark:text-foreground-primary uppercase group-hover:underline">
                Fernanda Mascheti
              </span>
            </Link>
          </div>

          <div className="hidden sm:flex items-center gap-4">
            <ul className="flex gap-8">
              <li
                className={clsx(
                  "font-display font-bold text-xl lg:text-2xl text-foreground-primary hover:underline hover:brightness-90 transition-all",
                  {
                    "text-brand-primary!": pathname === "/",
                  }
                )}
              >
                <Link href="/">Início</Link>
              </li>
              <li
                className={clsx(
                  "font-display font-bold text-xl lg:text-2xl text-foreground-primary hover:underline hover:brightness-90 transition-all",
                  {
                    "text-brand-primary!": pathname.startsWith("/posts"),
                  }
                )}
              >
                <Link href="/#blog">Blog</Link>
              </li>
            </ul>

            <ThemeSwitch />
          </div>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center sm:hidden mr-1">
          <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-foreground-primary focus:ring-2 focus:ring-brand-primary">
            <span className="absolute -inset-0.5" />
            <span className="sr-only">Open main menu</span>
            <Bars3Icon
              aria-hidden="true"
              className="block size-6 group-data-open:hidden"
            />
            <XMarkIcon
              aria-hidden="true"
              className="hidden size-6 group-data-open:block"
            />
          </DisclosureButton>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden w-full border-b border-b-brand-gray/25">
        <div className="space-y-1 px-2 pt-2 pb-3">
          <DisclosureButton
            as="a"
            href="#blog"
            aria-current={pathname === "/" ? "page" : undefined}
            className={clsx(
              pathname === "/"
                ? "bg-brand-primary text-white"
                : "text-foreground-primary",
              "block rounded-md px-3 py-2 text-base font-medium hover:bg-brand-gray transition-colors duration-100"
            )}
          >
            Início
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="#blog"
            aria-current={pathname.startsWith("/posts") ? "page" : undefined}
            className={clsx(
              pathname.startsWith("/posts")
                ? "bg-brand-primary text-white"
                : "text-foreground-primary",
              "block rounded-md px-3 py-2 text-base font-medium hover:bg-brand-gray transition-colors duration-100"
            )}
          >
            Blog
          </DisclosureButton>

          <div className="mt-2">
            <ThemeSwitch />
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
