import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon, MDBContainer } from 'mdbreact';
import {useEffect} from 'react'

const aboutText = {
    title: "Online shop about page",
    smalltitle: "Photography",
    image: "https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg",
    text: "Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam."

}

function About(props) {
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])
    const mycardabout = (<MDBRow>
        <MDBCol></MDBCol>
        <MDBCol style={{ maxWidth: "40rem" }}>
            <MDBCard reverse>
                <MDBCardImage cascade style={{ height: '20rem' }} src={aboutText.image} />
                <MDBCardBody cascade className="text-center">
                    <MDBCardTitle>{aboutText.title}</MDBCardTitle>
                    <h5 className="indigo-text"><strong>{aboutText.smalltitle}</strong></h5>
                    <MDBCardText>{aboutText.text}</MDBCardText>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
        <MDBCol></MDBCol>
    </MDBRow>);

    return (<div className="about">
        <h1>online-shop</h1>
             {mycardabout}
    </div>)
}







export default About;