import React, { useState } from 'react';
import { Button, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Navig = (props) => {
  const [collapsed, setCollapsed] = useState(true);
// debugger
  const toggleNavbar = () => setCollapsed(!collapsed);

  // function goBack(){
  //   props.history.goBack()
  // }

  return (
    <div>
      
      <Navbar body inverse style={{ backgroundColor: '#646', borderColor: '#333' }} dark>
      {/* <Button onClick={() => goBack()}><NavbarBrand className="mr-auto font">Old Time Strings</NavbarBrand></Button> */}

        <NavbarBrand href="/home" className="mr-auto font indent">Old Time Strings</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar className="indent">
            <NavItem>
              <NavLink href="/login">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/mandolins">Mandolins</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/guitars">Guitars</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/banjos">Banjos</NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navig;