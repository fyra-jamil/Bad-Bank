import React from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/">
            <img
          alt="Fierra Banking System"
          src="logoBank.png"
          width="100"
          height="100"
          className="d-inline-block align-top"
        />{' '}
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink to="/" activeStyle>
                    Home
                </NavLink>
                <NavLink to="/createaccount" activeStyle>
                    Create Account
                </NavLink>
                <NavLink to="/deposit" activeStyle>
                    Deposit
                </NavLink>
                <NavLink to="/withdraw" activeStyle>
                    Withdraw
                </NavLink>
                <NavLink to="/alldata">
                    All Data           
                </NavLink>
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;