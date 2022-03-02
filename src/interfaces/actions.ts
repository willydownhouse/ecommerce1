import { IProduct } from "../components/Products";

interface BaseAction {
  type: string;
}

interface ProductAction extends BaseAction {
  payload: IProduct[];
}
interface NotificationAction extends BaseAction {
  payload?: string;
}

type AppAction = ProductAction | NotificationAction;

export default AppAction;
