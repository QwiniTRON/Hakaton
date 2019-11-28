import {combineReducers} from "redux";
import products from "../reduces/products";
import categories from "../reduces/categoryes";
import user from "../reduces/user";

export default combineReducers({
    products,
    categories,
    user
});












