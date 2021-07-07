import React, { useEffect, useState } from "react"
import { MDBBox, MDBLightbox, MDBContainer, MDBCol, MDBRow, MDBBtn } from "mdbreact";
import { Navbar } from "../components/Navbar";
import { useLocation } from "react-router-dom";
import { commerce } from "../lib/commerce";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const Item = ({ cart, addToCart }) => {
    const [ data, setData ] = useState({});
    const location = useLocation();

    useEffect(() => {
        commerce.products.retrieve(location.pathname.split('/')[2], { type: 'permalink' }).then((product) => {
            setData(product)
            console.log(product)
        });
    }, [location.pathname])

    return (
        <MDBContainer>
            <Navbar name="" cart={cart}/>
            { data && data.media && data.price &&
            <>
                <h1>{data.name}</h1>
                <p>{data.description}</p>
                <LazyLoadImage effect="blur" placeholderSrc={data.media.source} src={data.media.source} alt="" width="70%"/>
                <p>{data.price.formatted_with_symbol}</p>
                <MDBBtn onClick={() => addToCart(data.id, 1)}>Add to cart</MDBBtn>
            </>
            }
            {!data && <p>loading...</p>}

        </MDBContainer>
    )
}