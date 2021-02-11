import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon, MDBContainer } from 'mdbreact';

function About(props) {
    const mycardabout = (<MDBRow>
        <MDBCol></MDBCol>
        <MDBCol style={{ maxWidth: "40rem" }}>
            <MDBCard reverse>
                <MDBCardImage cascade style={{ height: '20rem' }} src={props.aboutText.image} />
                <MDBCardBody cascade className="text-center">
                    <MDBCardTitle>{props.aboutText.title}</MDBCardTitle>
                    <h5 className="indigo-text"><strong>{props.aboutText.smalltitle}</strong></h5>
                    <MDBCardText>{props.aboutText.text}</MDBCardText>
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