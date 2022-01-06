import React, { Suspense } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { store } from "../../redux/store";
import { createTicket } from "../../redux/tickets/tickets.slice";
import { importFederatedModule } from "../../utils/general";
import MFEUsers from 'users/App';

const Users = importFederatedModule<typeof MFEUsers>('users', './users/App');

const Landing = () => {
  const dispatch = useAppDispatch();
  const list = useAppSelector((state) => state.tickets.list);
  return (
    <div>
      <div style={{ border: "1.5px solid red" }}>
        <h3>Welcome to Host App</h3>

        <div>
          <button
            onClick={() =>
              dispatch(
                createTicket({
                  id: list.length + 1,
                  name: "Foo Bar",
                  priority: "low",
                })
              )
            }
          >
            Create Ticket
          </button>

          <button
            style={{ marginLeft: '10px' }}
            onClick={() =>
              dispatch({ type: 'users/createUser', payload: { id: 1, name: 'Foo Bar' } })
            }
          >
            Create User
          </button>
        </div>

        <div>
          <h3>Tickets</h3>
          <ul>
            {list.map((ticket) => (
              <li key={ticket.id}>{ticket.name}</li>
            ))}
          </ul>
        </div>
      </div>

      <Suspense fallback="Loading...">
        <Users hostStore={store} />
      </Suspense>
    </div>
  );
};

export default Landing;
