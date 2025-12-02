import NomNom from "./icons/NomNom";

export function Header() {
  return (
    <div className="bg-black w-full h-[68px] px-6 py-4 flex flex-row justify-between pt-4">
      <div className="flex items-center gap-3">
        <NomNom />
        <div className="flex flex-col">
          <p className="text-lg text-white font-normal">Nom Nom</p>
          <p className="text-xs text-white">Swift delivery</p>
        </div>
      </div>

      <div className="flex gap-3">
        <button className="bg-white w-[76px] h-[36px] hover:bg-red-600 rounded-2xl">
          <p className="text-black text-sm">Sign up</p>
        </button>
        <button className="bg-red-600 w-[76px] h-[36px] hover:bg-white rounded-2xl">
          <p className="text-black text-sm">Log in</p>
        </button>
      </div>
    </div>
  );
}
