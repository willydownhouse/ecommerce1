export interface INotification {
  message: string | null;
  color: "success" | "danger" | "dark";
}

export interface IFormValues {
  name: string;
  email: string;
  address: string;
  country: string;
  region: string;
  ZIP: string;
  city: string;
  shippingAddress: string;
  shippingCountry: string;
  shippingRegion: string;
  shippingZIP: string;
  shippingCity: string;
  amount: number;
  credit_card: string;
  expiration: string;
  CVC: string;
}
