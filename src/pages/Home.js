import React from "react"
import { MDBBox, MDBCol, MDBContainer, MDBJumbotron, MDBRow } from "mdbreact";
import { Navbar } from "../components/Navbar";
import { Increment } from "../components/Increment";

export const Home = ({ cart }) => {
    return (
        <MDBContainer>
            <Navbar name="home" cart={cart}/>
            <MDBRow>
                <MDBCol>
                    <MDBJumbotron style={{ background: "none" }}>
                        <h2>intro here!</h2>
                    </MDBJumbotron>
                </MDBCol>   
            </MDBRow>
                
        </MDBContainer>
    )
}