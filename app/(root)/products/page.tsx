import { createClient } from "@/lib/supabase/server";
import ProductCard from "@/components/ProductCard";

const AllProducts = async () => {
  const supabase = await createClient();
  const { data: products, error } = await supabase.from("products").select("*");

  if (error) {
    console.error("Error fetching products:", error);

    return (
      <main className="min-h-screen w-full px-6 md:px-20 py-16">
        <p className="text-center text-red-500">
          Failed to load products. Please try again later.
        </p>
      </main>
    );
  }

  if (!products || products.length === 0) {
    return (
      <main className="min-h-screen w-full px-6 md:px-20 py-16">
        <p className="text-center text-gray-500">
          No products found. Please check back later.
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen w-full px-6 md:px-20 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">All Products</h1>
        <p className="text-lg md:text-xl text-gray-500">
          Explore our electronics and gadgets
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default AllProducts;
