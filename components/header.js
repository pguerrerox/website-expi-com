// importing react stuff
import React, { Component } from 'react';

// importing components
import Navbar from './header/navbar';
import NavbarTop from './header/navbartop';

// exporting component
function Header(props) {

    return (
    <>
      <NavbarTop lang={props.lang} langChange={props.langChange}/>
      <Navbar data={props.data.navbar}/>
    </>
  )
}

export default Header