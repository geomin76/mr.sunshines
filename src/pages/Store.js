import React from "react"
import { MDBBox, MDBLightbox, MDBContainer, MDBCol, MDBRow, MDBBtn, MDBTypography, MDBCard, MDBCardImage } from "mdbreact";
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
                                    }} style={{ backgroundColor: "#1A1A1D" }}>
                                        <MDBBox m={3}>
                                            <LazyLoadImage effect="blur" placeholderSrc={product.media.source} src={product.media.source} alt="" className="img-fluid"/>
                                        </MDBBox>
                                        <MDBBox m={3}>
                                            <MDBTypography tag='h4' className='float-left'>{product.name}</MDBTypography>
                                            <MDBTypography tag='h5' className='float-right'>{product.price.formatted_with_symbol}</MDBTypography>
                                        </MDBBox>
                                    </MDBCard>
                                </MDBCol>
                            )
                        })
                    }
                </MDBRow>
            </MDBBox>
        </MDBContainer>
    )
}