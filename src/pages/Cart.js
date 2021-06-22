import React from "react"
import { MDBBox, MDBCol, MDBContainer, MDBJumbotron, MDBRow, MDBNavLink, MDBListGroup, MDBListGroupItem } from "mdbreact";
import { Navbar } from "../components/Navbar";
import Increment from "../components/Increment";

export const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart }) => {

    console.log(cart)
    return (
        <MDBContainer>
            <Navbar cart={cart}/>
            <MDBRow>
                <MDBCol md="8">
                    <MDBListGroup>
                    {
                        cart.line_items && cart.line_items.map((item, index) => {
                            return (
                                <MDBListGroupItem style={{ backgroundColor: "#1A1A1D" }}>
                                    <div style={{ justifyContent: "space-between"}}>
                                        <img style={{ display: "inline-block", padding: "5px" }} src={item.media.source} width="40%" alt="img"/>
                                        <h4 style={{ display: "inline-block", padding: "5px" }}>{item.product_name}</h4>
                                        <div style={{ display: "inline-block", padding: "5px" }}><Increment qty={item.quantity} onUpdateCartQty={onUpdateCartQty} id={item.id}/></div>
                                        <p style={{ display: "inline-block", padding: "5px" }}>{item.line_total.formatted_with_symbol}</p>
                                    </div>                                    
                                </MDBListGroupItem>
                            )  
                        })
                    }
                    </MDBListGroup>
                </MDBCol>

                <MDBCol md="4">
                    <p>Total: {cart.subtotal && cart.subtotal.formatted_with_symbol}</p>
                    <MDBNavLink to="/checkout">Checkout</MDBNavLink>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}