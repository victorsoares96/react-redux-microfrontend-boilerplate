import React from "react";
import { Avatar, Badge, Layout, Menu } from 'antd';

import styles from './Header.module.scss';
import { useAppSelector } from "../../redux/hooks";
import { useNavigate, useLocation } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const tickets = useAppSelector(state => state.tickets.list);
  const users = useAppSelector(state => state.users.list);

  const [, routeName] = pathname.split('/');
  return (
    <Layout.Header className={styles.container}>
      <div className="logo" />

      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[routeName]}>
        <Menu.Item key='tickets' onClick={() => navigate('/')}>Tickets</Menu.Item>
        <Menu.Item key='users' onClick={() => navigate('/users')}>Usuários</Menu.Item>
        <Menu.Item key='profile'>Profile</Menu.Item>
      </Menu>

      <div className="stats">
        <Badge count={tickets.length}>
          <Avatar size={32}>
            <span style={{ color: '#333' }}>TICKETS</span>
          </Avatar>
        </Badge>

        <Badge count={users.length}>
          <Avatar size={32}>
            <span style={{ color: '#333' }}>USERS</span>
          </Avatar>
        </Badge>
      </div>
    </Layout.Header>
  );
}

export default Header;