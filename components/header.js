// importing react stuff
import React, { Component } from 'react';

// importing components
import Navbar from './header/navbar';

// exporting component
export default function Header(props) {
    return (
    <>
    <Navbar data={props.data.navbar} lang={props.lang} langChange={props.langChange} router={props.router}/>
    </>
  )
}