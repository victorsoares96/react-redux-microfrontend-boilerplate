declare module 'container/App' {
  /// <reference types="react" />
  import './styles/theme.less'
  const App: () => JSX.Element
  export default App
}
declare module 'container/bootstrap' {
  export {}
}
declare module 'container/components/Landing' {
  /// <reference types="react" />
  const Landing: () => JSX.Element
  export default Landing
}
declare module 'container' {
  export {}
}
declare module 'container/redux/hooks' {
  import { TypedUseSelectorHook } from 'react-redux'
  import type { RootState } from 'container/redux/store'
  export const useAppDispatch: () => import('redux').Dispatch<
    import('redux').AnyAction
  > &
    import('redux-thunk').ThunkDispatch<
      import('redux').CombinedState<{
        tickets: import('container/redux/tickets/tickets.slice').TicketsGridState
      }>,
      null,
      import('redux').AnyAction
    > &
    import('redux-thunk').ThunkDispatch<
      import('redux').CombinedState<{
        tickets: import('container/redux/tickets/tickets.slice').TicketsGridState
      }>,
      undefined,
      import('redux').AnyAction
    >
  export const useAppSelector: TypedUseSelectorHook<RootState>
}
declare module 'container/redux/store' {
  import { ThunkAction, Action } from '@reduxjs/toolkit'
  export const makeStore: () => import('@reduxjs/toolkit').EnhancedStore<
    import('redux').CombinedState<{
      tickets: import('container/redux/tickets/tickets.slice').TicketsGridState
    }>,
    import('redux').AnyAction,
    [
      | import('redux-thunk').ThunkMiddleware<
          import('redux').CombinedState<{
            tickets: import('container/redux/tickets/tickets.slice').TicketsGridState
          }>,
          import('redux').AnyAction,
          null
        >
      | import('redux-thunk').ThunkMiddleware<
          import('redux').CombinedState<{
            tickets: import('container/redux/tickets/tickets.slice').TicketsGridState
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
    }>,
    import('redux').AnyAction,
    [
      | import('redux-thunk').ThunkMiddleware<
          import('redux').CombinedState<{
            tickets: import('container/redux/tickets/tickets.slice').TicketsGridState
          }>,
          import('redux').AnyAction,
          null
        >
      | import('redux-thunk').ThunkMiddleware<
          import('redux').CombinedState<{
            tickets: import('container/redux/tickets/tickets.slice').TicketsGridState
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
declare module 'container/utils/general' {
  import React, { ComponentType } from 'react'
  export const mfe: () => Promise<void>
  export const dynamicFederation: (scope: string, module: any) => Promise<any>
  export function importFederatedModule<T extends ComponentType<any>>(
    name: string,
    federatedModule: any
  ): React.LazyExoticComponent<T>
}
declare module 'container' {
  import main = require('container')
  export = main
}
