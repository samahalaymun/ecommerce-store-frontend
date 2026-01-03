
export default function ProductDetailsSkeleton() {
  return (
    <div className="animate-pulse space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <div className="w-full aspect-4/3 bg-muted-foreground/20 rounded-md" />
          <div className="h-6 w-1/3 bg-muted-foreground/20 rounded" />
          <div className="h-4 w-full bg-muted-foreground/20 rounded" />
          <div className="h-4 w-full bg-muted-foreground/20 rounded" />
        </div>
        <div className="space-y-4">
          <div className="h-8 w-2/3 bg-muted-foreground/20 rounded" />
          <div className="h-6 w-1/3 bg-muted-foreground/20 rounded" />
          <div className="h-10 w-full bg-muted-foreground/20 rounded" />
          <div className="h-6 w-full bg-muted-foreground/20 rounded" />
        </div>
      </div>

      <div className="space-y-4">
        <div className="h-6 w-40 bg-muted-foreground/20 rounded" />
        <div className="h-4 w-full bg-muted-foreground/20 rounded" />
        <div className="h-4 w-full bg-muted-foreground/20 rounded" />
      </div>

      <div className="space-y-4">
        <div className="h-6 w-40 bg-muted-foreground/20 rounded" />
        <div className="grid gap-4">
          <div className="h-28 w-full bg-muted-foreground/20 rounded" />
          <div className="h-28 w-full bg-muted-foreground/20 rounded" />
        </div>
      </div>
    </div>
  );
}
