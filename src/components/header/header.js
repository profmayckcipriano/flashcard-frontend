import React from "react";
import { Navbar, NavItem } from "react-materialize";
import { NavLink } from "react-router-dom";


function Header(  ){
    return (
        <Navbar>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/courses">Courses</NavLink>
        </Navbar>
    );
}

export default Header;