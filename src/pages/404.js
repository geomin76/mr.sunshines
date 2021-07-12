import React from "react"
import { MDBBox, MDBCol, MDBContainer, MDBRow, MDBBtn } from "mdbreact";
import { Navbar } from "../components/Navbar";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useHistory } from "react-router-dom";

export const PageNotFound = ({ cart }) => {

    const history = useHistory();

    return (
        <MDBContainer>
            <Navbar name="about" cart={cart}/>
            <MDBBox style={{ marginTop: "20px" }}>
                <MDBBox style={{ marginTop: "20px" }}>
                    <MDBRow>
                        <MDBCol md="12">
                            <h1>Oh no!</h1>
                            <p>Looks like this page doesn't exist...</p>
                            <MDBBtn color="blue-grey" onClick={() => history.push("/")}>Go home!</MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </MDBBox>
            </MDBBox>
            
        </MDBContainer>
    )
}