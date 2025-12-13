import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRightIcon, EyeIcon, RocketIcon, SparklesIcon, UsersRoundIcon } from "lucide-react"
import StatsCard from "./stats-card"

const LiveBadge = () => {
    return (
        <Badge variant="outline" className="px-4 py-2 text-sm backdrop-blur-sm">
            <span className="relative flex h-2 w-2 ">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-muted-foreground">Join thousands of creators sharing their work</span>
        </Badge>
    )
}

const statsData = [
    {
        label: "Projects Shared",
        value: "2.5K+",
        icon: RocketIcon
    },
    {
        label: "Active Creaters",
        value: "10K+",
        icon: UsersRoundIcon,
        hasborder: true
    },
    {
        label: "Monthly Visitors",
        value: "50K+",
        icon: EyeIcon
    },

]

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-linear-to-b from-background via-background to-muted/20">
            <div className="wrapper">

                <div className="flex flex-col items-center justify-center lg:py-20 py-12 space-y-6 text-center">
                    <LiveBadge />
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-4xl mx-auto">
                        Share What You&apos;ve Built, Discover What&apos;s Launching</h1>

                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg sm:text-xl mb-10 leading-relaxed">
                        A community platform for creators to showcase their apps, AI tools, SaaS products, and creative projects. Authentic launches, real builders, genuine feedback.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-16">
                        <Button asChild size="lg" className="text-base px-8 shadow-lg">
                            <Link href="/submit">

                                <SparklesIcon className="size-5" />
                                Share Your Project
                            </Link>
                        </Button>
                        <Button variant="secondary" asChild size="lg" className="text-base px-8 shadow-lg">
                            <Link href="/explore">
                                Explore Projects <ArrowRightIcon className="size-5" />
                            </Link>
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-12 max-w-2xl  w-full mx-auto gap-8">
                    {statsData.map((stat) => (
                            <StatsCard 
                            key={stat.label} 
                            label={stat.label} 
                            value={stat.value} 
                            icon={stat.icon}
                            hasborder={stat.hasborder} />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}