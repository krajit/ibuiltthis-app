import { ArrowRightIcon, ArrowUpRightIcon, StarIcon } from "lucide-react";
import SectionHeader from "@/components/common/section-headers";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import ProductCard from "@/components/products/product-card";

const featuredProducts = [
    {
        id: 1,
        name: "Product 1 Name",
        description: "Product 1 description",
        tags: ["Tag 1", "Tag 2", "Tag 3"],
        votes: 100,
        isFeatured: true
    },
    {
        id: 2,
        name: "Product 2 Name",
        description: "Product 2 description",
        tags: ["Tag 1", "Tag 2", "Tag 4"],
        votes: 50,
        isFeatured: false
    },
    {
        id: 3,
        name: "Product 3 Name",
        description: "Product 3 description",
        tags: ["Tag 1", "Tag 2", "Tag 5"],
        votes: 25,
        isFeatured: true
    },
    {
        id: 4,
        name: "Product 4 Name",
        description: "Product 4 description",
        tags: ["Tag 1", "Tag 2", "Tag 6"],
        votes: 10,
        isFeatured: false
    },
    {
        id: 5,
        name: "Product 5 Name",
        description: "Product 5 description",
        tags: ["Tag 1", "Tag 5", "Tag 7"],
        votes: 5,
        isFeatured: true
    }
]



export default function FeaturedProducts() {
    return (
        <section className="py-20 bg-muted/20">
            <div className="wrapper">
                <div className="flex items-center justify-between mb-8">
                    <SectionHeader title="Featured Today"
                        icon={StarIcon}
                        description="Top picks from our community this week"
                    />
                    <Button variant="outline" asChild className="hidden sm:flex">
                        <Link href="/explore">View All <ArrowUpRightIcon className="size-4" />
                        </Link>
                    </Button>
                </div>

                <div className="grid-wrapper">
                    {featuredProducts.map((product: any) =>    
                        <ProductCard key={product.id} product={product} />
                    )}
                </div>


            </div>
        </section>
    );
}