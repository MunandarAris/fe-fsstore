import Link from "next/link";
import Button from "pages/components/atoms/Button";

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

export default function Navbar({ transparent }) {
  return (
    <div
      className={`${
        transparent ? "bg-transparent" : "bg-primary"
      } px-14 flex items-center justify-between py-5 z-20 relative`}
    >
      {/* --- logo --- */}
      <h1 className="text-white font-bold text-2xl">FSSTORE</h1>

      {/* --- menu links --- */}
      <div className="inline-flex gap-5">
        {menuLink.map((item, index) => (
          <Link href={item.path} key={index}>
            <a className="text-white text-sm font-medium">{item.name}</a>
          </Link>
        ))}
      </div>

      {/* --- action menu --- */}
      <div className="flex items-center gap-5">
        <div className="relative">
          <i className="bx bxs-shopping-bag-alt text-white text-xl"></i>

          <span className="bg-secondary text-white rounded-full py-1 px-2 font-semibold text-sm absolute -left-5 -top-3">
            10
          </span>
        </div>

        <Button />
      </div>
    </div>
  );
}

Navbar.defaultProps = {
  transparent: true,
};
