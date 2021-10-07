import React from "react"
import { MDBBox, MDBCol, MDBContainer, MDBRow, MDBInput, MDBBtn } from "mdbreact";
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
                    <MDBRow>
                        <MDBCol md="12">
                            <form style={{margin: "10", color: "white"}}>
                                <div style={{margin: "10", color: "white"}}>
                                    <MDBInput
                                        label="Your name"
                                        group
                                        type="text"
                                        validate
                                        error="wrong"
                                        success="right"
                                        name="name"
                                        style={{ color: "white" }}
                                    />
                                    <MDBInput
                                        label="Your email"
                                        group
                                        type="email"
                                        validate
                                        error="wrong"
                                        success="right"
                                        name="email"
                                        style={{ color: "white" }}
                                    />
                                    <MDBInput
                                        type="textarea"
                                        rows="3"
                                        label="Your message"
                                        name="message"
                                        style={{ color: "white" }}
                                    />
                                </div>
                                <div className="text-center py-4 mt-3">
                                <MDBBtn color="white"><div color="black">Send message</div></MDBBtn>
                                </div>
                            </form>
                        </MDBCol>
                    </MDBRow>
                </MDBBox>
            </MDBBox>

        </MDBContainer>
    )
}