import { IShoe } from "./shoe";

export interface ICheckout {
  name: string;
  email: string;
  address: string;
  country: string;
  region: string;
  ZIP: string;
  city: string;
  amount: number;
  products: IShoe[];
  credit_card: string;
  expiration: string;
  CVC: string;
  shippingAddress?: string;
  shippingCity?: string;
  shippingRegion?: string;
  shippingCountry?: string;
  shippingZIP?: string;
}
