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
  amount: number;
}
