import React from "react"
import { MDBBox, MDBCol, MDBContainer, MDBJumbotron, MDBRow } from "mdbreact";
import { Navbar } from "../components/Navbar";

export const Checkout = ({ cart }) => {
    return (
        <MDBContainer>
            <Navbar cart={cart}/>
            {
                cart.line_items && cart.line_items.map((item, index) => {
                    return (
                        <p>{item.product_name}</p>
                    )  
                })
            }
            <p>Total: {cart.subtotal && cart.subtotal.formatted_with_symbol}</p>
        </MDBContainer>
    )
}