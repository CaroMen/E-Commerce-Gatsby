import React from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Nav, NavbarContainer, NavLogo, NavMenu, NavItem, NavLinks, MobileIcon } from '../elements/Navbar.elements';

export const Navbar = () => {
    return (
        <>
            <IconContext.Provider value={{ color: '#101522' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/">
                            MODERN BY FRANCIS
                        </NavLogo>
                        <MobileIcon>

                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="/store">
                                    Store
                            </NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
};
