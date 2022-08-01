export default function DropdownFAQ({
  answer,
  question,
  id,
  handleActive,
  openAnswer,
}) {
  return (
    <div className="w-full border border-gray-500 rounded-md py-2 px-4 shadow ">
      {/* --- question --- */}
      <div
        className="flex items-center justify-between gap-2 cursor-pointer"
        onClick={() => handleActive(id)}
      >
        <h1
          className={`font-bold text-sm transition-all ${
            openAnswer == id ? "text-primary" : "text-gray-700"
          }`}
        >
          {question}
        </h1>

        <i
          className={`bx ${
            openAnswer == id ? "bx-chevron-down rotate-180" : "bx-chevron-down"
          } font-bold text-2xl ${
            openAnswer == id ? "text-primary" : "text-gray-700"
          } transition-all`}
        ></i>
      </div>
      {/* --- end question --- */}

      {/* --- answer --- */}
      <p
        className={`text-sm transition-all text-gray-700 mt-3 ${
          openAnswer == id ? "block" : "hidden"
        }`}
      >
        {answer}
      </p>
      {/* --- end answer --- */}
    </div>
  );
}
