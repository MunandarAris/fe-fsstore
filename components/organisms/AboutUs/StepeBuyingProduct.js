import Button from "components/atoms/ButtonFixed";
import { useState } from "react";

const buttonFilter = [
  {
    id: 1,
    name: "Cari",
  },
  {
    id: 2,
    name: "Pilih",
  },
  {
    id: 3,
    name: "Beli",
  },
];

const cari =
  "Cari berbagai model pakaian, mulai dari pakaian anak sampai orang dewasa";
const pilih = "Pilih produk yang sesuai dengan seleramu";
const beli = "Beli dan produk menjadi milikmu sekarang";

export default function StepeBuyingProduct() {
  const [activeFilter, setActiveFilter] = useState(1);

  const handleActiveFilter = (id) => {
    setActiveFilter(id);
  };

  return (
    <div>
      <h1 className="font-bold text-black text-2xl relative before:content-[''] before:w-1/12 before:h-1 before:bg-black before:absolute before:left-0 before:-bottom-2">
        Belanja Mudah
      </h1>

      {/* --- button filter --- */}
      <div className="mt-7 justify-center flex gap-5">
        {buttonFilter.map((item) => (
          <Button
            key={item.id}
            onClick={() => handleActiveFilter(item.id)}
            className={`transition-all font-medium text-sm px-5 py-2 rounded-md ${
              activeFilter == item.id
                ? "text-white border border-primary bg-primary"
                : "border border-primary text-primary"
            }`}
          >
            {item.name}
          </Button>
        ))}
      </div>
      {/* --- end button filter --- */}

      {/* --- stepe --- */}
      <div className="relative h-96 mt-5">
        {/* --- line --- */}
        <div className="h-full w-1 rounded-md bg-primary absolute left-1/2 -translate-x-1/2" />

        <div className="w-5 h-5 rounded-full bg-white border-4 border-primary absolute left-1/2 -translate-x-1/2 top-2"></div>
        <div className="w-5 h-5 rounded-full bg-white border-4 border-primary  absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"></div>
        <div className="w-5 h-5 rounded-full bg-white border-4 border-primary absolute left-1/2 -translate-x-1/2 bottom-2"></div>

        {/* --- end line --- */}

        {/* --- content --- */}
        <div
          className={`absolute w-6/12 transition-all duration-500 ease-in-out bg-white rounded-md py-2 px-3 shadow ${
            activeFilter == 1
              ? "-translate-x-5"
              : activeFilter == 2
              ? "translate-x-64 translate-y-40"
              : "-translate-x-5 translate-y-80"
          }`}
        >
          <p className="text-sm font-medium text-gray-600 transition-all ease-in-out duration-300">
            {activeFilter == 1 ? cari : activeFilter == 2 ? pilih : beli}
          </p>
        </div>
        {/* --- end content --- */}
      </div>
      {/* --- end stepe --- */}
    </div>
  );
}
