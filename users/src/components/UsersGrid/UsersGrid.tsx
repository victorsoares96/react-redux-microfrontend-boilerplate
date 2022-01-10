import { Button, Space, Table } from "antd";
import React from "react";
import faker from "faker";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { createUser } from "../../redux/users/users.slice";

import sayHello from 'utils/sayHello';

import styles from "./UsersGrid.module.scss";

function UsersGrid() {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users?.list);

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
      <h1>Users</h1>
      <caption className="mfe">Hello i'm on the Remote App</caption>

      <Button
        type="primary"
        onClick={() =>
          dispatch(
            createUser({
              id: users.length + 1,
              name: faker.name.firstName(),
            })
          )
        }
      >
        New User
      </Button>

      <Table columns={columns} dataSource={users} />
    </div>
  );
}

export function Loading() {
  return (
    <div>
      <span>Loading...</span>
    </div>
  );
}

export default UsersGrid;
