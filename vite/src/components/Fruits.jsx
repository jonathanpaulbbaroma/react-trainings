import Fruit from "./Fruit";
const fruits = [
  { id: 1, name: "Apple", price: 8, emoji: "🍎 ", soldOut: false },
  { id: 2, name: "Orange", price: 5, emoji: "🍊 ", soldOut: false },
  { id: 3, name: "Mango", price: 10, emoji: "🥭 ", soldOut: true },
  { id: 4, name: "Grapes", price: 4, emoji: "🍇 ", soldOut: false },
  { id: 5, name: "Pineapple", price: 12, emoji: "🍍 ", soldOut: true },
];
export default function
 Fruits() {
  return (
    <div>
      <h2>Fruits List</h2>
      <ul style={{ listStyle: "none", marginLeft: "-40px" }}>
        {fruits.map((fruit) => (
          <Fruit
            id={fruit.id}
            emoji={fruit.emoji}
            name={fruit.name}
            price={fruit.price}
            soldOut={fruit.soldOut}
          />
        ))}
        {fruits.length === 0 && <li>No fruits available.</li>}
      </ul>
    </div>
  );
}
