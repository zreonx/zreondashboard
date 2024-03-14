import React from "react";
import { popularProducts } from "../lib/consts/data";
import { Link } from "react-router-dom";

function PopularProducts() {
  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 w-[20rem]">
      <strong className="font-medium text-gray-700">Popular Products</strong>
      <div className="mt-4 flex flex-col gap-3">
        {popularProducts.map((product) => {
          return (
            <Link
              to={`/product/${product.id}`}
              className="flex hover:no-underline"
            >
              <div className="w-10 h-10 min-w-10 bg-gray-200 rounded-sm overflow-hidden">
                <img
                  className="w-full h-auto object-cover "
                  src={product.product_thumbnail}
                  alt={product.product_name}
                />
              </div>
              <div className="ml-4 flex-1">
                <p className="text-sm text-gray-800">{product.product_name}</p>
                <span
                  className={`text-sm font-medium ${
                    product.product_stock === 0
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  {product.product_stock === 0
                    ? "Out of stock"
                    : product.product_stock + " in stock"}
                </span>
              </div>
              <div className="text-xs text-gray-400 pl-2">
                {product.product_price}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default PopularProducts;
