import React from "react"
import { MDBBox, MDBLightbox, MDBContainer, MDBCol, MDBRow, MDBBtn, MDBTypography } from "mdbreact";
import { Navbar } from "../components/Navbar";
import { useHistory } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

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
                                            <LazyLoadImage effect="blur" placeholderSrc={product.media.source} src={product.media.source} alt="" className="img-fluid"/>
                                        </div>
                                            <MDBTypography tag='h4'>{product.name}</MDBTypography>
                                            <MDBTypography tag='h6'>{product.price.formatted_with_symbol}</MDBTypography>
                                            <MDBBtn onClick={() => addToCart(product.id, 1)}><AddShoppingCartIcon /></MDBBtn>
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