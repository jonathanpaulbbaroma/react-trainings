export default function Order({ closeHour, openHour }) {
  return (
    <div className="order flex flex-col items-center gap-[2.4rem]">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="text-inherit font-inherit border-0 text-[1.4rem] font-medium bg-[#edc84b] px-[3.2rem] py-[1.4rem] cursor-pointer transition-all duration-200  hover:bg-[#e9bb24]">
        Order
      </button>
    </div>
  );
}
