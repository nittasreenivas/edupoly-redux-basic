import "./styles.css";
import { Provider } from "react-redux";
import store from "./store/store";
import Counter from "./Components/Counter";
import Todos from "./Components/Todos";
export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h3> Learning a react redux</h3>
        <Counter />
        <Todos />
      </div>
    </Provider>
  );
}
