import React, { Suspense } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { store } from "../../redux/store";
import { createTicket } from "../../redux/tickets/tickets.slice";
import { Button } from "antd";

import { createUser } from 'users/redux/users/users.slice';
const Users = React.lazy(() => import("users/App"));

const Landing = () => {
  const dispatch = useAppDispatch();
  const list = useAppSelector((state) => state.tickets.list);
  return (
    <div>
      <div style={{ border: "1.5px solid red" }}>
        <h3>Welcome to Host App</h3>

        <Button 
          type="primary" 
          onClick={() => 
            dispatch(createUser({ 
              id: 99, 
              name: 'Victor' 
            }))
          }
        >
          Create User
        </Button>
        
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
