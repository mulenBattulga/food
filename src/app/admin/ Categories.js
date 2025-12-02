"use client";

import Plus from "../icons/Plus";

export function Categories() {
  const categories = [
    "All dishes",
    "Pizza",
    "Burger",
    "Salad",
    "Dessert",
    "Drinks",
  ];

  return (
    <div className="w-[1171px] h-44 bg-white rounded-2xl p-6 shadow-sm border">
      <div className="text-[22px] font-semibold mb-4">Dishes Category</div>

      <div className="flex flex-wrap gap-3">
        {categories.map((cat, i) => (
          <button
            key={i}
            className="px-5 py-2 rounded-xl border text-sm hover:bg-black hover:text-white transition-all duration-200"
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="w-9 h-9 bg-red-500 flex justify-center items-center rounded-4xl ">
        <Plus />
      </div>
    </div>
  );
}
