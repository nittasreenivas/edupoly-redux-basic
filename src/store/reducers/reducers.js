import { combineReducers } from "redux";
import counterReducer from "./counter.reducer";
import todoReducers from "./todo.reducers";

const reducers = combineReducers({
  counter: counterReducer,
  todo: todoReducers
});

export default reducers;
