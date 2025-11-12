import FoodItem from "./FoodItem";
export default function FoodList({ foodData, setFoodID }) {
  return (
    <div className="px-5 w-full md:w-[40%]">
      <h1 className="text-5xl font-bold mb-[30px]">Food List</h1>
      {foodData.map((food) => (
        <FoodItem key={food.id} food={food} setFoodID={setFoodID} />
      ))}
    </div>
  );
}
