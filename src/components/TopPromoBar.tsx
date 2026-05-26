import { Sparkles } from "lucide-react";

export function TopPromoBar() {
  return (
    <div className="bg-primary text-primary-foreground text-xs sm:text-sm">
      <div className="container-wide flex items-center justify-center gap-2 py-2.5 text-center">
        <Sparkles className="w-3.5 h-3.5 shrink-0" />
        <span className="font-medium tracking-wide">
          Limited time - Free VAT registration with every business license package.
        </span>
        <a href="#pricing" className="underline underline-offset-4 hover:opacity-80 hidden sm:inline">
          Learn more
        </a>
      </div>
    </div>
  );
}
