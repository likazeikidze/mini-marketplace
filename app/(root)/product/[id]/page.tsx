import { createClient } from "@/lib/supabase/server";
import Image from "next/image";
import { notFound } from "next/navigation";

const ProductDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const supabase = await createClient();

  const { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !product) {
    console.error("Error fetching product:", error);
    notFound();
  }

  return (
    <main className="min-h-screen w-full px-6 md:px-20 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div className="relative w-full aspect-square overflow-hidden rounded-2xl shadow-sm bg-white">
          <Image
            src={product.image_url || "/placeholder.png"}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <p className="text-sm text-gray-500 mb-2">Product Details</p>
            <h1 className="text-3xl md:text-4xl font-bold">{product.name}</h1>
          </div>

          <p className="text-2xl font-semibold">${product.price}</p>

          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Description</h2>
            <p className="text-gray-600 leading-7">
              {product.description || "No description available."}
            </p>
          </div>

          <button className="w-full md:w-fit px-6 py-3 rounded-xl bg-black text-white font-medium hover:opacity-90 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
