import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 50px;
  margin-left: 20px;
  border-radius: 20px;
  background-color: darkgrey;
  color: white;
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 20px;
  margin: 0px;
  display: flex;
  justify-content: center;
`;

export const NavLinkStyled = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-weight: 700;
  &.active {
    color: white;
  }
`;
