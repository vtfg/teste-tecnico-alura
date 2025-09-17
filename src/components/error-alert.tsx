"use client";

import { useRouter } from "next/navigation";

import { genericErrorMessages, postPageErrorMessages } from "@/lib/constants";
import { APIError } from "@/lib/models";

interface ErrorAlertProps {
  error?: APIError;
}

export function ErrorAlert({ error }: ErrorAlertProps) {
  const router = useRouter();

  let message = genericErrorMessages.unexpected;

  if (error) {
    message = genericErrorMessages[error];
  }

  function handleResetSearch() {
    router.push(`/#blog`);
  }

  return (
    <div className="flex flex-col items-center gap-2 py-8">
      <h2 className="font-display font-bold text-lg text-foreground-primary">
        Houve um problema
      </h2>
      <p className="text-sm text-foreground-primary">{message}</p>
      <button
        className="mt-2 px-3 py-2 min-w-fit bg-brand-primary text-white text-sm font-bold border border-brand-primary rounded-sm outline-0 transition-all cursor-pointer hover:brightness-90 focus:ring-2 focus:ring-brand-primary/50 disabled:bg-brand-disabled disabled:border-brand-disabled disabled:cursor-not-allowed"
        onClick={handleResetSearch}
      >
        Limpar pesquisa
      </button>
    </div>
  );
}

export function PostPageErrorAlert({ error }: ErrorAlertProps) {
  const router = useRouter();

  let message = postPageErrorMessages.unexpected;

  if (error) {
    message = postPageErrorMessages[error];
  }

  function handleGoBack() {
    router.push(`/#blog`);
  }

  return (
    <div className="flex flex-col items-center gap-2 py-8">
      <h2 className="font-display font-bold text-lg text-foreground-primary">
        Houve um problema
      </h2>
      <p className="text-sm text-foreground-primary">{message}</p>
      <button
        className="mt-2 px-3 py-2 min-w-fit bg-brand-primary text-white text-sm font-bold border border-brand-primary rounded-sm outline-0 transition-all cursor-pointer hover:brightness-90 focus:ring-2 focus:ring-brand-primary/50 disabled:bg-brand-disabled disabled:border-brand-disabled disabled:cursor-not-allowed"
        onClick={handleGoBack}
      >
        Voltar para a página inicial
      </button>
    </div>
  );
}
