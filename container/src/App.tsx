import React, { useEffect } from "react";
import { Provider } from "react-redux";

import { store } from "./redux/store";
import Routes from "./routes";

import { store as hostStore } from "./redux/store";
import { store as usersStore } from "users/redux/store";
import usersReducer from "users/redux/users/users.slice";

import "./styles/theme.less";

const App = () => {
  useEffect(() => {
    // Inject usersReducer inside host store if this microfrontend initializes inside the host app.
    if (usersStore) hostStore.injectReducer("users", usersReducer);
  }, []);
  return (
    <Provider store={store}>
      <div style={{ minHeight: "100vh" }}>
        <Routes />
      </div>
    </Provider>
  );
};

export default App;
