import React, { useEffect, useState } from "react"
import { MDBBox, MDBLightbox, MDBContainer, MDBCol, MDBRow, MDBBtn } from "mdbreact";
import { Navbar } from "../components/Navbar";
import { useHistory, useLocation } from "react-router-dom";
import { commerce } from "../lib/commerce";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Box, Button, Dialog, DialogTitle } from "@material-ui/core";

export const Item = ({ cart, addToCart }) => {
    const [ data, setData ] = useState({});
    const [ size, setSize ] = useState(null);
    const [ warning, setWarning ] = useState(false);
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        commerce.products.retrieve(location.pathname.split('/')[2], { type: 'permalink' }).then((product) => {
            setData(product)
        });
    }, [location.pathname])

    useEffect(() => {
        if (size) {
            setWarning(false);
        }
    }, [size])

    return (
        <MDBContainer>
            <Navbar name="" cart={cart}/>
            { data && data.media && data.price &&
            <>
                <MDBRow>
                    <MDBCol md="3">
                        <Box m={3}>
                            <h1>{data.name}</h1>
                        </Box>
                        <Box m={3}>
                            <h5>{data.price.formatted_with_symbol}</h5>
                        </Box>
                        <Box m={3}>
                            <p>{data.description}</p>
                        </Box>
                    </MDBCol>
                    <MDBCol md="6">
                        <Box m={3}>
                            <LazyLoadImage effect="blur" placeholderSrc={data.media.source} src={data.media.source} alt="" width="100%"/>
                        </Box>
                    </MDBCol>
                    <MDBCol md="3">
                        <Box m={3}>                            
                            { warning && <div className="d-flex flex-row justify-content-center"><p style={{color:"red"}}>Please select a size</p></div> }
                            <div className="d-flex flex-row justify-content-center">
                            {
                                
                                data.variant_groups[0].options && data.variant_groups[0].options.map((item, index) => {
                                    return (
                                        <div className="p-2">
                                            <Button key={index} color={(size === item.id? "default": "primary")}  style={{maxWidth: '40px', maxHeight: '40px', minWidth: '40px', minHeight: '40px'}} onClick={() => 
                                            {
                                                setSize(item.id)
                                            }}>
                                                {item.name}
                                            </Button>
                                        </div>
                                    )
                                })
                            }
                            </div>
                        </Box>
                        <div className="d-flex justify-content-center">
                            <MDBBtn onClick={() => {
                                if (size === null) {
                                    setWarning(true);
                                  }
                                else {
                                    addToCart(data.id, 1, {'vgrp_4OANwRA0klvYL8': size })
                                    setSize(null);
                                    history.push('/cart')
                                }
                            }}>Add to cart</MDBBtn>
                        </div>
                    </MDBCol>
                </MDBRow>

            </>
            }
            {!data && <p>loading...</p>}

        </MDBContainer>
    )
}