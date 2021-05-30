import { MDBCard, MDBCardTitle, MDBBtn, MDBCardImage, MDBCardText, MDBCardBody, MDBCol } from "mdbreact";
import Star from "../star/star"
import {Link,NavLink} from 'react-router-dom';
import './smallproduct.css'
function Smallproudct({product,size,sizeCol}) {
    const devUrl = "http://localhost:3002";
        return (
             <MDBCol className='d-flex justify-content-center'  xs={sizeCol ? '2' : null}
              size={sizeCol? null : '12'} sm={sizeCol? null : '6'} md={sizeCol? null : '4'} lg={sizeCol? null : '3'} >
                {/* <NavLink href="#x"> */}
               
            <Link className='center' to={`/products/${product.category}/${product.id}`} 
                 style={{ textDecoration: 'none' }}>
            <MDBCard className="p-2 w-100 center " style={{ margin:'0',maxWidth:  size ? `${size}rem` : "15rem",minWidth:  size ? `${size}rem` : "13rem" }} >
                <MDBCardImage  src={`${devUrl}/images/${product.img[0]}`} alt="MDBCard image cap" top hover
                    overlay="dark-slight" style={{ height: "15rem" }} />
                <MDBCardBody style={{
                    backgroundColor: '#2E2E2E',
                    color: '#ff4444',
                    padding:'15px'
                }}>
                    <MDBCardTitle tag="h5" style={{margin:'0px'}} >{product.name}</MDBCardTitle>
                    <hr className='hr-light' style={{margin:'0px'}} />
                    <MDBCardText style={{margin:'0px'}}>
                        price: {product.price}$
                    </MDBCardText>
                    <MDBCardText style={{margin:'0px'}}> <Star numberOfStar={product.star}/> </MDBCardText>
            
                    <MDBBtn href={`/products/${product.category}/${product.id}`} color="danger" size="md">Go</MDBBtn>
                </MDBCardBody>
            </MDBCard>
            </Link>
            {/* </NavLink> */}
        </MDBCol>

    )
            }


export default Smallproudct;