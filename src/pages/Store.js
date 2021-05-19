import React from "react"
import { MDBBox, MDBContainer, MDBCol, MDBRow } from "mdbreact";
import { Navbar } from "../components/Navbar";

export const Store = () => {
    return (
        <MDBContainer>
            <Navbar name="store"/>
            <MDBBox style={{ marginTop: "20px" }}>
                <MDBRow>
                    <MDBCol md="4">
                        <MDBBox alignContent="center" alignItems="center" m="3">
                            <div className="text-center">
                                <img src="https://ae01.alicdn.com/kf/H6b15da478a714d14ad33b82f7eb8c945j/1-Set-Men-Outfits-Casual-Wear-Tops-Shirt-Trousers-Pants-Doll-Accessories-Fashion-Clothes-for-Barbie.jpg" className="img-fluid"/>
                                <h3>Item</h3>
                                <p>$20</p>
                            </div>
                        </MDBBox>
                    </MDBCol>
                    <MDBCol md="4">
                        <MDBBox alignContent="center" alignItems="center" m="3">
                            <div className="text-center">
                                <img src="https://ae01.alicdn.com/kf/H6b15da478a714d14ad33b82f7eb8c945j/1-Set-Men-Outfits-Casual-Wear-Tops-Shirt-Trousers-Pants-Doll-Accessories-Fashion-Clothes-for-Barbie.jpg" className="img-fluid"/>
                                <h3>Item</h3>
                                <p>$20</p>
                            </div>
                        </MDBBox>
                    </MDBCol>
                    <MDBCol md="4">
                        <MDBBox alignContent="center" alignItems="center" m="3">
                            <div className="text-center">
                                <img src="https://ae01.alicdn.com/kf/H6b15da478a714d14ad33b82f7eb8c945j/1-Set-Men-Outfits-Casual-Wear-Tops-Shirt-Trousers-Pants-Doll-Accessories-Fashion-Clothes-for-Barbie.jpg" className="img-fluid"/>
                                <h3>Item</h3>
                                <p>$20</p>
                            </div>
                        </MDBBox>
                    </MDBCol>
                    <MDBCol md="4">
                        <MDBBox alignContent="center" alignItems="center" m="3">
                            <div className="text-center">
                                <img src="https://ae01.alicdn.com/kf/H6b15da478a714d14ad33b82f7eb8c945j/1-Set-Men-Outfits-Casual-Wear-Tops-Shirt-Trousers-Pants-Doll-Accessories-Fashion-Clothes-for-Barbie.jpg" className="img-fluid"/>
                                <h3>Item</h3>
                                <p>$20</p>
                            </div>
                        </MDBBox>
                    </MDBCol>
                </MDBRow>
            </MDBBox>
        </MDBContainer>
    )
}