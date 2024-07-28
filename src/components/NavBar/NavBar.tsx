import React from "react";
import clsx from "clsx";
import { Container, Navbar, Nav } from "react-bootstrap";

import styles from "./NavBar.module.scss";

// type NavItem = { id: string; name: string };
const NavListItem = [
  { href: "#home", name: "home" },
  { href: "#mission", name: "mission" },
  { href: "#gallery", name: "gallery" },
  { href: "#contact", name: "contact" },
];

function NavBar() {
  return (
    <Navbar
      expand="lg"
      className={clsx(styles.wrapper, "bg-white")}
      fixed="top"
    >
      <Container fluid>
        <Navbar.Brand className={clsx(styles.logo, "me-0")} href="#home">
          comestic
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className={clsx(styles.nav_list)}
        >
          <Nav>
            {NavListItem.map((navItem) => (
              <Nav.Link
                key={navItem.name}
                className={clsx(styles.nav_linkItem)}
                href={navItem.href}
              >
                {navItem.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
