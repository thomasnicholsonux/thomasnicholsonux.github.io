import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <Navbar color="light" light fixed='top' expand="md">
        <NavbarBrand><Link to='/'><span style={{color: '#007bff'}}><strong>Tom</strong></span><span style={{opacity: 0.6}}><strong>Nicholson</strong>
        </span><span style={{color: '#007bff'}}><strong>UX</strong></span></Link></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink><Link to='/about'>About</Link></NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Projects
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link to='/unsplash'>Unsplash (Website Redesign)</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to='/arbiter'>Arbiter (App Design)</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink><Link to='/contact'>Contact</Link></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      
  );
}

export default Navigation;