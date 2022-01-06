import * as React from "react";
import { Provider } from "react-redux";
import Landing from "./components/Landing";
import { store } from "./redux/store";

const App = () => (
  <Provider store={store}>
    <Landing />
  </Provider>
);

export default App;
