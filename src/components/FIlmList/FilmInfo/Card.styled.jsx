import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const CardBox = styled.div`
  display: flex;
  justify-content: flex-start;
`;
export const CardImg = styled.img`
  width: 300px;
  height: 370px;
  border-radius: 50px;
  padding: 20px;
`;

export const CardList = styled.ul`
  list-style: none;
`;

export const Button = styled(NavLink)`
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 50px;
  background-color: darkgrey;
  color: black;
  border-radius: 20px;
  position: absolute;
  top: 23px;
  left: 24px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  &:active {
    color: red;
  }
  &:hover {
    color: white;
  }
`;
