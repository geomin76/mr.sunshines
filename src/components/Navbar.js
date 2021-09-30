import React, { useState } from "react"
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
import { CartIcon } from "./CartIcon";
import "../App.css";

export const Navbar = ({ name, cart }) => {
    
    const [collapse, setCollapse] = useState(false);

    const onClick = () => {
        setCollapse(prevState => !prevState)
      }

    return (
        <header>
            <MDBNavbar dark expand="lg" transparent>
                <MDBNavbarToggler onClick={onClick} />
                <MDBCollapse isOpen={collapse} navbar>
                    <MDBNavbarNav left>
                        <MDBNavbarBrand href="/">
                            <strong>Mr. Sunshine's</strong>
                            {/* <img alt="" src="https://lh3.googleusercontent.com/hPkDMCfGFjpMpKznRaWWDTH09lFo5i4pdUSKrgUaTIeANt5L1jJv3TziMeGQyxCQ49K7lq9r4ClN1gD3SjrkUM756oKq90mpvQaVf78Wj0htRyy_6kkSeYzKFkvzSGlA3-04xtj8sqs=w2400"/> */}
                        </MDBNavbarBrand>
                    </MDBNavbarNav>

                    <MDBNavbarNav center className="Navbar-custom">
                        { name === "home" && <MDBNavItem><MDBNavLink to="/"><u>HOME</u></MDBNavLink></MDBNavItem>}
                        { name !== "home" && <MDBNavItem><MDBNavLink to="/">HOME</MDBNavLink></MDBNavItem>}

                        { name === "store" && <MDBNavItem><MDBNavLink to="/store"><u>STORE</u></MDBNavLink></MDBNavItem>}
                        { name !== "store" && <MDBNavItem><MDBNavLink to="/store">STORE</MDBNavLink></MDBNavItem>}

                        { name === "about" && <MDBNavItem><MDBNavLink to="/about"><u>ABOUT</u></MDBNavLink></MDBNavItem>}
                        { name !== "about" && <MDBNavItem><MDBNavLink to="/about">ABOUT</MDBNavLink></MDBNavItem>}

                        { name === "contact" && <MDBNavItem><MDBNavLink to="/contact"><u>CONTACT</u></MDBNavLink></MDBNavItem>}
                        { name !== "contact" && <MDBNavItem><MDBNavLink to="/contact">CONTACT</MDBNavLink></MDBNavItem>}
                    </MDBNavbarNav>

                    <MDBNavbarNav right className="nav-flex-icons">
                        <MDBNavItem>
                            <a href="https://www.instagram.com/mr.sun.shines/" style={{color: "white"}} target="_blank" rel="noreferrer"><MDBIcon fab icon="instagram"/></a>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>

                <MDBNavbarNav right>
                    <MDBNavLink to="/cart">
                        <CartIcon cart={cart}/>
                    </MDBNavLink>
                </MDBNavbarNav>
            </MDBNavbar>
        </header>
    )
}