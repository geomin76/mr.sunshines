import React from "react"
import { MDBBox, MDBCol, MDBContainer, MDBRow } from "mdbreact";
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
                                For general inquires, contact <a href = "mailto: mr.sunshine.store@gmail.com" target="_blank" rel="noreferrer">mr.sunshine.store@gmail.com</a> or use the contact form below.
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBBox>
            </MDBBox>

        </MDBContainer>
    )
}