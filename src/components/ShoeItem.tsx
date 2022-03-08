import React from "react";
import { IShoe } from "../interfaces/shoe";

type ShoeItemProps = {
  shoe: IShoe;
};

function ShoeItem({ shoe }: ShoeItemProps) {
  return (
    <div className="card border-0">
      <img className="card-img-top" src={shoe.img} />
      <div className="card-body">
        <p className="text-muted">{shoe.source}</p>
        <a
          href={shoe.url}
          className="card-title h5 text-muted"
          target="_blank"
          rel="noreferrer"
        >
          {shoe.title}
        </a>
        <h5 className="mt-3 text-muted">{shoe.price}</h5>
        <div className="mt-3">
          <button className="btn btn-outline-danger btn-sm">Add card</button>
        </div>
      </div>
    </div>
  );
}

export default ShoeItem;
