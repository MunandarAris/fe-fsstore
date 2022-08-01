import CardCategori from "components/moleculs/CardCategori";

const categories = [
  {
    name: "Pakaian Anak Laki Laki",
    imgCategory: "/category/boy-category.png",
  },
  {
    name: "Pakaian Pria",
    age: "13 tahun - 45 tahun",
    imgCategory: "/category/men-category.png",
  },
  {
    name: "Pakaian Anak Perempuan",
    imgCategory: "/category/girl-category.png",
  },
  {
    name: "Pakaian Perempuan",
    imgCategory: "/category/woman-category.png",
  },
];

export default function Categories() {
  return (
    <div className="mx-auto px-14 my-10">
      <div className="grid grid-cols-4 gap-16">
        {categories.map((item, index) => (
          <CardCategori name={item.name} img={item.imgCategory} key={index} />
        ))}
      </div>
    </div>
  );
}
