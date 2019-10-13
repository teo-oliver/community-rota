import React from 'react';
import { Nav, Header } from './styledComponents/navStyles';

function Navbar() {
  return (
    <Header>
      <h1 className="logo">Weekly Rota</h1>
      <Nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </Nav>
    </Header>
  );
}

export default Navbar;
