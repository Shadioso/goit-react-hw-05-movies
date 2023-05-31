import { NavList, Item, NavLinkStyled } from './Navigation.styled';
const Navigation = () => {
  return (
    <nav>
      <NavList>
        <Item>
          <NavLinkStyled to="/">GO HOME</NavLinkStyled>
        </Item>

        <Item>
          <NavLinkStyled to="/movies">GO MOVIES</NavLinkStyled>
        </Item>
      </NavList>
    </nav>
  );
};

export default Navigation;
