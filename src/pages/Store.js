import React from "react"
import { MDBBox, MDBLightbox, MDBContainer, MDBCol, MDBRow, MDBBtn } from "mdbreact";
import { Navbar } from "../components/Navbar";

export const Store = () => {

    const data = [
        {img: "https://ae01.alicdn.com/kf/H6b15da478a714d14ad33b82f7eb8c945j/1-Set-Men-Outfits-Casual-Wear-Tops-Shirt-Trousers-Pants-Doll-Accessories-Fashion-Clothes-for-Barbie.jpg", name: "Item", price: 20},
        {img: "https://ae01.alicdn.com/kf/H6b15da478a714d14ad33b82f7eb8c945j/1-Set-Men-Outfits-Casual-Wear-Tops-Shirt-Trousers-Pants-Doll-Accessories-Fashion-Clothes-for-Barbie.jpg", name: "Item", price: 20},
        {img: "https://ae01.alicdn.com/kf/H6b15da478a714d14ad33b82f7eb8c945j/1-Set-Men-Outfits-Casual-Wear-Tops-Shirt-Trousers-Pants-Doll-Accessories-Fashion-Clothes-for-Barbie.jpg", name: "Item", price: 20}
    ]

    return (
        <MDBContainer>
            <Navbar name="store"/>
            <MDBBox style={{ marginTop: "20px" }}>
                <MDBRow>
                    {
                        data.map((product, index) => {
                            return (
                                <MDBCol md="4" key={index}>
                                    <MDBBox alignContent="center" alignItems="center" m="3">
                                        <div className="text-center">
                                            <img src={product.img} className="img-fluid"/>
                                            <h3>{product.name}</h3>
                                            <p>{`$${product.price}`}</p>
                                        </div>
                                        <MDBBtn>Add to cart</MDBBtn>
                                    </MDBBox>
                                </MDBCol>
                            )
                            
                        })
                    }
                </MDBRow>
            </MDBBox>
        </MDBContainer>
    )
}