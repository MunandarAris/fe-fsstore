import DropdownFAQ from "components/moleculs/DropdownFAQ";
import { useState } from "react";

const faq = [
  {
    id: 1,
    question: "Apakah aman belanja disini ?",
    answer:
      "Kami memiliki keamanan yang baik dan benar, dan kami telah di awasi langsung oleh pemerintah indonesia",
  },
  {
    id: 2,
    question: "Apakah aman belanja disini ?",
    answer:
      "Kami memiliki keamanan yang baik dan benar, dan kami telah di awasi langsung oleh pemerintah indonesia",
  },
  {
    id: 3,
    question: "Apakah aman belanja disini ?",
    answer:
      "Kami memiliki keamanan yang baik dan benar, dan kami telah di awasi langsung oleh pemerintah indonesia",
  },
];

export default function FAQ() {
  const [activeFaq, setActiveFaq] = useState(1);

  const handleShowHideFAQ = (id) => {
    setActiveFaq(id);
  };

  return (
    <div className="mt-10">
      <h1 className="font-bold text-black text-2xl relative before:content-[''] before:w-5 before:h-1 before:bg-black before:absolute before:left-0 before:-bottom-2">
        FAQ
      </h1>

      <div className="mt-6 flex flex-col gap-5">
        {faq.map((item) => (
          <DropdownFAQ
            key={item.id}
            question={item.question}
            answer={item.answer}
            id={item.id}
            handleActive={handleShowHideFAQ}
            openAnswer={activeFaq}
          />
        ))}
      </div>
    </div>
  );
}
