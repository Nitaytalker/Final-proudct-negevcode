import { Col, Container, Button, Row, InputGroup, FormControl, Card, Dropdown, DropdownButton, ButtonGroup,Form } from "react-bootstrap";
import { BsStarFill, BsStar, BsStarHalf, BsArrowRightShort } from "react-icons/bs";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { GiShoppingCart } from "react-icons/gi";
import Star from "../star/star"
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
// import {myproudcts} from "../allproudcts/allArrayProducts";
import { getById, getByCategory } from '../../api/products'
import MySpinner from "../spinner"
import './singelProduct.css'
import Smallproudct from '../smallproudct'
import { Link,useHistory } from 'react-router-dom';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import IconButton from '@material-ui/core/IconButton';
import { useContext } from 'react';
import { CartContext } from '../context/cart-context'
import { useForm } from "react-hook-form";
// import {KeyboardArrowLeftIcon,KeyboardArrowRightIcon} from '@material-ui/icons'

export default function SingelProudct() {
    const devUrl = "http://localhost:3002";
    const [loadingState, setLoadingState] = useState(true)
    const [oneProduct, setProduct] = useState({})
    const [picShow, setPicShow] = useState(1)
    const [alsoLike, setAlsoLike] = useState([])
    const [idPage, setIdPage] = useState(useParams().id)
    const [forSlice1, setForSlice1] = useState(0)
    const { id }= useParams()

   
    useEffect(() => {
        async function fetchMyAPI() {
            window.scrollTo(0, 0)
            const data = await getById('products', idPage);
            setProduct(data.data[0])
            setLoadingState(false)
            const willLike = await getByCategory('products', data.data[0].category)
            setAlsoLike([...willLike.data])
            setPicShow(1)
            setForSlice1(0)
        }
        fetchMyAPI()
    }, [idPage])
    let history = useHistory();
    useEffect(()=>{
        setIdPage(id)
    },[id])//work bun not good

    function handleClick() {
       history.goBack()
    }
    const [cart, updateCart] = useContext(CartContext)
    const updateCartSingelProd = (product, numberOfItem, size) => {
        updateCart({
            ...cart,
            cart: {
                ...cart.cart,
                numberOfItems: cart.cart.numberOfItems + 1,
                totalPrice: cart.cart.totalPrice + product.price * numberOfItem,
                productsForBuy: [
                    ...cart.cart.productsForBuy,
                    {
                        product: product,
                        productSize: size,
                        productItemsForBuy: numberOfItem,
                    }
                ]
            }
        })
    }
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => addCart(data.itemsForBuy);


    const smallImg = (imgArray) => {
        const answer = imgArray.map((pic, index) => {
            return (
                <Row key={index}>
                    <img onClick={() => {
                        console.log(index + 1);
                        setPicShow(index + 1)
                    }} style={{ height: "8rem" }} src={`${devUrl}/images/${pic}`}></img>
                </Row>
            )
        })
        return answer
    }

    const likeImg = (images) => {


        const answer = images.filter((e) => e.id != idPage).slice(forSlice1, forSlice1 + 4).map((img, index) => {
            return (
                <Smallproudct key={index} product={img} setIdPage={setIdPage} sizeCol={1} size={13} />
            )
        })
        return answer
    }

    const addCart = (itemsToBuy) => {
        if (size == 'size') return alert("Please select a size ")
        updateCartSingelProd(oneProduct, itemsToBuy, size)
    }

    // const gallery = (images) => {
    //     const mygallery = images.map((pic, index) => {
    //         return (
    //             <Card key={index} border="danger" style={{ width: '30rem' }}>
    //                 <MDBCarouselItem itemId={index + 1}>
    //                     <MDBView>
    //                         <img
    //                             className="d-block w-100"
    //                             src={`${devUrl}/images/${pic}`}
    //                             alt="First slide"
    //                         />
    //                         <MDBMask overlay="black-light" />
    //                     </MDBView>
    //                 </MDBCarouselItem>
    //             </Card>
    //         )
    //     }
    //     )
    //     // console.log(mygallery);
    //     return (
    //         <MDBContainer>
    //             <h1>{picShow}</h1>
    //             <MDBCarousel
    //                 activeItem={picShow}
    //                 length={images.length}
    //                 showControls={true}
    //                 showIndicators={true}
    //                 className="z-depth-1"
    //             >
    //                     { images.map((pic, index) => {
    //         return (
    //             <Card key={index} border="danger" style={{ width: '30rem' }}>
    //                 <MDBCarouselItem itemId={index + 1}>
    //                     <MDBView>
    //                         <img
    //                             className="d-block w-100"
    //                             src={`${devUrl}/images/${pic}`}
    //                             alt="First slide"
    //                         />
    //                         <MDBMask overlay="black-light" />
    //                     </MDBView>
    //                 </MDBCarouselItem>
    //             </Card>
    //         )})
    //     }

    //             </MDBCarousel>
    //         </MDBContainer >
    //     );
    // }
    let [size, setSize] = useState("size")
    // console.log(Object.entries(oneProduct.sizeInStock)  );
    return (
        <div className='singelproudct'>

            {loadingState ?
                <div style={{ display: loadingState ? 'block' : 'none' }}>
                    <MySpinner />
                </div> :
                <div style={{ display: loadingState ? 'none' : 'block' }}>
                    <h1>{oneProduct.name}</h1>
                    <br />
                    <Container>
                        <Row>
                            <Col xs={1}>
                                {smallImg(oneProduct.img)}
                            </Col>
                            <Col>
                                <div className='pic'>

                                    {/* <h1>{picShow}</h1> */}
                                    <MDBCarousel

                                        length={oneProduct.img.length}
                                        showControls={false}
                                        // activeItem={false}
                                        showIndicators={false}
                                        interval={false}
                                        className="z-depth-1"
                                    >
                                        <MDBCarouselInner >

                                            {oneProduct.img.map((pic, index) => {
                                                return (
                                                    <Card key={index} border="danger" style={{ width: '35rem' }}>
                                                        <MDBCarouselItem className={index + 1 == picShow ? 'active' : null} >
                                                            <MDBView>
                                                                <Container>
                                                                    <Row className="align-items-center">
                                                                        <Col style={{ zIndex: '1' }} lg={1}><IconButton onClick={() => picShow > 1 ? setPicShow(picShow - 1) : setPicShow(oneProduct.img.length)}><KeyboardArrowLeftIcon fontSize="small" /></IconButton></Col>
                                                                        <Col lg={10}><img
                                                                            className="d-block w-100"
                                                                            src={`${devUrl}/images/${pic}`}
                                                                            alt="First slide"
                                                                        />
                                                                            <MDBMask overlay="black-light" /></Col>
                                                                        <Col style={{ zIndex: '1' }} lg={1}><IconButton onClick={() => picShow == oneProduct.img.length ? setPicShow(1) : setPicShow(picShow + 1)}><KeyboardArrowRightIcon fontSize="small" /></IconButton></Col>
                                                                    </Row>
                                                                </Container>
                                                            </MDBView>
                                                        </MDBCarouselItem>
                                                    </Card>
                                                )
                                            })
                                            }
                                        </MDBCarouselInner>
                                    </MDBCarousel>


                                    {/* {gallery(oneProduct.img)} */}

                                </div>
                            </Col>
                            <br />
                            <Col>
                                <div className='allabout'>
                                    <br /><br /><br /><br /><br />
                                    <div> price: {oneProduct.price}$ </div>
                                    <br />
                                    <div>
                                        <DropdownButton
                                            as={ButtonGroup}
                                            key={"Danger"}
                                            id={`dropdown-split-variants-Danger`}
                                            variant={"danger"}
                                            title={size}
                                        >
                                            {oneProduct.sizeInStock ? Object.entries(oneProduct.sizeInStock).map((item, index) => {
                                                return <Dropdown.Item disabled={!item[1]} onClick={() => setSize(item[0])} eventKey={index + 1}>{item[1] ? item[0] : <del>{item[0]}</del> }</Dropdown.Item>
                                            }) : <></>}
                                        </DropdownButton>
                                    </div>
                                    <br />
                                    <Form onSubmit={handleSubmit(onSubmit)}>
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
                                                            name='itemsForBuy'
                                                            ref={register({ required: true })}
                                                            aria-label="Default"
                                                            aria-describedby="inputGroup-sizing-default"
                                                        />
                                                        {errors.itemsForBuy && <span>This field is required</span>}
                                                    </InputGroup>
                                                
                                            </Col>
                                        </Row>
                                    </div>
                                    <div> <Button  type="submit" variant="danger">Add to cart<GiShoppingCart style={{ fontSize: "25px" }} /></Button></div>
                                    <br />
                                    </Form>
                                    <div>  <Star numberOfStar={oneProduct.star} /> </div>
                                </div>
                            </Col>
                        </Row>
                        <br /><br />
                        <Row className="p-line">
                            <Col lg='3'>
                                YOU MIGHT ALSO LIKE: {alsoLike.length - 1} items
                            </Col>
                            <Col lg='7'></Col>
                            <Col lg='2'>
                                <Link to={`/products/${oneProduct.category}`}>see more {oneProduct.category} >></Link>
                            </Col>
                        </Row>

                        <Row className="justify-content-md-center align-items-center">
                            <Col> <IconButton disabled={!forSlice1} onClick={() => setForSlice1(forSlice1 - 4)}><KeyboardArrowLeftIcon fontSize="large" /></IconButton></Col>

                            {alsoLike ? likeImg(alsoLike) : <MySpinner />}

                            <Col><IconButton disabled={alsoLike.length - 1 <= 4 || forSlice1 + 4 > alsoLike.length} onClick={() => setForSlice1(forSlice1 + 4)}><KeyboardArrowRightIcon fontSize="large" /></IconButton></Col>
                        </Row>
                    </Container>
                    <br /><br /><br /> 
                    <div> <Button onClick={() => handleClick()} variant="danger">Back</Button></div>
                </div>
            }

        </div>
    );
}




