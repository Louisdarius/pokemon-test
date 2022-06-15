import React from "react";
import { ListGroup, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import {
  homePageLink,
  viewPokemonPageLink,
  comparePageLink,
  favouritePageLink,
} from "../../config/config";

const Header = () => {
  return (
    <Nav defaultActiveKey={homePageLink} className='flex-column'>
      <Nav.Link>
        <Link style={{ textDecoration: "none" }} to={homePageLink}>
          Home
        </Link>
      </Nav.Link>

      <Nav.Link>
        <Link style={{ textDecoration: "none" }} to={favouritePageLink}>
          Favourite
        </Link>
      </Nav.Link>

      <Nav.Link>
        <Link style={{ textDecoration: "none" }} to={comparePageLink}>
          Compare
        </Link>
      </Nav.Link>

      {/* <Nav.Link eventKey="link-1">Favourite </Nav.Link>
      <Nav.Link eventKey="link-2">Compare</Nav.Link> */}
    </Nav>
  );
};

export default Header;
