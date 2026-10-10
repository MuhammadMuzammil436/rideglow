import Link from "next/link";
import type { ComponentProps } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ButtonStyle = NonNullable<Parameters<typeof buttonVariants>[0]>;
type Props = ComponentProps<typeof Link> &
  Pick<ButtonStyle, "variant" | "size">;

export function LinkButton({ variant, size, className, ...props }: Props) {
  return (
    <Link
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
