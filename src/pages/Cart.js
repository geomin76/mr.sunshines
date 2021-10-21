import React from "react"
import { MDBBox, MDBCol, MDBContainer, MDBRow, MDBListGroup, MDBListGroupItem, MDBBtn, MDBTypography } from "mdbreact";
import { Navbar } from "../components/Navbar";
import {Increment} from "../components/Increment";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Box } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart }) => {

    const history = useHistory();

    return (
        <MDBContainer>
            <Navbar cart={cart}/>
            <MDBRow>
                <MDBCol md="8">
                    <Box m={3}><h2>Your Shopping Cart</h2></Box>
                    <MDBListGroup>
                    {
                        cart && cart.line_items && cart.line_items.map((item, index) => {
                            console.log(item)
                            return (
                                <MDBListGroupItem style={{ backgroundColor: "#000000" }}>
                                    <MDBRow>
                                        <MDBCol size="4">
                                            <LazyLoadImage effect="blur" placeholderSrc={item.image.url} src={item.image.url} alt="" width="100%"/>
                                        </MDBCol>
                                        <MDBCol size="4">
                                            <MDBBox m={1}><h2>{item.product_name}</h2></MDBBox>
                                            <MDBBox m={1} style={{ fontSize: "15px"}}><b>{item.line_total.formatted_with_symbol}</b></MDBBox>
                                            <MDBBox m={1}><p>Size {item.selected_options[0].option_name}</p></MDBBox>
                                        </MDBCol>
                                        <MDBCol size="4">
                                            <MDBBox><Increment qty={item.quantity} onUpdateCartQty={onUpdateCartQty} id={item.id} productId={item.product_id}/></MDBBox>
                                            <MDBBox m={2}><p onClick={() => onRemoveFromCart(item.id)}><u>Remove</u></p></MDBBox>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBListGroupItem>
                            )  
                        })
                    }
                    </MDBListGroup>
                    { cart && cart.line_items && cart.line_items.length === 0 && <>
                        <Box m={3}><p>You have no items in your cart!</p></Box>
                        <Box m={3}><MDBBtn color="white" onClick={() => history.push("/store")}>Shop now</MDBBtn></Box>
                    </>}
                </MDBCol>

                { cart && cart.line_items && cart.line_items.length !== 0 &&
                    <>
                    <MDBCol md="4">
                        <Box m={3}><h2>Order Summary</h2></Box>
                        <hr></hr>
                        <Box m={3}>
                            <MDBTypography tag='p' className='float-left'>Subtotal</MDBTypography>
                            <MDBTypography tag='p' className='float-right'>{cart.subtotal && cart.subtotal.formatted_with_symbol}</MDBTypography>
                        </Box>
                        <br></br>
                        <Box m={3}>
                            <MDBTypography tag='p' className='float-left'>Shipping</MDBTypography>
                            <MDBTypography tag='p' className='float-right'>FREE</MDBTypography>
                        </Box>
                        <br></br>
                        <hr></hr>
                        <Box m={3}>
                            <MDBTypography tag='b' className='float-left'>Total</MDBTypography>
                            <MDBTypography tag='b' className='float-right'>{cart.subtotal && cart.subtotal.formatted_with_symbol}</MDBTypography>
                        </Box>
                        <br></br>
                        <Box m={3}>
                            <MDBBtn color="white" onClick={() => history.push("/checkout")}>
                                Checkout
                            </MDBBtn>
                        </Box>
                    </MDBCol>
                    </>
                }
            </MDBRow>
        </MDBContainer>
    )
}