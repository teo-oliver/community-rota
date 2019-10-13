import styled from 'styled-components';

export const Header = styled.header`
  background-color: ${props => props.theme.background};
  text-align: center;
  position: fixed;
  z-index: 999;
  width: 100%;
`;

export const Nav = styled.nav`
  position: absolute;
  text-align: left;
  top: 100%;
  left: 0;
  background: ${props => props.theme.background};
  width: 100%;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    margin-bottom: 1em;
    margin-left: 1em;
  }

  a {
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    text-transform: uppercase;
  }

  a:hover {
    color: #000;
  }
`;
