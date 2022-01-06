import React, { useEffect } from "react";
import { Provider } from "react-redux";
import UsersGrid from "./components/UsersGrid/UsersGrid";

import { store as myStore } from './redux/store';
import { store as hostReduxStore } from 'tickets/redux/store';
import usersReducer from "./redux/users/users.slice";

const App = ({ hostStore }: { hostStore: typeof hostReduxStore }) => {
  useEffect(() => {
    // Inject usersReducer inside host store if this microfrontend initializes inside the host app.
    if (hostStore) hostStore.injectReducer('users', usersReducer);
  }, []);
  return (
    <Provider store={hostStore ?? myStore}>
      <UsersGrid />
    </Provider>
  )
};

export default App;