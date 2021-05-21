import React, { useState } from "react"
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
import { Badge, IconButton } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
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
                        { name == "home" && <MDBNavItem active><MDBNavLink to="/">Home</MDBNavLink></MDBNavItem>}
                        { name != "home" && <MDBNavItem><MDBNavLink to="/">Home</MDBNavLink></MDBNavItem>}

                        { name == "store" && <MDBNavItem active><MDBNavLink to="/store">Store</MDBNavLink></MDBNavItem>}
                        { name != "store" && <MDBNavItem><MDBNavLink to="/store">Store</MDBNavLink></MDBNavItem>}

                        { name == "about" && <MDBNavItem active><MDBNavLink to="/about">About</MDBNavLink></MDBNavItem>}
                        { name != "about" && <MDBNavItem><MDBNavLink to="/about">About</MDBNavLink></MDBNavItem>}
                    </MDBNavbarNav>
                    <MDBNavbarNav center>
                        <MDBNavbarBrand href="/">
                            <strong>Mr. Sunshine</strong>
                        </MDBNavbarBrand>
                    </MDBNavbarNav>
                    <MDBNavbarNav right className="nav-flex-icons">
                        <MDBNavItem>
                            <MDBNavLink to="#"><MDBIcon fab icon="facebook-f"/></MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="#"><MDBIcon fab icon="twitter" /></MDBNavLink>
                        </MDBNavItem>
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