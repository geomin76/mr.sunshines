import React from "react"
import { MDBCol, MDBContainer, MDBRow, MDBBtn } from "mdbreact";
import { Navbar } from "../components/Navbar";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useHistory } from "react-router";

export const Home = ({ cart }) => {

    const history = useHistory();

    return (
        <MDBContainer>
            <Navbar name="home" cart={cart}/>
            <MDBRow>
                <MDBCol md="8" className="d-flex align-items-center justify-content-center text-center">
                    <div><LazyLoadImage effect="blur" placeholderSrc="https://mrsunshines.s3.amazonaws.com/home.JPG" src="https://mrsunshines.s3.amazonaws.com/home.JPG" alt="" width="90%" /></div>
                </MDBCol> 
                <MDBCol md="4" className="d-flex align-items-center justify-content-center text-center">
                    <div>
                        <p>You only see what you want to see.</p>
                        <MDBBtn color="white" onClick={() => history.push("/store")}><div color="black">Shop now</div></MDBBtn>
                    </div>
                </MDBCol>
            </MDBRow>
                
        </MDBContainer>
    )
}