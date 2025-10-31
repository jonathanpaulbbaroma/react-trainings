import { useEffect } from "react";
import { useState } from "react";

function Details({ foodID }) {
  const URL = `https://api.spoonacular.com/recipes/${foodID}/information`;
  const API_KEY = "9e593dcf27dd4167b77807a65e54dca2";
  //const API_KEY = "5cc2015911604a03b0d5b5129939e88a";
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchFood() {
      await fetch(`${URL}?apiKey=${API_KEY}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setFood(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching details:", error);
        });
    }

    fetchFood();
  }, [foodID, URL]);

  return (
    <div className="w-full md:w-[60%]">
      <h2 className="text-4xl font-bold mb-5">{food.title}</h2>
      <img
        src={food.image}
        alt={food.title}
        className="w-full rounded-2xl mb-5 shadow-md shadow-gray-500/50"
      />
      <div>
        <span>⏲️ {food.readyInMinutes} mins</span> |
        <span> 👨‍🦳Serves {food.servings}</span> |
        <span> {food.vegetarian ? "🥕 Vegetarian" : "🍖 Non-vegetarian"}</span>
        <span>{food.vegan ? " | 🐮Vegan" : ""}</span>
      </div>
      <div className="mt-2">
        <span>
          <strong>${food.pricePerServing}</strong> Per Serving
        </span>
      </div>
      <div>
        <h3 className="text-3xl font-medium mt-5 mb-2">Ingredients</h3>
        <ul className="list-disc list-outside pl-2 space-y-4">
          {food.extendedIngredients.map((item) => (
            <li className="flex items-start space-x-3" key={item.id}>
              <img
                className="w-[30px] h-[30px] pr-2"
                src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`}
              />
              {item.original}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-3xl font-medium mt-5 mb-2">Instructions</h3>
        <ul className="list-decimal list-outside pl-6">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            food.analyzedInstructions[0].steps.map((step) => (
              <li key={step.number}>{step.step}</li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
export default Details;
