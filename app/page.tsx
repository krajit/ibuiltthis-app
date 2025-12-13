import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image";
import HeroSection from "@/components/landing-page/hero-section";
import FeaturedToday from "@/components/landing-page/featured-products";
import RecentLaunchedProducts from "@/components/landing-page/recent-launched-products";
export default function Home() {
  return (
    <div>
      <HeroSection/>
      <FeaturedToday/>
      <RecentLaunchedProducts/>
    </div>
  );
}
