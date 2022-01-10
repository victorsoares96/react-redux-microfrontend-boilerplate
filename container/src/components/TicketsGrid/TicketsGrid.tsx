import { Button, Space, Table, Tag } from "antd";
import React from "react";
import faker from "faker";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { createTicket } from "../../redux/tickets/tickets.slice";

import sayHello from "utils/sayHello";

import styles from "./TicketsGrid.module.scss";

function TicketsGrid() {
  const dispatch = useAppDispatch();
  const tickets = useAppSelector((state) => state.tickets.list);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (text: number) => <a>{text}</a>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Priority",
      key: "priority",
      dataIndex: "priority",
      render: (priority: string) => (
        <>
          {priority === "low" && <Tag color="green">Low</Tag>}
          {priority === "medium" && <Tag color="orange">Medium</Tag>}
          {priority === "high" && <Tag color="volcano">High</Tag>}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size="middle" onClick={() => sayHello()}>
          <a>Say Hello</a>
        </Space>
      ),
    },
  ];
  return (
    <div className={styles.container}>
      <h1>Tickets</h1>
      <caption className="mfe">Hello i'm on the Host App</caption>

      <Button
        type="primary"
        onClick={() =>
          dispatch(
            createTicket({
              id: tickets.length + 1,
              name: faker.name.firstName(),
              priority: "medium",
            })
          )
        }
      >
        New Ticket
      </Button>

      <Table columns={columns} dataSource={tickets} />
    </div>
  );
}

export default TicketsGrid;
