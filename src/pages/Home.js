import React from "react"
import { MDBContainer } from "mdbreact";
import { Navbar } from "../components/Navbar";

export const Home = () => {
    return (
        <MDBContainer>
            <Navbar name="home"/>
        </MDBContainer>
    )
}