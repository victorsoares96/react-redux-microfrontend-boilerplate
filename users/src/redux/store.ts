import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import usersReducer from './users/users.slice';

const staticReducers = {
  users: usersReducer,
};

const createReducer = (asyncReducers: any) => {
  return combineReducers({
    ...staticReducers,
    ...asyncReducers,
  });
}

export const makeStore = () => {
  const store = configureStore({
    reducer: combineReducers({
      ...staticReducers,
    }),
  });

  // @ts-ignore
  store.asyncReducers = {};
  

  // @ts-ignore
  store.injectReducer = (key: string, asyncReducer: any) => {
    // @ts-ignore
    store.asyncReducers[key] = asyncReducer;
    // @ts-ignore
    store.replaceReducer(combineReducers({
      ...staticReducers,
      // @ts-ignore
      ...store.asyncReducers,
    }));
  };
  return store;
};

export const injectReducer = (key: string, reducer: any) => {
  // @ts-ignore
  /*if (store.getState()[key]) {
    return;
  }*/

  // @ts-ignore
  store.asyncReducers[key] = reducer;
  // @ts-ignore
  store.replaceReducer(combineReducers({
    ...staticReducers,
    // @ts-ignore
    ...store.asyncReducers,
  }))
};

export const store = makeStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
