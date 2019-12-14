import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";

export const ConfigureStore = () => {
  const store = createStore(Reducer, initialState);

  return store;
};
