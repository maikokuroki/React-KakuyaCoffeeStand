import React, {useState} from 'react';
import {Navbar, NavItem, NavLink} from 'reactstrap';

const Header = () => {
   return(
        <div>
            <Navbar >
                <NavItem>
                    <NavLink href="#">HOME</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">MENU</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">NEWS</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">EVENT</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">ABOUT</NavLink>
                </NavItem>
            </Navbar>
        </div>
   );
}

export default Header;