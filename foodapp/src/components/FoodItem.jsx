export default function FoodItem({ food, setFoodID }) {
  
  return (
    <div
      key={food.id}
      className="food-item mb-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
    >
      <img
        src={food.image}
        alt={food.title}
        className="food-image rounded-t-lg w-full"
      />
      <div className="p-5">
        <h2 className="food-title mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {food.title}
        </h2>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <button
          onClick={() => setFoodID(food.id)}
          className="cursor-pointer focus:ring-2 focus:ring-orange-200 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-700 "
        >
          View Recipe
          <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
