"use client";

import { errorMessages } from "@/lib/constants";
import { APIError } from "@/lib/models";

interface ErrorAlertProps {
  error?: APIError;
}

export function ErrorAlert({ error }: ErrorAlertProps) {
  let message = errorMessages.unexpected;

  if (error) {
    message = errorMessages[error];
  }

  return (
    <div className="flex flex-col items-center gap-2 py-8">
      <h2 className="font-display font-bold text-lg text-foreground-primary">
        Houve um problema
      </h2>
      <p className="text-sm text-foreground-primary">{message}</p>
    </div>
  );
}
