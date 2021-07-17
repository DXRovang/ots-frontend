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

        <NavbarBrand href="/home" className="mr-auto font">Old Time Strings</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navig;