import { MDBCard, MDBCardTitle, MDBBtn, MDBCardGroup, MDBCardImage, MDBCardText, MDBCardBody, MDBIcon, MDBContainer, MDBRow, MDBCol } from "mdbreact";

class LightboxPage extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        photoIndex: 0,
        isOpen: false
      };
    }
}

function Smallproudct(props) {
    const items = [];
    const { photoIndex, isOpen } = this.state;
    props.proudcts.map((proudct, index) => {
        items.push((
        < MDBCol key={index} md={4} >
            <MDBCard>
                
                <MDBCardImage src={proudct.img[0]} alt="MDBCard image cap" top hover
                    overlay="dark-slight" onClick={() =>
                        this.setState({ photoIndex: 0, isOpen: true })
                      }/>
                <MDBCardBody style={{
                    backgroundColor: '#2E2E2E',
                    color: '#ff4444'
                }}>
                    <MDBCardTitle tag="h5" >{proudct.name}</MDBCardTitle>
                    <hr className='hr-light' />
                    <MDBCardText>
                        price: {proudct.price}$
                    </MDBCardText>
                    <MDBCardText> </MDBCardText>
                    <MDBBtn color="danger" size="md">Go</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </ MDBCol>))

    })
    return (items);
}

export default Smallproudct;