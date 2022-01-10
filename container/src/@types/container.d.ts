declare module 'container/App' {
  /// <reference types="react" />
  import './styles/theme.less'
  const App: () => JSX.Element
  export default App
}
declare module 'container/bootstrap' {
  export {}
}
declare module 'container/components/Header/Header' {
  /// <reference types="react" />
  function Header(): JSX.Element
  export default Header
}
declare module 'container/components/TicketsGrid/TicketsGrid' {
  /// <reference types="react" />
  function TicketsGrid(): JSX.Element
  export default TicketsGrid
}
declare module 'container/components/Wrapper/Wrapper' {
  /// <reference types="react" />
  function Wrapper(): JSX.Element
  export default Wrapper
}
declare module 'container' {
  export {}
}
declare module 'container/pages/Login/Login' {
  /// <reference types="react" />
  function Login(): JSX.Element
  export default Login
}
declare module 'container/pages/Tickets/Tickets' {
  /// <reference types="react" />
  function Tickets(): JSX.Element
  export default Tickets
}
declare module 'container/pages/Users/Users' {
  /// <reference types="react" />
  function Users(): JSX.Element
  export default Users
}
declare module 'container/redux/hooks' {
  /// <reference path="container/@types/users.d.ts" />
  import { TypedUseSelectorHook } from 'react-redux'
  import type { RootState } from 'container/redux/store'
  import type { RootState as UsersState } from 'users/redux/store'
  type CombinedState = RootState & UsersState
  export const useAppDispatch: () => import('redux').Dispatch<
    import('redux').AnyAction
  > &
    import('redux-thunk').ThunkDispatch<
      import('redux').CombinedState<{
        tickets: import('container/redux/tickets/tickets.slice').TicketsGridState
        users: import('users/redux/users/users.slice').UsersGridState
      }>,
      null,
      import('redux').AnyAction
    > &
    import('redux-thunk').ThunkDispatch<
      import('redux').CombinedState<{
        tickets: import('container/redux/tickets/tickets.slice').TicketsGridState
        users: import('users/redux/users/users.slice').UsersGridState
      }>,
      undefined,
      import('redux').AnyAction
    >
  export const useAppSelector: TypedUseSelectorHook<CombinedState>
  export {}
}
declare module 'container/redux/store' {
  /// <reference path="container/@types/users.d.ts" />
  import { ThunkAction, Action } from '@reduxjs/toolkit'
  export const makeStore: () => import('@reduxjs/toolkit').EnhancedStore<
    import('redux').CombinedState<{
      tickets: import('container/redux/tickets/tickets.slice').TicketsGridState
      users: import('users/redux/users/users.slice').UsersGridState
    }>,
    import('redux').AnyAction,
    [
      | import('redux-thunk').ThunkMiddleware<
          import('redux').CombinedState<{
            tickets: import('container/redux/tickets/tickets.slice').TicketsGridState
            users: import('users/redux/users/users.slice').UsersGridState
          }>,
          import('redux').AnyAction,
          null
        >
      | import('redux-thunk').ThunkMiddleware<
          import('redux').CombinedState<{
            tickets: import('container/redux/tickets/tickets.slice').TicketsGridState
            users: import('users/redux/users/users.slice').UsersGridState
          }>,
          import('redux').AnyAction,
          undefined
        >
    ]
  >
  export const injectReducer: (key: string, reducer: any) => void
  export const store: import('@reduxjs/toolkit').EnhancedStore<
    import('redux').CombinedState<{
      tickets: import('container/redux/tickets/tickets.slice').TicketsGridState
      users: import('users/redux/users/users.slice').UsersGridState
    }>,
    import('redux').AnyAction,
    [
      | import('redux-thunk').ThunkMiddleware<
          import('redux').CombinedState<{
            tickets: import('container/redux/tickets/tickets.slice').TicketsGridState
            users: import('users/redux/users/users.slice').UsersGridState
          }>,
          import('redux').AnyAction,
          null
        >
      | import('redux-thunk').ThunkMiddleware<
          import('redux').CombinedState<{
            tickets: import('container/redux/tickets/tickets.slice').TicketsGridState
            users: import('users/redux/users/users.slice').UsersGridState
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
declare module 'container/redux/tickets/tickets.api' {
  import { Ticket } from 'container/redux/tickets/tickets.slice'
  export function createTicket(ticket: Ticket): Promise<Ticket>
}
declare module 'container/redux/tickets/tickets.slice' {
  import { PayloadAction } from '@reduxjs/toolkit'
  export type Ticket = {
    id: number
    name: string
    priority: 'high' | 'medium' | 'low'
  }
  export interface TicketsGridState {
    fetching: boolean
    list: Ticket[]
  }
  export const createTicketAsync: import('@reduxjs/toolkit').AsyncThunk<
    Ticket,
    Ticket,
    {}
  >
  export const ticketsSlice: import('@reduxjs/toolkit').Slice<
    TicketsGridState,
    {
      createTicket: (
        state: import('immer/dist/internal').WritableDraft<TicketsGridState>,
        action: PayloadAction<Ticket>
      ) => void
    },
    'tickets'
  >
  export const createTicket: import('@reduxjs/toolkit').ActionCreatorWithPayload<
    Ticket,
    string
  >
  const _default: import('redux').Reducer<
    TicketsGridState,
    import('redux').AnyAction
  >
  export default _default
}
declare module 'container/routes/app.routes' {
  /// <reference types="react" />
  export default function AppRoutes(): JSX.Element
}
declare module 'container/routes/auth.routes' {
  /// <reference types="react" />
  export default function AuthRoutes(): JSX.Element
}
declare module 'container/routes' {
  /// <reference types="react" />
  function Routes(): JSX.Element
  export default Routes
}
declare module 'container' {
  import main = require('container')
  export = main
}
