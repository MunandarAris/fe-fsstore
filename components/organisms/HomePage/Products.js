import CardProduct from "components/moleculs/CardProduct";
import Button from "components/atoms/ButtonFixed";

// constant
const products = [
  {
    id: 0,
    imgProduct: "/product.jpg",
    name: "Baju Satu Set",
    price: 130000,
    stock: 20,
  },
  {
    id: 1,
    imgProduct: "/product.jpg",
    name: "Baju Satu Set",
    price: 130000,
    stock: 20,
  },
  {
    id: 2,
    imgProduct: "/product.jpg",
    name: "Baju Satu Set",
    price: 130000,
    stock: 20,
  },
  {
    id: 3,
    imgProduct: "/product.jpg",
    name: "Baju Satu Set",
    price: 130000,
    stock: 20,
  },
  {
    id: 4,
    imgProduct: "/product.jpg",
    name: "Baju Satu Set",
    price: 130000,
    stock: 20,
  },
];

export default function Products() {
  return (
    <div className="my-10 px-10">
      <h1 className="text-center text-black font-bold text-3xl">
        Daftar Produk Kami
      </h1>
      <p className="text-center mx-auto text-sm text-gray-600 mt-1 w-5/12">
        Tempat belanja aman, nyaman dan terpercaya. Temukan banyak model pakaian
        terbaru dengan kualitas terbaik dan harga terjangkau
      </p>

      <div className="grid grid-cols-4 mt-10 gap-x-7 gap-y-10">
        {products.map((item) => (
          <CardProduct
            key={item.id}
            imgProduct={item.imgProduct}
            name={item.name}
            price={item.price}
            stock={item.stock}
          />
        ))}
      </div>

      <Button
        onClick={() => {}}
        className="mt-7 bg-secondary text-white mx-auto block font-bold text-sm px-5 py-3 rounded-md shadow-md"
      >
        Lihat Selengkapnya
      </Button>
    </div>
  );
}
