import React from "react";

import { Product } from "./Products";

type ProductItemProps = {
  product: Product;
  onClick: (value: Product, position?: number) => void;
  btnTitle: string;
  theme: string;
  position: number;
};

function ProductItem({
  product,
  onClick,
  btnTitle,
  theme,
  position,
}: ProductItemProps) {
  return (
    <li
      value={position}
      key={product.id}
      className="list-group-item d-flex justify-content-between"
    >
      <div>
        <div>{product.manufacturer}</div>
        <div>{product.model}</div>
      </div>
      <div>
        <button
          onClick={() => onClick(product, position)}
          className={`btn btn-${theme}`}
        >
          {btnTitle}
        </button>
      </div>
    </li>
  );
}

export default ProductItem;
