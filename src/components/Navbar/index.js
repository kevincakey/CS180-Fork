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
 				<NavLink to="/works" activeStyle>
 					Works
 				</NavLink>
 				<NavLink to="/login" activeStyle>
 					Login
 				</NavLink>
 				<NavLink to="/blogs" activeStyle>
 					Blogs
 				</NavLink>
 			</NavMenu>
		  </Nav>
		);
	  };
// const Navbar = () => {
// return (
// 	<>
// 	<Nav>
// 		<NavMenu>
// 		<NavLink to="/works" activeStyle>
// 			Works
// 		</NavLink>
// 		<NavLink to="/login" activeStyle>
// 			Login
// 		</NavLink>
// 		<NavLink to="/blogs" activeStyle>
// 			Blogs
// 		</NavLink>
// 		</NavMenu>
// 	</Nav>
// 	</>
// );
// };

export default Navbar;
