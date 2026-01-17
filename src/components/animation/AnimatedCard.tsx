import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

function AnimatedCard({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?:string;
}) {
  const { ref, isVisible } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(isVisible && "is-visible","w-full h-full", className)}
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default AnimatedCard;
