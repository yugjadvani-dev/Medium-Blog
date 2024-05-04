import { useQuery } from "@tanstack/react-query";
import routerConfig from "@utils/routerConfig";
import axios from "axios";
import { Link } from "react-router-dom";

interface Product {
  category: string;
  price: number;
  thumbnail: string;
  images: string[];
  title: string;
  id: number;
}

const ProductList = () => {
  const fetchProductList = (): Promise<Product[]> =>
    axios
      .get(
        "https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&inc=category%2Cprice%2Cthumbnail%2Cimages%2Ctitle%2Cid&query=mens-watches"
      )
      .then((response) => response.data.data.data);

  const { data, error, isLoading } = useQuery({
    queryKey: ["randomproducts"],
    queryFn: fetchProductList,
  });

  if (isLoading) return <p>Loading...</p>;
  if (axios.isAxiosError(error)) return <p>Error: {error.message}</p>;

  return (
    <>
      <div className="flex items-center justify-center flex-wrap gap-4">
        {data &&
          data.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-center flex-col gap-2">
              <img
                width={200}
                height={200}
                src={item.thumbnail}
                alt=""
              />
              <p>${item.price}</p>
              <p>{item.title}</p>
              <Link to={`${routerConfig.productDetail}/${item.id}`}>
                Buy Now
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default ProductList;
