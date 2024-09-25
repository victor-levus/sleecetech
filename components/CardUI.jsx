import * as React from "react";
import { cn } from "@/lib/utils";

const CardUI =
	React.forwardRef >
	(({ className, ...props }, ref) => (
		<div
			ref={ref}
			className={cn(
				"rounded-lg border bg-card text-card-foreground shadow-sm",
				className
			)}
			{...props}
		/>
	));

CardUI.displayName = "CardUI";

const CardContent =
	React.forwardRef >
	(({ className, ...props }, ref) => (
		<div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
	));

CardContent.displayName = "CardContent";

export { CardUI, CardContent };
