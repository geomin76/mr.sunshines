import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
import { Badge, IconButton } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import { Navbar } from "./Navbar";
import React from "react"

export const Cart = ({ cart }) => {
    return (
        <IconButton aria-label="Show cart">
            { cart &&
                <Badge badgeContent={cart.total_items} color="secondary">
                    <ShoppingCart style={{ fill: 'white' }} />
                </Badge>
            }
            { !cart &&
                <Badge badgeContent={0} color="secondary">
                    <ShoppingCart style={{ fill: 'white' }} />
                </Badge>
            }
        </IconButton>
    )
}