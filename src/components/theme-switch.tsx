import { useTheme } from "next-themes";

import { IconButton } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <IconButton
        title="Alternar tema"
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
        className="hidden sm:flex"
      >
        {theme === "light" ? <SunIcon /> : <MoonIcon />}
      </IconButton>

      <div className="flex justify-between items-center sm:hidden px-3">
        <p className="text-foreground-primary">Alternar tema</p>

        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="px-4 py-1 border border-brand-primary rounded-sm text-foreground-primary placeholder:text-base placeholder:text-foreground-primary placeholder:opacity-50 focus:ring-2 focus:ring-brand-primary/50 outline-0 transition-all"
        >
          <option value="light">Claro</option>
          <option value="dark">Escuro</option>
        </select>
      </div>
    </div>
  );
}
