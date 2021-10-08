import React from "react"
import { MDBBox, MDBCol, MDBContainer, MDBRow, MDBBtn } from "mdbreact";
import { Navbar } from "../components/Navbar";

export const Contact = ({ cart }) => {
    return (
        <MDBContainer>
            <Navbar name="contact" cart={cart} />
            <MDBBox style={{ marginTop: "20px" }}>
                <MDBBox style={{ marginTop: "20px" }}>
                    <MDBRow>
                        <MDBCol md="12">
                            <p className="text-center">
                                For general inquires, contact mr.sunshine.store@gmail.com 
                            </p>
                            <p className="text-center">
                                Press the button below to email!
                            </p>
                        </MDBCol>
                        <MDBCol md="12" className="d-flex align-items-center justify-content-center text-center">
                            <div>
                                <a href = "mailto: mr.sunshine.store@gmail.com" target="_blank" rel="noreferrer"><MDBBtn color="white"><div color="black">Email!</div></MDBBtn></a>
                            </div>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                    </MDBRow>
                </MDBBox>
            </MDBBox>

        </MDBContainer>
    )
}