import type { PropsWithChildren } from "react";

type BentoCardProps = PropsWithChildren<{
  className?: string;
}>;

export function BentoCard({ children, className = "" }: BentoCardProps) {
  return <div className={`panel h-full p-6 sm:p-7 ${className}`.trim()}>{children}</div>;
}
