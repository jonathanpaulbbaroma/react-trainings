import { useParams } from "react-router-dom";

export default function Product() {
  const { slug } = useParams();

  return (
    <>
      <h1>Products List</h1>
      <h2>Product: {slug}</h2>
    </>
  );
}
