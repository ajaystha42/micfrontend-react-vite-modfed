import React, { useEffect, useState } from "react";
import axios from "axios";
import { currency, getProducts } from "../../services/ProductsService";

interface ProductInfo {
  id: string;
  image: string;
  name: string;
  price: number;
  description: string;
}

const ProductComponent = () => {
  const [products, setProducts] = useState<ProductInfo[]>([]);

  //   const getProducts = () => {
  //     axios.get(process)  };
  useEffect(() => {
    getProducts().then((res) => {
      //   console.log(process.env);
      setProducts(res);
    });
  }, []);

  return (
    <div className="my-10 grid grid-cols-4 gap-5">
      {products?.map((product: ProductInfo) => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <div className="flex">
            <div className="flex-grow font-bold">
              <a>{product.name}</a>
              <div className="flex-end">{currency.format(product.price)}</div>
              {/* <div className="flex-end">{product.price}</div> */}
              <div className="text-sm mt-4">{product.description}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductComponent;
