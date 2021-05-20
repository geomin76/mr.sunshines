import { MDBBox, MDBCol, MDBContainer, MDBJumbotron, MDBRow } from "mdbreact";
import { Navbar } from "../components/Navbar";
import React from "react"


export const Cart = () => {
    return (
        <MDBContainer>
            <Navbar/>
            <p>your cart</p>
        </MDBContainer>
    )
}