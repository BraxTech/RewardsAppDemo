import React from 'react';
import logo from './logo.svg'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
const Navbar = () =>{
    return(
    <>
    <MDBNavbar dark bgColor='dark'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>
          <img
            src={logo}
            height='30'
            alt=''
            loading='lazy'
          />
         Customer Rewards DashBoard
        </MDBNavbarBrand>
      </MDBContainer>
    </MDBNavbar>
  </>
    )
}
export default Navbar;