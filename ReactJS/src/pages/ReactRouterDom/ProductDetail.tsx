import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  return (
    <>
      <p>Product Detail - ID: {id}</p>
    </>
  );
};

export default ProductDetail;
