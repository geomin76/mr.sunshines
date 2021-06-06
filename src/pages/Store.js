import React from "react"
import { MDBBox, MDBLightbox, MDBContainer, MDBCol, MDBRow, MDBBtn } from "mdbreact";
import { Navbar } from "../components/Navbar";

export const Store = ({ products, addToCart, cart }) => {

    return (
        <MDBContainer>
            <Navbar name="store" cart={cart}/>
            <MDBBox style={{ marginTop: "20px" }}>
                <MDBRow>
                    {
                        products.map((product, index) => {
                            return (
                                <MDBCol md="4" key={index}>
                                    <MDBBox alignContent="center" alignItems="center" m="3">
                                        <div className="text-center">
                                            <img src={product.media.source} className="img-fluid"/>
                                            <h3>{product.name}</h3>
                                            <p>{product.price.formatted_with_symbol}</p>
                                        </div>
                                        <MDBBtn onClick={() => addToCart(product.id, 1)}>Add to cart</MDBBtn>
                                    </MDBBox>
                                </MDBCol>
                            )
                        })
                    }
                </MDBRow>
            </MDBBox>
        </MDBContainer>
    )
}