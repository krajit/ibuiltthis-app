import { Icon, LucideIcon } from "lucide-react"

export default function StatsCard({ label, value, icon:Icon }:
    { label: string, value: string, icon: LucideIcon }) {
    return (
        <div>
            <div className="flex items-center justify-center gap-2">
                <Icon className="size-4 text-primary/70" />
                <p className="text-3xl sm:text-4xl font-bold">{value}</p>
            </div>
            <p className="text-sm text-muted-foreground">{label}</p>
        </div>
    );
}