import React from "react"
import { MDBBox, MDBLightbox, MDBContainer, MDBCol, MDBRow, MDBBtn } from "mdbreact";
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
                                    <MDBBox alignContent="center" alignItems="center" m="3">
                                        <div className="text-center" onClick={() => {
                                            history.push('/item/' + product.id)
                                        }}>
                                            {/* <img src={product.media.source} className="img-fluid" alt=""/> */}
                                            <LazyLoadImage effect="blur" placeholderSrc={product.media.source} src={product.media.source} alt="" className="img-fluid"/>
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