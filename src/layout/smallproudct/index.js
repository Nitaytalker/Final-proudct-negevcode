import { MDBCard, MDBCardTitle, MDBBtn, MDBCardImage, MDBCardText, MDBCardBody, MDBCol } from "mdbreact";
import Star from "../star/star"
import {Link,NavLink} from 'react-router-dom';

function Smallproudct(props) {
    // console.log(props.product);
        return (
            <MDBCol   style={{ maxWidth: "14rem" }} >
                {/* <NavLink href="#x"> */}
            <Link to={`products/${props.product.id}`} style={{ textDecoration: 'none' }}>
            <MDBCard className="p-2 w-100 ">
                <MDBCardImage  src={props.product.img[0]} alt="MDBCard image cap" top hover
                    overlay="dark-slight" />
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
            
                    <MDBBtn href={`products/${props.product.id}`} color="danger" size="md">Go</MDBBtn>
                </MDBCardBody>
            </MDBCard>
            </Link>
            {/* </NavLink> */}
        </MDBCol>

    )
            }


export default Smallproudct;