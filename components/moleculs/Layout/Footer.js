import React from "react";

// constant
const menuLink = [
  {
    name: "Home",
    path: "#",
  },
  {
    name: "Tentang Kami",
    path: "#",
  },
  {
    name: "Produk",
    path: "#",
  },
  {
    name: "Kategori",
    path: "#",
  },
];

const contact = [
  {
    icon: <i className="bx bxl-whatsapp text-2xl" />,
    contact: "0821 2234 2222",
  },
];

export default function Footer() {
  return (
    <div className="grid grid-cols-3 bg-primary p-10">
      <div>
        <h1 className="font-bold relative text-white text-xl before:content-[''] before:w-10 before:h-1 before:bg-white before:absolute before:-bottom-1 select-none">
          FSSTORE
        </h1>

        <p className="text-sm text-gray-200 font-normal leading-6 mt-4 select-none">
          Tempat belanja aman, nyaman dan terpercaya. Temukan banyak model
          pakaian terbaru dengan kualitas terbaik dan harga terjangkau
        </p>
      </div>

      <div className="flex flex-col justify-between">
        {menuLink.map((item, index) => (
          <a className="text-gray-200 text-sm cursor-pointer" key={index}>
            {item.name}
          </a>
        ))}
      </div>

      <div>
        <h1 className="font-bold relative text-white text-xl before:content-[''] before:w-10 before:h-1 before:bg-white before:absolute before:-bottom-1 select-none">
          Kontak Kami
        </h1>

        <div className="mt-5">
          {contact.map((item, index) => (
            <div key={index} className="flex items-center gap-1 text-gray-200">
              {item.icon}

              <span className="text-sm font-semibold">{item.contact}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
