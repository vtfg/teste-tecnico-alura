"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
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
    <div className="flex flex-col items-center gap-2 py-8 text-center">
      <h2 className="font-display font-bold text-lg text-foreground-primary">
        Houve um problema
      </h2>
      <p className="text-sm text-foreground-primary">{message}</p>
      <Button className="mt-2 text-sm" onClick={handleResetSearch}>
        Limpar pesquisa
      </Button>
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
    <div className="flex flex-col items-center gap-2 py-8 text-center">
      <h2 className="font-display font-bold text-lg text-foreground-primary">
        Houve um problema
      </h2>
      <p className="text-sm text-foreground-primary">{message}</p>
      <Button className="mt-2 text-sm" onClick={handleGoBack}>
        Voltar para a página inicial
      </Button>
    </div>
  );
}
