import { MDBCard, MDBCardTitle, MDBBtn, MDBCardGroup, MDBCardImage, MDBCardText, MDBCardBody, MDBIcon, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Star from "../star/star"


function Smallproudct(props) {
    // console.log(props.product);
        return (
            <MDBCol  style={{ maxWidth: "14rem" }} >
            <MDBCard className="p-2 w-100 ">
                <MDBCardImage src={props.product.img[0]} alt="MDBCard image cap" top hover
                    overlay="dark-slight"  />
                <MDBCardBody style={{
                    backgroundColor: '#2E2E2E',
                    color: '#ff4444',
                    padding:'15px'
                }}>
                    <MDBCardTitle tag="h5" style={{margin:'0px'}} >{props.product.name}</MDBCardTitle>
                    <hr className='hr-light' style={{margin:'0px'}} />
                    <MDBCardText style={{margin:'0px'}}>
                        price: {props.product.price}$
                    </MDBCardText>
                    <MDBCardText style={{margin:'0px'}}> <Star numberOfStar={props.product.star}/> </MDBCardText>
                    <MDBBtn   color="danger" size="md">Go</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>

    )
            }


export default Smallproudct;