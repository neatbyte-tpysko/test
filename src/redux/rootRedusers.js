import { combineReducers } from "redux";
import shopReduser from "./shopReduser";

const rootReduser = combineReducers({
  shop: shopReduser,
});
export default rootReduser;
