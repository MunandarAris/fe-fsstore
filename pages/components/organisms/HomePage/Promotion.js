import React from "react";
import Button from "../../atoms/ButtonFixed";

export default function Promotion() {
  return (
    <div className="mx-auto w-9/12 bg-orange-400 rounded-2xl bg-[url('/promotion-bg.jpg')] h-[400px] bg-no-repeat bg-cover bg-bottom relative">
      <div className="absolute bg-black w-full h-full top-0 left-0 rounded-2xl bg-opacity-70" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="font-bold text-white text-4xl leading-tight tracking-wider drop-shadow-2xl">
          Dapatkan Barang Terbaik Dengan Harga Terjangkau
        </h1>

        <Button
          onClick={() => {}}
          className="bg-white font-semibold text-black rounded-full px-7 py-3 mt-10"
        >
          Belanja Sekarang
        </Button>
      </div>
    </div>
  );
}
