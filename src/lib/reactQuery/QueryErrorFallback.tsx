import { Button } from "@/components/ui/button";
import type { FallbackProps } from "react-error-boundary";

export function QueryErrorFallback({
  error,
  resetErrorBoundary,
}: FallbackProps) {
  return (
    <div className="p-6 text-center">
      <h2 className="text-destructive">
        Something went wrong
      </h2>

      <p className="mt-2 text-muted-foreground">{(error as Error).message}</p>
      <Button onClick={resetErrorBoundary}> Try again</Button>
    </div>
  );
}
