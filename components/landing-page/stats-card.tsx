import { cn } from "@/lib/utils";
import { Icon, LucideIcon } from "lucide-react"

export default function StatsCard({ 
    label, 
    value, 
    icon:Icon,
    hasborder
 }:
    { label: string, 
        value: string, 
        icon: LucideIcon,
        hasborder?: boolean
    }) {
    return (
        <div className={cn("space-y-2", hasborder && "border-x border-border/50")}>
            <div className="flex items-center justify-center gap-2">
                <Icon className="size-4 text-primary/70" />
                <p className="text-3xl sm:text-4xl font-bold">{value}</p>
            </div>
            <p className="text-sm text-muted-foreground">{label}</p>
        </div>
    );
}