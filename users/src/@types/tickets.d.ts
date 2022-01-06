declare module 'tickets/App' {
  /// <reference types="react" />
  const App: () => JSX.Element
  export default App
}
declare module 'tickets/bootstrap' {
  export {}
}
declare module 'tickets/components/Landing' {
  /// <reference types="react" />
  const Landing: () => JSX.Element
  export default Landing
}
declare module 'tickets' {
  export {}
}
declare module 'tickets/redux/hooks' {
  import { TypedUseSelectorHook } from 'react-redux'
  import type { RootState } from 'tickets/redux/store'
  export const useAppDispatch: () => import('redux').Dispatch<
    import('redux').AnyAction
  > &
    import('redux-thunk').ThunkDispatch<
      import('redux').CombinedState<{
        tickets: import('tickets/redux/tickets/tickets.slice').TicketsGridState
      }>,
      null,
      import('redux').AnyAction
    > &
    import('redux-thunk').ThunkDispatch<
      import('redux').CombinedState<{
        tickets: import('tickets/redux/tickets/tickets.slice').TicketsGridState
      }>,
      undefined,
      import('redux').AnyAction
    >
  export const useAppSelector: TypedUseSelectorHook<RootState>
}
declare module 'tickets/redux/store' {
  import { ThunkAction, Action } from '@reduxjs/toolkit'
  export const makeStore: () => import('@reduxjs/toolkit').EnhancedStore<
    import('redux').CombinedState<{
      tickets: import('tickets/redux/tickets/tickets.slice').TicketsGridState
    }>,
    import('redux').AnyAction,
    [
      | import('redux-thunk').ThunkMiddleware<
          import('redux').CombinedState<{
            tickets: import('tickets/redux/tickets/tickets.slice').TicketsGridState
          }>,
          import('redux').AnyAction,
          null
        >
      | import('redux-thunk').ThunkMiddleware<
          import('redux').CombinedState<{
            tickets: import('tickets/redux/tickets/tickets.slice').TicketsGridState
          }>,
          import('redux').AnyAction,
          undefined
        >
    ]
  >
  export const injectReducer: (key: string, reducer: any) => void
  export const store: import('@reduxjs/toolkit').EnhancedStore<
    import('redux').CombinedState<{
      tickets: import('tickets/redux/tickets/tickets.slice').TicketsGridState
    }>,
    import('redux').AnyAction,
    [
      | import('redux-thunk').ThunkMiddleware<
          import('redux').CombinedState<{
            tickets: import('tickets/redux/tickets/tickets.slice').TicketsGridState
          }>,
          import('redux').AnyAction,
          null
        >
      | import('redux-thunk').ThunkMiddleware<
          import('redux').CombinedState<{
            tickets: import('tickets/redux/tickets/tickets.slice').TicketsGridState
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
declare module 'tickets/redux/tickets/tickets.api' {
  import { Ticket } from 'tickets/redux/tickets/tickets.slice'
  export function createTicket(ticket: Ticket): Promise<Ticket>
}
declare module 'tickets/redux/tickets/tickets.slice' {
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
declare module 'tickets/utils/general' {
  import React, { ComponentType } from 'react'
  export function importFederatedModule<T extends ComponentType<any>>(
    name: string,
    federatedModule: any
  ): React.LazyExoticComponent<T>
}
declare module 'tickets' {
  import main = require('tickets')
  export = main
}
