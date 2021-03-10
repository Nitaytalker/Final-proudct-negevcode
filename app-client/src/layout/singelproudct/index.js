import { Col, Container, Button, Row, InputGroup, FormControl, Card, Dropdown, DropdownButton,ButtonGroup } from "react-bootstrap";
import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from "mdbreact";
import { GiShoppingCart } from "react-icons/gi";
import Star from "../star/star"
import React, { useState } from "react";
import { useParams } from 'react-router-dom'
import {myproudcts} from "../allproudcts/allArrayProducts";

export default function SingelProudct(props) {
  
    let idPage=useParams().id
    // console.log(useParams().id);
    const oneProduct = myproudcts.filter((e)=>{return e.id==idPage})
    // console.log(oneProduct);
    const gallery = (images) => {
        const mygallery = images.map((pic, index) => {
            let word = "pic";
            return (
                <Card key={ index + 1} border="danger" style={{ width: '30rem' }}>
                    <MDBCarouselItem key={ index + 1} itemId={index + 1}>
                        <MDBView>
                            <img
                                className="d-block w-100"
                                src={pic}
                                alt="First slide"
                            />
                            <MDBMask overlay="black-light" />
                        </MDBView>
                    </MDBCarouselItem>
                </Card>
            )
        }
        )
        console.log(mygallery);
        return mygallery;
    }
    let [size,setSize]=useState("size")
    function Mypic({proudct}) {
        // console.log(props);
        return (
            <div className="infoproudct">
                <Container>
                    <Row>
                        <Col>
                            <div className='pic'>
                                <MDBContainer>
                                    <MDBCarousel
                                        activeItem={1}
                                        length={proudct.img.length}
                                        showControls={true}
                                        showIndicators={true}
                                        className="z-depth-1"
                                    >
                                        <MDBCarouselInner>
                                            {gallery(proudct.img)}
                                        </MDBCarouselInner>

                                    </MDBCarousel>
                                </MDBContainer>
                            </div>
                        </Col>
                        <br />
                        <Col>
                            <div className='allabout'>
                                <br /><br /><br /><br /><br />
                                <div> price: {proudct.price}$ </div>
                                <br />
                                <div>
                                    <DropdownButton
                                        as={ButtonGroup}
                                        key={"Danger"}
                                        id={`dropdown-split-variants-Danger`}
                                        variant={"danger"}
                                        title={size}
                                    >
                                        <Dropdown.Item onClick={()=>setSize("S")} eventKey="1">S</Dropdown.Item>
                                        <Dropdown.Item onClick={()=>setSize("M")} eventKey="2">M</Dropdown.Item>
                                        <Dropdown.Item onClick={()=>setSize("L")} eventKey="3" >L</Dropdown.Item>
                                        <Dropdown.Item onClick={()=>setSize("XL")} eventKey="4">XL</Dropdown.Item>
                                        <Dropdown.Item onClick={()=>setSize("XXL")} eventKey="5">XXL</Dropdown.Item>
                                    </DropdownButton>
                                </div>
                                <br />
                                <div>
                                    <Row className="justify-content-md-center">
                                        <Col lg="5">
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text id="inputGroup-sizing-default">Items</InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <FormControl
                                                    type='number'
                                                    defaultValue={1}
                                                    min={1}
                                                    aria-label="Default"
                                                    aria-describedby="inputGroup-sizing-default"
                                                />
                                            </InputGroup>
                                        </Col>
                                    </Row>
                                </div>
                                <div> <Button variant="danger">Add to cart<GiShoppingCart style={{ fontSize: "25px" }} /></Button></div>
                                <br />
                                <div>  <Star numberOfStar={proudct.star} /> </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        )
    }
    const myname = oneProduct.name
    return (
        <div className='singelproudct'>
            <h1>{myname}</h1>
            <br />
            <Mypic proudct={oneProduct[0]} />
            <br/><br /><br />
            <div> <Button  href='/products'  variant="danger">Back to shop</Button></div>
        </div>
    );
}




 