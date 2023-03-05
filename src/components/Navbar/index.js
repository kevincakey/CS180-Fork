import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

	const Navbar = () => {
		return (
		  <Nav className="navbar navbar-expand-lg navbar-light bg-light">
			<a className="navbar-brand" href="#">
			  Fork
			</a>
			<NavMenu>
				<NavLink to="/home" activeStyle>
 					Home
 				</NavLink>
 				<NavLink to="/works" activeStyle>
 					Works
 				</NavLink>
 				<NavLink to="/login" activeStyle>
 					Login
 				</NavLink>
 			</NavMenu>
		  </Nav>
		);
	  };
export default Navbar;
