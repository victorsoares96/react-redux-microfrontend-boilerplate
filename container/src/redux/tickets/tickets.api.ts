import { Ticket } from "./tickets.slice";

// A mock function to mimic making an async request for data
export function createTicket(ticket: Ticket) {
  return new Promise<Ticket>((resolve) =>
    setTimeout(() => resolve(ticket), 1500)
  );
}
