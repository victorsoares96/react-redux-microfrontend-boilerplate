declare module 'users/App' {
  /// <reference types="react" />
  import { store as hostReduxStore } from 'tickets/redux/store'
  const App: ({ hostStore }: { hostStore: any }) => JSX.Element
  export default App
}
declare module 'users/bootstrap' {
  export {}
}
declare module 'users/components/UsersGrid/UsersGrid' {
  /// <reference types="react" />
  const UsersGrid: () => JSX.Element
  export default UsersGrid
}
declare module 'users' {
  export {}
}
declare module 'users/redux/hooks' {
  import { TypedUseSelectorHook } from 'react-redux'
  import type { RootState } from 'users/redux/store'
  import type { RootState as TicketsState } from 'tickets/redux/store'
  type CombinedState = RootState & TicketsState
  export const useAppDispatch: () => any
  export const useAppSelector: TypedUseSelectorHook<CombinedState>
  export {}
}
declare module 'users/redux/store' {
  import { ThunkAction, Action } from '@reduxjs/toolkit'
  export const makeStore: () => any
  export const injectReducer: (key: string, reducer: any) => void
  export const store: any
  export type AppDispatch = typeof store.dispatch
  export type RootState = ReturnType<typeof store.getState>
  export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
  >
}
declare module 'users/redux/users/users.api' {
  import { User } from 'users/redux/users/users.slice'
  export function createUser(user: User): Promise<User>
}
declare module 'users/redux/users/users.slice' {
  import { RootState } from 'users/redux/store'
  export type User = {
    id: number
    name: string
  }
  export interface UsersGridState {
    fetching: boolean
    list: User[]
  }
  export const createUserAsync: any
  export const usersSlice: any
  export const createUser: any
  export const usersCount: (state: RootState) => any
  const _default: any
  export default _default
}
declare module 'users/utils/general' {
  import React, { ComponentType } from 'react'
  export function importFederatedModule<T extends ComponentType<any>>(
    name: string,
    federatedModule: any
  ): React.LazyExoticComponent<T>
}
declare module 'users' {
  import main = require('users')
  export = main
}
