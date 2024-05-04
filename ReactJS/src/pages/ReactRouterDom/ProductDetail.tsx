import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  console.log("🚀 ~ file: ProductDetail.tsx:5 ~ id 😀👏:", id);
  return (
    <>
      <p>Product Detail - ID: {id}</p>
    </>
  );
};

export default ProductDetail;
