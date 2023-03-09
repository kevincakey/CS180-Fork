import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

import './navbar.css'

	const Navbar = () => {
		return (
		  <Nav className="navbar navbar-expand-lg">
			<a className="navbar-brand" href="#">
			  Fork
			</a>
			<NavMenu>
				<NavLink to="/home" activeStyle>
 					Home
 				</NavLink>
 				<NavLink to="/works" activeStyle>
 					How It Works
 				</NavLink>
 				<NavLink to="/login" activeStyle>
 					Login
 				</NavLink>
 			</NavMenu>
		  </Nav>
		);
	  };
export default Navbar;
