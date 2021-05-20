import React from "react"
import { MDBBox, MDBCol, MDBContainer, MDBJumbotron, MDBRow } from "mdbreact";
import { Navbar } from "../components/Navbar";

export const Home = ({ cart }) => {
    return (
        <MDBContainer>
            <Navbar name="home" cart={cart}/>
            <MDBRow>
                <MDBCol>
                    <MDBJumbotron style={{ background: "none" }}>
                        <h2>Hello, world!</h2>
                        <p>Here is a very very basic version of the website! I'm just getting some code out there!</p>
                        <p>I'll be putting more design/shopping functionality, but I'll occasionally send you this link so you can give me feedback!!</p>
                        <p>CHEERS</p>
                    </MDBJumbotron>
                </MDBCol>   
            </MDBRow>
                
        </MDBContainer>
    )
}