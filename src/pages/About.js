import React from "react"
import { MDBBox, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import { Navbar } from "../components/Navbar";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

export const About = ({ cart }) => {
    return (
        <MDBContainer>
            <Navbar name="about" cart={cart} />
            <MDBBox style={{ marginTop: "20px" }}>
                <MDBBox style={{ marginTop: "20px" }}>
                    <MDBRow>
                        <MDBCol md="4"><div className="text-center"><LazyLoadImage effect="blur" placeholderSrc="https://mrsunshines.s3.amazonaws.com/me.jpg" src="https://mrsunshines.s3.amazonaws.com/me.jpg" alt="" width="100%" /></div></MDBCol>
                        <MDBCol md="8">
                            <MDBBox m="3">
                                <p>
                                    Emilee Hansen is an elementary school art teacher and novice screen printer in the western mountains of North Carolina. She originally studied commercial photography, yet to her surprise was shockingly burnt out. While enrolled in a drawing course she was quickly inspired to become an art teacher — which is how she initially made her way into her first screen printing studio.
                                </p>
                                <p>
                                    The artist did not understand her interest in the printing process until she was removed from all studio resources two years later. Go figure. She also didn’t begin to develop her own style until the same time period when she found herself with a melancholy heart.
                                </p>
                                <p>
                                    With that in mind her work took a sharp turn and became dark and gloomy, and it is something that she has fallen in love with. Throughout Mr. Sunshine’s journey you’ll see twisted thoughts, words, and imagery that come from dark yet playfully exploratory places — thanks to Emilee’s forever inner child and her bliss of working with the youth.
                                </p>
                                <p>
                                    Mr. Sunshine’s priority is quality service through attention to detail and craftsmanship. All designs are created and silkscreen printed by the artist on comfortable garments with eco friendly inks. Like life itself, Mr. Sunshine’s is constantly evolving. Each series is limited and will come and go with new concepts and designs.
                                </p>
                                <p>
                                    The goal is for creative artistry to be expressed in truthful ways that encourages others to dig deeper and question themselves and life. So cheers to this peculiar adventure.
                                </p>
                            </MDBBox>
                        </MDBCol>
                    </MDBRow>
                </MDBBox>
            </MDBBox>

        </MDBContainer>
    )
}