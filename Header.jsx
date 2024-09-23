import React from 'react';
import { Container, Input, Menu } from 'semantic-ui-react';

const Header = () => {
  return (
    <Menu fixed="top" style={{backgroundColor: 'grey'}}>
      <Container>
        <Menu.Item header> Anime </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item>Post</Menu.Item>
          <Menu.Item>Login</Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default Header;
