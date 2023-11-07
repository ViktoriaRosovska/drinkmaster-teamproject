import { DefButton, Nav } from "./NavigationMobileMenu.styled";

function NavigationMobileMenu({toggleMobileMenu}) {
    return (
        <Nav>
        <li>
          <DefButton to="/home" onClick={toggleMobileMenu}>Home</DefButton>
        </li>
        <li>
          <DefButton to="/drinks" onClick={toggleMobileMenu}>Drinks</DefButton>
        </li>
        <li>
          <DefButton to="/add" onClick={toggleMobileMenu}>Add drink</DefButton>
        </li>
        <li>
          <DefButton to="/my" onClick={toggleMobileMenu}>My drinks</DefButton>
        </li>
        <li>
          <DefButton to="/favorites" onClick={toggleMobileMenu}>Favorites</DefButton>
        </li>
      </Nav>
    );
  }
  
  export default NavigationMobileMenu;
  