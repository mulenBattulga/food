"use client";

import Image from "next/image";

export function Saladss() {
  const dishes = [
    {
      id: 1,
      name: "Brie Crostini Appetizer",
      price: 12.99,
      description:
        "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
      image: "/Food1.png",
    },
    {
      id: 2,
      name: "Brie Crostini Appetizer",
      price: 12.99,
      description:
        "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
      image: "/Food1.png",
    },
    {
      id: 3,
      name: "Brie Crostini Appetizer",
      price: 12.99,
      description:
        "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
      image: "/Food1.png",
    },
    {
      id: 4,
      name: "Brie Crostini Appetizer",
      price: 12.99,
      description:
        "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
      image: "/Food1.png",
    },
  ];

  return (
    <div className="w-[1171px] h-screen rounded-2xl p-5 ">
      <div className="text-[24px] font-semibold mb-">Salads</div>
      <div className="flex flex-row gap-4 flex-wrap">
        {dishes.map((dish) => (
          <div
            key={dish.id}
            className="bg-white rounded-xl shadow w-[397px] h-[342px] p-3 pb-4 border"
          >
            <div className="relative h-[210px] w-[365px] rounded-lg overflow-hidden mb-3">
              <Image
                src={dish.image}
                fill
                className="object-cover"
                alt={dish.name}
              />

              <button className="absolute bottom-2 right-2 bg-white rounded-full p-2 shadow"></button>
            </div>
            <div>
              <div className="flex flex-row gap-[10px]">
                <p className="text-red-500 text-[24px]">{dish.name}</p>
                <p className="text-black text-[18px]">{dish.price}</p>
              </div>
              <div>
                <p className="text-black text-[14px]">{dish.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
