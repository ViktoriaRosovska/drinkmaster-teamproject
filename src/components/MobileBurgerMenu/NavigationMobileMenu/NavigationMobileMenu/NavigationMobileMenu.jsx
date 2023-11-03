import { DefButton, Nav } from "./NavigationMobileMenu.styled";

function NavigationMobileMenu() {
    return (
        <Nav>
        <li>
          <DefButton to="/home">Home</DefButton>
        </li>
        <li>
          <DefButton to="/drinks">Drinks</DefButton>
        </li>
        <li>
          <DefButton to="/add">Add drink</DefButton>
        </li>
        <li>
          <DefButton to="/my">My drinks</DefButton>
        </li>
        <li>
          <DefButton to="/favorites">Favorites</DefButton>
        </li>
      </Nav>
    );
  }
  
  export default NavigationMobileMenu;
  