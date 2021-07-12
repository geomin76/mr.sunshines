import React, { useState } from "react"
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
import { CartIcon } from "./CartIcon";

export const Navbar = ({ name, cart }) => {
    
    const [collapse, setCollapse] = useState(false);

    const onClick = () => {
        setCollapse(prevState => !prevState)
      }

    return (
        <header>
            <MDBNavbar dark expand="md" transparent>
                <MDBNavbarToggler onClick={onClick} />
                <MDBCollapse isOpen={collapse} navbar>
                    <MDBNavbarNav left>
                        { name === "home" && <MDBNavItem active><MDBNavLink to="/">Home</MDBNavLink></MDBNavItem>}
                        { name !== "home" && <MDBNavItem><MDBNavLink to="/">Home</MDBNavLink></MDBNavItem>}

                        { name === "store" && <MDBNavItem active><MDBNavLink to="/store">Store</MDBNavLink></MDBNavItem>}
                        { name !== "store" && <MDBNavItem><MDBNavLink to="/store">Store</MDBNavLink></MDBNavItem>}

                        { name === "about" && <MDBNavItem active><MDBNavLink to="/about">About</MDBNavLink></MDBNavItem>}
                        { name !== "about" && <MDBNavItem><MDBNavLink to="/about">About</MDBNavLink></MDBNavItem>}
                    </MDBNavbarNav>

                    <MDBNavbarNav center>
                        <MDBNavbarBrand href="/">
                            <strong>Mr. Sunshine</strong>
                            {/* <img alt="" src="https://lh3.googleusercontent.com/hPkDMCfGFjpMpKznRaWWDTH09lFo5i4pdUSKrgUaTIeANt5L1jJv3TziMeGQyxCQ49K7lq9r4ClN1gD3SjrkUM756oKq90mpvQaVf78Wj0htRyy_6kkSeYzKFkvzSGlA3-04xtj8sqs=w2400"/> */}
                        </MDBNavbarBrand>
                    </MDBNavbarNav>

                    <MDBNavbarNav right className="nav-flex-icons">
                        <MDBNavItem>
                            <MDBNavLink to="#"><MDBIcon fab icon="instagram" /></MDBNavLink>
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