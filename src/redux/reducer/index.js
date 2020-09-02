import { combineReducers } from "redux";
import expenseTrxn from "./expenseTrxn";

const rootReducer = combineReducers({
    expenseTrxn: expenseTrxn
});
export default rootReducer;
