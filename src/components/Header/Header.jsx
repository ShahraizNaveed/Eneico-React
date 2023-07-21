import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/images/logo/nav-logo.png"
import './Header.css';
import { BiSearch } from "react-icons/bi"
import { useState } from 'react';

function Header() {
  // Make Nav sticky when scrolling
  const [show, setShow] = useState(false);
  const makeSticky = () => {
    if (window.scrollY >= 90) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  window.addEventListener('scroll', makeSticky);

  return (
    <Navbar collapseOnSelect expand="lg" className={show ? "sticky-top header-bg" : ""}>
      <Container>
        <Navbar.Brand><Link to="/"><img src={logo} alt="Enieco" /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <NavLink className="nav-link text-center" to="/">Home</NavLink>
            <NavLink className="nav-link text-center color" to="/about">About</NavLink>
            <NavLink className="nav-link text-center color" to="/services">Services</NavLink>
            <NavLink className="nav-link text-center color" to="/projects">Projects</NavLink>
            <NavLink className="nav-link text-center color" to="/shop">Shop</NavLink>
            <NavLink className="nav-link text-center color" to="/blog">Blog</NavLink>
            <NavLink className="nav-link text-center color" to="/contact">Contact</NavLink>

            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <NavLink className="nav-link text-center" to="/search">
              <div className='nav-icon'>
                <BiSearch
                  size={20}
                />
              </div>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;