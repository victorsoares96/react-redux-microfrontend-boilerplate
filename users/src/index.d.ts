declare module '@myapp/users/App' {
  /// <reference types="react" />
  import { store as hostReduxStore } from 'tickets/redux/store'
  const App: ({
    hostStore,
  }: {
    hostStore: typeof hostReduxStore
  }) => JSX.Element
  export default App
}
declare module '@myapp/users/bootstrap' {
  export {}
}
declare module '@myapp/users/components/UsersGrid/UsersGrid' {
  /// <reference types="react" />
  const UsersGrid: () => JSX.Element
  export default UsersGrid
}
declare module '@myapp/users' {
  export {}
}
declare module '@myapp/users/redux/hooks' {
  import { TypedUseSelectorHook } from 'react-redux'
  import type { RootState } from '@myapp/users/redux/store'
  import type { RootState as TicketsState } from 'tickets/redux/store'
  type CombinedState = RootState & TicketsState
  export const useAppDispatch: () => import('redux').Dispatch<
    import('redux').AnyAction
  > &
    import('redux-thunk').ThunkDispatch<
      import('redux').CombinedState<{
        users: import('@myapp/users/redux/users/users.slice').UsersGridState
      }>,
      null,
      import('redux').AnyAction
    > &
    import('redux-thunk').ThunkDispatch<
      import('redux').CombinedState<{
        users: import('@myapp/users/redux/users/users.slice').UsersGridState
      }>,
      undefined,
      import('redux').AnyAction
    >
  export const useAppSelector: TypedUseSelectorHook<CombinedState>
  export {}
}
declare module '@myapp/users/redux/store' {
  import { ThunkAction, Action } from '@reduxjs/toolkit'
  export const makeStore: () => import('@reduxjs/toolkit').EnhancedStore<
    import('redux').CombinedState<{
      users: import('@myapp/users/redux/users/users.slice').UsersGridState
    }>,
    import('redux').AnyAction,
    [
      | import('redux-thunk').ThunkMiddleware<
          import('redux').CombinedState<{
            users: import('@myapp/users/redux/users/users.slice').UsersGridState
          }>,
          import('redux').AnyAction,
          null
        >
      | import('redux-thunk').ThunkMiddleware<
          import('redux').CombinedState<{
            users: import('@myapp/users/redux/users/users.slice').UsersGridState
          }>,
          import('redux').AnyAction,
          undefined
        >
    ]
  >
  export const injectReducer: (key: string, reducer: any) => void
  export const store: import('@reduxjs/toolkit').EnhancedStore<
    import('redux').CombinedState<{
      users: import('@myapp/users/redux/users/users.slice').UsersGridState
    }>,
    import('redux').AnyAction,
    [
      | import('redux-thunk').ThunkMiddleware<
          import('redux').CombinedState<{
            users: import('@myapp/users/redux/users/users.slice').UsersGridState
          }>,
          import('redux').AnyAction,
          null
        >
      | import('redux-thunk').ThunkMiddleware<
          import('redux').CombinedState<{
            users: import('@myapp/users/redux/users/users.slice').UsersGridState
          }>,
          import('redux').AnyAction,
          undefined
        >
    ]
  >
  export type AppDispatch = typeof store.dispatch
  export type RootState = ReturnType<typeof store.getState>
  export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
  >
}
declare module '@myapp/users/redux/users/users.api' {
  import { User } from '@myapp/users/redux/users/users.slice'
  export function createUser(user: User): Promise<User>
}
declare module '@myapp/users/redux/users/users.slice' {
  import { PayloadAction } from '@reduxjs/toolkit'
  import { RootState } from '@myapp/users/redux/store'
  export type User = {
    id: number
    name: string
  }
  export interface UsersGridState {
    fetching: boolean
    list: User[]
  }
  export const createUserAsync: import('@reduxjs/toolkit').AsyncThunk<
    User,
    User,
    {}
  >
  export const usersSlice: import('@reduxjs/toolkit').Slice<
    UsersGridState,
    {
      createUser: (
        state: import('immer/dist/internal').WritableDraft<UsersGridState>,
        action: PayloadAction<User>
      ) => void
    },
    'users'
  >
  export const createUser: import('@reduxjs/toolkit').ActionCreatorWithPayload<
    User,
    string
  >
  export const usersCount: (state: RootState) => number
  const _default: import('redux').Reducer<
    UsersGridState,
    import('redux').AnyAction
  >
  export default _default
}
declare module '@myapp/users/utils/general' {
  import React, { ComponentType } from 'react'
  export function importFederatedModule<T extends ComponentType<any>>(
    name: string,
    federatedModule: any
  ): React.LazyExoticComponent<T>
}
declare module '@myapp/users' {
  import main = require('@myapp/users')
  export = main
}
