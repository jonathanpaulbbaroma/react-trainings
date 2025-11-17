import { pizzaData } from "../data/PizzaData";
import Pizza from "./Pizza.jsx";
export default function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="flex flex-col items-center gap-16">
      <h2 className="inline-block py-4 border-t-2 border-b-2 border-current text-[2.4rem] uppercase tracking-[3px] font-medium">
        Our menu
      </h2>

      {numPizzas > 0 ? (
        <>
          <p className="text-[1.5rem] text-center leading-[1.6] w-[80%]">
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="list-none grid grid-cols-2 gap-[4.8rem]">
            {pizzas.map((pizza) => (
              <Pizza pizza={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mushrooms"
        price={12}
        photoName="pizzas/funghi.jpg"
      /> */}
    </main>
  );
}
