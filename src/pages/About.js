import React from "react"
import { MDBBox, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import { Navbar } from "../components/Navbar";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

export const About = ({ cart }) => {
    return (
        <MDBContainer>
            <Navbar name="about" cart={cart}/>
            <MDBBox style={{ marginTop: "20px" }}>
                <h2 className="text-center">About me</h2>
                <MDBBox style={{ marginTop: "20px" }}>
                    <MDBRow>
                        <MDBCol md="4"><div className="text-center"><LazyLoadImage effect="blur" placeholderSrc="https://lh3.googleusercontent.com/_3Ynyei2akRtN1Otw1sb6sFGaDI8Fph9luOCzF9wEHzjkPp3ur1nL31Qt-Uk9RkCmkr2Mtdm2Fgzaoiafope2nPsHUrX5_nYYT6oLAIFCQ69yC4mEXJ5bXLP5MwXJucy1OUHhR5b0CU=w2400" src="https://lh3.googleusercontent.com/_3Ynyei2akRtN1Otw1sb6sFGaDI8Fph9luOCzF9wEHzjkPp3ur1nL31Qt-Uk9RkCmkr2Mtdm2Fgzaoiafope2nPsHUrX5_nYYT6oLAIFCQ69yC4mEXJ5bXLP5MwXJucy1OUHhR5b0CU=w2400" alt="" width="100%"/></div></MDBCol>
                        <MDBCol md="8">
                            <MDBBox m="3">
                                <p>
                                    My name is Emilee Hansen and I am an elementary school art teacher and a novice screen printer in the western mountains of North Carolina. Throughout my life I have always been engaged in many different types of art making. I studied commercial photography for half of my undergraduate career and was shockingly burnt out. Within that degree I was required to take a drawing class that inspired me to switch my course of study to art education. Emerged in a variety of enriching studios from book arts to ceramic throwing, fiber surface design, painting, sculpture casting, and so many more I found myself in a screen printing class.                                
                                </p>
                                <p>
                                    I did not understand the value and my interest in tLOL he meticulous process until two years after graduating and being removed from all studio resources. Go figure. I also didn’t develop my style until the same time period when I found myself heartbroken. It sounds cheesy but it is true. I started expressing myself authentically when I needed it most. I wasn’t creating art for critiques anymore. I was creating art for my hurt heart.                                
                                </p>
                                <p>
                                    With that in mind my style took a sharp turn and became dark and gloomy, and it is something that I have fallen in love with. Throughout Mr. Sunshine’s journey you’ll see twisted thoughts, words, and imagery that come from dark yet playfully exploratory places — thanks to my forever inner child and the bliss of working with youth.
                                </p>
                                <p>
                                    My goal is to express myself in truthful ways that encourages others to dig deeper and question themselves and life. So cheers to this gloomy and happy adventure.
                                </p>
                            </MDBBox>
                        </MDBCol>
                    </MDBRow>
                </MDBBox>
            </MDBBox>
            
        </MDBContainer>
    )
}