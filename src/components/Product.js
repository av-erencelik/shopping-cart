export default function Product(props) {
  return (
    <>
      <h1>{props.product.name}</h1>
      <h1>{props.product.id}</h1>
    </>
  );
}
