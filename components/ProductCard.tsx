import { ProductProps } from "@/types";
import Image from "next/image";

const ProductCard = ({ product }: { product: ProductProps }) => {
  return (
    <div className="h-105 w-full max-w-70 flex flex-col bg-gray-200 dark:bg-[#202020] rounded-xl shadow-md p-4">
      <Image
        src={product.image_url}
        alt={product.name}
        width={300}
        height={220}
        className="w-full h-55 rounded-lg object-cover"
      />

      <div className="flex flex-col flex-1 justify-between mt-4">
        <div>
          <h2 className="mt-4 text-lg font-semibold line-clamp-2">
            {product.name}
          </h2>
          <p className="text-primary font-bold mt-2">{product.price}</p>
        </div>
        <button className="mt-4 bg-primary hover:bg-[#6886e0]  text-white font-semibold py-2 px-4 rounded-lg w-full transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
