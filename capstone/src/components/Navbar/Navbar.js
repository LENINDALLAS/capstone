import React, { useState } from 'react'
import {
    Nav,
    NavContainer,
    NavLogo,
    NavItem,
    NavMenu,
} from './NavbarStyles';
import logo from '../img/inventIdeas-logos_black.png';
import Button from '@material-ui/core/Button';
import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
    return (
        <>
            <Nav className={colorChange ? 'navbar colorChange' : 'navbar'}>
                <NavContainer>
                    <NavLogo href="/"><img src={logo} alt="page_logo" /></NavLogo>
                    <NavMenu>
                        <NavItem>
                            <Button className='navigation_button'>
                                <Link to='signin-investor' className='globalLink'>
                                    Investor Login
                                </ Link>
                            </Button>
                        </NavItem>
                        <NavItem>
                            <Button className='navigation_button' >
                                <Link to='signin-innovator' className='globalLink'>
                                    Innovator Login
                                </ Link>
                            </Button>
                        </NavItem>
                        <NavItem>
                        </NavItem>
                    </NavMenu>
                </NavContainer>
            </Nav>
        </>
    )
}

export default Navbar;

