import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-lg font-extrabold transition-all disabled:pointer-events-none disabled:opacity-50 outline-none",
  {
    variants: {
      variant: {
        default: "bg-black text-white rounded-[2px] border-2 border-white shadow-[0_0_16px_4px_#8FEFE3] hover:shadow-[0_0_32px_12px_#8FEFE3]",
        ghost: "bg-transparent text-white border-2 border-white rounded-[2px] hover:bg-white/10",
      },
      size: {
        default: "h-14 px-10 py-4",
        sm: "h-8 rounded-[2px] gap-1.5 px-3",
        lg: "h-16 rounded-[2px] px-12",
        icon: "size-14 rounded-[2px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
