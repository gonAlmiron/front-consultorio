import React, { useState } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarToggler, MDBCollapse, MDBNavbarNav, MDBNavbarItem, MDBNavbarLink } from 'mdb-react-ui-kit';

const NavbarTres = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <MDBNavbar expand='lg' bg='dark' dark>
      <div className='container'>
        <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleNav} aria-controls='navbarExample01' aria-expanded='false' aria-label='Toggle navigation' />
        <MDBCollapse navbar show={showNav}>
          <MDBNavbarNav className='ms-auto' navbar>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>Home</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>About</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>Contact</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </div>
    </MDBNavbar>
  );
};

export default NavbarTres;
