import React from "react"
import { MDBBox, MDBCol, MDBContainer, MDBJumbotron, MDBRow, MDBNavLink, MDBListGroup, MDBListGroupItem, MDBBtn } from "mdbreact";
import { Navbar } from "../components/Navbar";
import Increment from "../components/Increment";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart }) => {

    return (
        <MDBContainer>
            <Navbar cart={cart}/>
            <MDBRow>
                <MDBCol md="8">
                    <h3>Items</h3>
                    <MDBListGroup>
                    {
                        cart.line_items && cart.line_items.map((item, index) => {
                            return (
                                <MDBListGroupItem style={{ backgroundColor: "#1A1A1D" }}>
                                    <div style={{ justifyContent: "space-between"}}>
                                        <div style={{ display: "inline-block", padding: "5px"}}><LazyLoadImage effect="blur" placeholderSrc={item.media.source} src={item.media.source} alt="" width="40%"/></div>
                                        {/* <img style={{ display: "inline-block", padding: "5px" }} src={item.media.source} width="40%" alt="img"/> */}
                                        <p style={{ display: "inline-block", padding: "5px", fontSize: "20px" }}>{item.product_name}</p>
                                        <div style={{ display: "inline-block", padding: "5px" }}><Increment qty={item.quantity} onUpdateCartQty={onUpdateCartQty} id={item.id}/></div>
                                        <p style={{ display: "inline-block", padding: "5px" }}>{item.line_total.formatted_with_symbol}</p>
                                        <p style={{ display: "inline-block", padding: "5px" }} onClick={() => onRemoveFromCart(item.id)}>Remove</p>
                                    </div>                                    
                                </MDBListGroupItem>
                            )  
                        })
                    }
                    </MDBListGroup>
                </MDBCol>

                <MDBCol md="4">
                    <p>Total: {cart.subtotal && cart.subtotal.formatted_with_symbol}</p>
                    <MDBNavLink to="/checkout"><MDBBtn>Checkout</MDBBtn></MDBNavLink>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}