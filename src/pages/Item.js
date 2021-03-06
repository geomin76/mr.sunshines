import React, { useEffect, useState } from "react"
import { MDBContainer, MDBCol, MDBRow, MDBBtn } from "mdbreact";
import { Navbar } from "../components/Navbar";
import { useHistory, useLocation } from "react-router-dom";
import { commerce } from "../lib/commerce";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Box, Button } from "@material-ui/core";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ReactHtmlParser from 'react-html-parser'; 

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

    console.log(data)

    return (
        <MDBContainer>
            <Navbar name="" cart={cart}/>
            { data && data.price &&
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
                            { ReactHtmlParser(data.description) }
                            {/* <p>{data.description}</p> */}
                        </Box>
                        <Box m={3}>
                            { data.inventory.available === 0 && <h4 className="text-center" style={{color:"red"}}>OUT OF STOCK</h4>}
                            { data.inventory.available <= 3 && data.inventory.available !== 0 && <p className="text-center" style={{color:"red"}}>Low inventory</p>}
                        </Box>
                    </MDBCol>
                    <MDBCol md="6">
                        <Carousel showStatus={false} showArrows={false}>
                            { data.assets.map((item) => {
                                return (
                                    <Box m={3}>
                                        <Zoom>
                                            <Box m={3}>
                                                <LazyLoadImage effect="blur" placeholderSrc={item.url} src={item.url} alt="" width="100%"/>
                                            </Box>
                                        </Zoom>
                                    </Box>
                                )
                            })}
                        </Carousel>
                    </MDBCol>
                    <MDBCol md="3">
                        <Box m={3}>                            
                            { warning && <div className="d-flex flex-row justify-content-center"><p style={{color:"red"}}>Please select a size</p></div> }
                            <div className="d-flex flex-row justify-content-center">
                            {
                                data.variant_groups[0].options && data.variant_groups[0].options.map((item, index) => {
                                    return (
                                        <div className="p-2" key={index}>
                                            <Button key={index} color="white"  style={{textDecoration: size === item.id ? "underline" : "none", maxWidth: '40px', maxHeight: '40px', minWidth: '40px', minHeight: '40px'}} onClick={() => 
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
                            <MDBBtn color="white" disabled={data.inventory.available === 0} onClick={() => {
                                if (size === null) {
                                    setWarning(true);
                                  }
                                else {
                                    const variant_data = {}
                                    variant_data[data.variant_groups[0].id] = size
                                    addToCart(data.id, 1, variant_data)
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