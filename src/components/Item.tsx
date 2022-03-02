import React, { useEffect } from "react";
import { IProduct } from "./Products";

interface ItemProps {
  product: IProduct;
  btnTitle: string;
  onClick: (value: IProduct, index?: number) => void;
  position: number;
}

function Item({ product, btnTitle, onClick, position }: ItemProps) {
  return (
    <div className="list-group-item">
      <small>{product.category}</small>
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-5">{product.title}</h5>
        <h5>{`${product.price}e`}</h5>
      </div>
      <div>
        <img
          className="mb-5"
          style={{
            height: "200px",
          }}
          src={product.image}
        />
      </div>
      <div className="mb-3">
        <small>{product.description}</small>
      </div>
      <button
        onClick={() => onClick(product, position)}
        className="btn btn-outline-primary"
      >
        {btnTitle}
      </button>
    </div>
  );
}

export default Item;
