import Image from "next/image";
import { FormatRupiah } from "@arismun/format-rupiah";
import Button from "components/atoms/ButtonFixed";

export default function CardProduct({ imgProduct, name, price, stock, width }) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-4 ${width}`}>
      {/* --- header --- */}
      <div className="rounded-lg overflow-hidden h-[150px]">
        <Image
          src={imgProduct}
          alt={name}
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="cover"
        />
      </div>
      {/* --- end header --- */}

      {/* --- body --- */}
      <div className="flex items-center justify-between mt-5 gap-5">
        <div>
          <h1 className="font-bold text-black text-base">{name}</h1>
          <h6 className="font-medium text-sm text-gray-500">Stok {stock}</h6>
        </div>

        <div>
          <h1 className="font-bold text-secondary text-xl">
            <FormatRupiah value={price} />
          </h1>
        </div>
      </div>
      {/* --- end body --- */}

      {/* --- footer --- */}
      <div className="mt-5 flex justify-center gap-5">
        <Button
          onClick={() => {}}
          className="bg-primary text-white px-5 py-1 rounded-md"
        >
          <i className="bx bxs-cart-add text-lg" />
        </Button>

        <Button
          onClick={() => {}}
          className="border border-primary text-primary px-5 py-1 rounded-md"
        >
          <i className="bx bx-show text-lg" />
        </Button>
      </div>
      {/* --- end footer --- */}
    </div>
  );
}

CardProduct.defaultProps = {
  width: "w-full",
};
