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
                                My name is Emilee Hansen and I am an elementary school art teacher and novice screen printer in the mountains of Western North Carolina. I originally chose to study commercial photography, yet to my surprise I was shockingly burnt out. While enrolled in a drawing course I was quickly inspired to become an art teacher — which is how I initially made my way into my first screen printing studio.
                                </p>
                                <p>
                                I did not truly understand my interest in the printing process until I was removed from all studio resources two years later. Go figure. I also didn’t begin to develop my own style until the same time period when I found myself with a melancholy heart. I wasn’t creating art for critiques anymore. I was creating art for my hurt heart. 
                                </p>
                                <p>
                                With that in mind my work took a sharp turn and became dark and gloomy, and it is something that I have fallen in love with. Throughout Mr. Sunshine’s journey you’ll see twisted thoughts, words, and imagery that come from dark yet playfully exploratory places — thanks to my forever inner child and the bliss of working with youth.
                                </p>
                                <p>
                                Mr. Sunshine’s priority is quality service through attention to fine detail and craftsmanship. All designs are created and silkscreen printed on comfortable garments using eco-friendly inks. Like life itself, Mr. Sunshine’s is constantly evolving. Each series is limited and will come and go with new concepts and designs. 
                                </p>
                                <p>
                                The goal is to express myself in truthful ways that encourages others to dig deeper and question themselves and life. So cheers to this gloomy, happy, and peculiar adventure.
                                </p>
                            </MDBBox>
                        </MDBCol>
                    </MDBRow>
                </MDBBox>
            </MDBBox>

        </MDBContainer>
    )
}