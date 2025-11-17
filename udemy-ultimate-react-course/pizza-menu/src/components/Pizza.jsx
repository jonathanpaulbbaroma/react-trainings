export default function Pizza({ pizza }) {
  return (
    <li className={`flex gap-[3.2rem] pizza ${pizza.soldOut ? "text-[#888]" : ""}`}>
      <img
        className="w-48 aspect-square self-start pizza-[.sold-out]:grayscale pizza-[.sold-out]:opacity-80"
        src={pizza.photoName}
        alt={pizza.name}
      />
      <div className="flex flex-col gap-[0.8rem] py-[0.4rem]">
        <h3 className="text-[2rem] font-normal">{pizza.name}</h3>
        <p className="text-[1.4rem] font-light italic mb-auto">
          {pizza.ingredients}
        </p>

        <span className="block text-[1.6rem]">
          {pizza.soldOut ? "SOLD OUT" : pizza.price}
        </span>
      </div>
    </li>
  );
}
