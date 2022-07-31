import Image from "next/image";
import Button from "../atoms/Button";

export default function CardCategori({ name, img }) {
  return (
    <div className="w-full bg-third h-60 rounded-md overflow-hidden relative group">
      <Image
        src={img}
        alt={name}
        width="100%"
        height="100%"
        layout="responsive"
        objectFit="cover"
        className="group-hover:scale-105 transition-all ease-in-out"
      />

      <div className="w-full h-full absolute bg-gray-700 bg-opacity-70 top-0 left-0">
        <h1 className="absolute text-center select-none text-white font-bold text-xl left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 block group-hover:hidden">
          {name}
        </h1>

        <div className="absolute text-xl left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 hidden group-hover:block">
          <Button label="Selengkapnya" bgOpacity="bg-opacity-70" />
        </div>
      </div>
    </div>
  );
}
