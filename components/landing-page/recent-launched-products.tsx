import { Calendar1Icon, RocketIcon } from "lucide-react";
import SectionHeader from "../common/section-headers";
import ProductCard from "../products/product-card";
import EmptyState from "../common/empty-state";

const recentLaunchedProducts = [
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
    }

]


export default function RecentLaunchedProducts() {
    return (
        <section className="py-20">
            <div className="wrapper">
                <SectionHeader title="Recently Launched"
                    icon={RocketIcon}
                    description="Discover the latest products from our community"
                />

                {recentLaunchedProducts.length === 0 ? <EmptyState message="No products launched in the last week. Check back later." icon={Calendar1Icon} />: 
                (    
                    <div className="grid-wrapper">
                        {recentLaunchedProducts.map((product: Product) =>
                            <ProductCard key={product.id} product={product as Product} />
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}