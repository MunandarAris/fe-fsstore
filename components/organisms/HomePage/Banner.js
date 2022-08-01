import Button from "components/atoms/Button";
import { useState } from "react";

export default function Banner() {
  const [slideActive, setSlideSctive] = useState(0);

  return (
    <div className="flex bg-primary justify-between pb-12 pt-14 border-b-8 border-secondary">
      {/* --- left --- */}
      <div className="w-6/12 pl-14 pb-10 flex justify-center">
        <div>
          {slideActive == 0 ? (
            <h1
              className={`font-bold text-4xl text-white leading-[50px] tracking-wide`}
            >
              Temukan Pakaian{" "}
              <span className="bg-secondary px-3 rounded-tr-xl rounded-bl-xl">
                Wanita
              </span>{" "}
              Dengan Kualitas Terbaik Dan Tentukan Pilihanmu
            </h1>
          ) : (
            <h1
              className={`font-bold text-4xl text-white leading-[50px] tracking-wide`}
            >
              Pilih dan Temukan Pakaian{" "}
              <span className="bg-secondary px-3 rounded-tr-xl rounded-bl-xl">
                Pria
              </span>{" "}
              Terbaik Dengan Pilihanmu
            </h1>
          )}

          <p className="text-gray-200 text-sm leading-2 tracking-wide my-5">
            Tempat belanja aman, nyaman dan terpercaya. Temukan banyak model
            pakaian terbaru dengan kualitas terbaik dan harga terjangkau
          </p>

          <div className="mt-8">
            <Button label="Belanja Sekarang" action={() => {}} />
          </div>
        </div>
      </div>
      {/* --- end left --- */}

      {/* --- right --- */}
      <div className="w-6/12 relative">
        <div className="flex absolute left-1/2 -translate-x-1/2 -top-10">
          <div className="w-[500px] h-auto relative z-30 -ml-20">
            <img
              src="/banner/fashion-female.png"
              className="object-cover "
              alt="Model Male"
            />
          </div>

          <div className="-ml-28 relative z-30">
            <img
              src="/banner/fashion-male.png"
              className="w-60 h-auto object-contain"
              alt="Model Male"
            />
          </div>

          <div
            className={`bg-secondary transition-all ease-in-out left-0 border-[10px] top-1/2 -translate-y-1/2 z-20 w-40 h-40 rounded-full absolute ${
              slideActive == 0 ? "left-5" : "left-40"
            }`}
          ></div>

          {/* --- prev and next --- */}
          <button
            onClick={() => setSlideSctive(0)}
            className="bg-secondary absolute -left-20 top-1/2 rounded-full py-0 px-1 bg-opacity-70 -translate-y-1/2 z-40 "
          >
            <i className="bx bx-chevron-left text-white text-4xl"></i>
          </button>

          <button
            onClick={() => setSlideSctive(1)}
            className="bg-secondary absolute -right-20 top-1/2 rounded-full py-0 px-1 bg-opacity-70 -translate-y-1/2 "
          >
            <i className="bx bx-chevron-right text-white text-4xl"></i>
          </button>
          {/* --- end prev and next --- */}
        </div>
      </div>
      {/* --- end right --- */}
    </div>
  );
}
