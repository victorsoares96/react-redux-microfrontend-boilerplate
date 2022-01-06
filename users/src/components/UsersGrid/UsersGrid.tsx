import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { createUser } from "../../redux/users/users.slice";

// import { createTicket } from 'tickets/redux/tickets/tickets.slice';

// import { RootState as TicketsState } from 'tickets/redux/store';
// import { useSelector } from "react-redux";

const UsersGrid = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users);
  const tickets = useAppSelector((state) => state.tickets);
  // const tickets = useSelector<TicketsState>(state => state.tickets);

  return (
    <div style={{ border: "1.5px solid blue", marginTop: "10px" }}>
      <h3>Welcome to Users Grid</h3>

      <div>
        <button
          onClick={() =>
            dispatch(
              createUser({
                id: users.list.length + 1,
                name: "John Doe",
              })
            )
          }
        >
          Create User
        </button>
      </div>

      {users && (
        <div>
          <ul>
            {users.list.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </div>
      )}

      {tickets && <div style={{ border: "1.5px solid red", margin: '10px' }}>
        <h3>Host App Tickets</h3>

        <span>Number tickets: {tickets.list.length}</span>

        <ul>
          {tickets.list.map((ticket) => (
            <li key={ticket.id}>{ticket.name}</li>
          ))}
        </ul>
      </div>}
    </div>
  );
};

export default UsersGrid;
