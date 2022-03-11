import { IShoe } from "../interfaces/shoe";

export const countCartTotal = (cart: IShoe[]) => {
  if (cart.length === 0) return 0;
  return cart
    .map((item) => Number(item.price.slice(1)))
    .reduce((acc, val) => acc + val);
};
