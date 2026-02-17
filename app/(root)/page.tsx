import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20 py-16">
        <div className="w-full md:w-1/2">
          <Image
            src="/hero-img.jpg"
            alt="Hero"
            width={600}
            height={600}
            className="rounded-xl shadow-lg object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground ">
            Welcome to Mini Marketplace
          </h1>
          <p className="text-lg md:text-xl dark:text-foreground">
            Explore our selection of electronics and gadgets. Simple, fast, and
            modern shopping experience.
          </p>
          <Link href="/products">
            <button className="bg-primary hover:bg-[#6886e0] text-white font-semibold py-3 px-6 rounded-lg w-max transition">
              See All Products
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
