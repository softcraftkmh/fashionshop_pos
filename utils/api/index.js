import general from "./general";
import item from "./item";
import customer from "./customer";
import order from "./order";

export default {
  ...general,
  ...item,
  ...customer,
  ...order
};
