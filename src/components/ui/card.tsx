import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    asChild?: boolean
  }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "div"
  return (
    <Comp
      ref={ref}
      className={cn(
        "rounded-lg border bg-white shadow-sm",
        className
      )}
      {...props}
    />
  )
})
Card.displayName = "Card"

export { Card } 