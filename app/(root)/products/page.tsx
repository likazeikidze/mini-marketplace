import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$120",
    image: "/products/wireless-headphones.jpg",
  },
  {
    id: 2,
    name: "Smartwatch",
    price: "$250",
    image: "/products/smartwatch.jpg",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: "$80",
    image: "/products/bluetooth-speaker.jpg",
  },
  {
    id: 4,
    name: "Ultrabook Laptop",
    price: "$1200",
    image: "/products/laptop.jpg",
  },
  {
    id: 5,
    name: "Gaming Mouse",
    price: "$60",
    image: "/products/gaming-mouse.jpg",
  },
  {
    id: 6,
    name: "Mechanical Keyboard",
    price: "$100",
    image: "/products/mechanical-keyboard.jpg",
  },
  {
    id: 7,
    name: "Portable Charger",
    price: "$40",
    image: "/products/power-bank.jpg",
  },
  {
    id: 8,
    name: "VR Headset",
    price: "$400",
    image: "/products/vr-headset.jpg",
  },

  {
    id: 9,
    name: "Security Camera",
    price: "$90",
    image: "/products/security-camera.jpg",
  },
];

const AllProducts = () => {
  return (
    <main className="min-h-screen w-full px-6 md:px-20 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">All Products</h1>
        <p className="text-lg md:text-xl text-gray-700">
          Explore our electronics and gadgets
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white dark:bg-[#1a1a1a] rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col items-center"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="rounded-lg object-cover"
            />
            <h2 className="mt-4 text-lg font-semibold">{product.name}</h2>
            <p className="text-primary font-bold mt-2">{product.price}</p>
            <button className="mt-4 bg-primary hover:bg-secondary text-white font-semibold py-2 px-4 rounded-lg w-full transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default AllProducts;
