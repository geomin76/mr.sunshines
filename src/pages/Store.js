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
                <p className="text-center">Here is my very first series — XL only, due to COVID supply and demand. Reluctant to release because of my nit-picky perfectionism, I am challenging myself to be okay with the things that I am not fond of. I will let you know now that some imagery may not be centered and ink may have smudged or ran through my screen incorrectly, but I guess that is the beauty of art being made by hand. If you are unhappy with your purchase please let me know and I will fix it. I am forever learning, and I am excited for my next series to be even better. Thank you for supporting this obscure adventure — it means everything. </p>
                <MDBRow>
                    {
                        products.map((product, index) => {
                            return (
                                <MDBCol md="4" key={index}>
                                    <MDBCard ecommerce onClick={() => {
                                            history.push('/item/' + product.permalink)
                                    }} style={{ backgroundColor: "#000000", opacity: product.inventory.available === 0 ? "0.5" : '1' }}>
                                        <MDBBox m={2}>
                                            <LazyLoadImage effect="blur" placeholderSrc={product.media.source} src={product.media.source} alt="" className="img-fluid"/>
                                        </MDBBox>
                                        <MDBBox p={3}>
                                            <MDBTypography tag='h4' className='float-left'>{product.name}</MDBTypography>
                                            <MDBTypography tag='h5' className='float-right'>{product.price.formatted_with_symbol}</MDBTypography>
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