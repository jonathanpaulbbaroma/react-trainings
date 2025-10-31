function Fruit({ id, emoji, name, price, soldOut }) {
  return (
    <>
      <li key={id}>
        {emoji} {name} - ${price}{" "}
        <span style={{ color: "red", fontStyle: "italic" }}>
          {soldOut ? " (Sold Out)" : ""}
        </span>
      </li>
      {/* {price > 5 ? (
        <li key={id}>
          {emoji} {name} - ${price}
        </li>
      ) : (
        ""
      )} */}
    </>
  );
}

export default Fruit;
