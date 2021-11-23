import React from "react"
import { MDBBox, MDBContainer, MDBCol, MDBRow, MDBTypography, MDBCard } from "mdbreact";
import { Navbar } from "../components/Navbar";
import { useHistory } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const Store = ({ products, addToCart, cart }) => {

    const history = useHistory();

    return (
        <MDBContainer>
            <Navbar name="store" cart={cart}/>
            <MDBBox style={{ marginTop: "20px" }}>
                <MDBRow>
                    {
                        products.map((product, index) => {
                            return (
                                <MDBCol md="4" key={index}>
                                    <MDBCard ecommerce onClick={() => {
                                            history.push('/item/' + product.permalink)
                                    }} style={{ backgroundColor: "#000000", opacity: product.inventory.available === 0 ? "0.5" : '1' }}>
                                        <MDBBox m={2}>
                                            <LazyLoadImage effect="blur" placeholderSrc={product.image.url} src={product.image.url} alt="" className="img-fluid"/>
                                        </MDBBox>
                                    </MDBCard>
                                    { product.inventory.available === 0 && <h4 className="text-center" style={{color:"red"}}>OUT OF STOCK</h4>}
                                    { product.inventory.available <= 3 && product.inventory.available !== 0 && <p className="text-center" style={{color:"red"}}>Low inventory</p>}
                                </MDBCol>
                            )
                        })
                    }
                </MDBRow>
            </MDBBox>
        </MDBContainer>
    )
}