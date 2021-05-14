// importing react stuff
import React, { Component } from 'react';

// importing components
import Navbar from './header/navbar';
import NavbarTop from './header/navbartop';

// exporting component
export default function Header(props) {
    return (
    <>
    <Navbar data={props.data.navbar}/>
    {/* <NavbarTop lang={props.lang} langChange={props.langChange}/> */}
    </>
  )
}