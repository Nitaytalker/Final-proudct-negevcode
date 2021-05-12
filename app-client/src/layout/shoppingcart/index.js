import { Container, Row, Col, Image, Button, Card } from "react-bootstrap"
import "./cart.css"
import { Link } from 'react-router-dom'
import { MdDeleteForever } from "react-icons/md"
import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/cart-context'
import IconButton from '@material-ui/core/IconButton';
import YourComponent from './paypal';

function ShoppingCart({ removeFromCart }) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    const devUrl = "http://localhost:3002";
    const [cart, updateCart] = useContext(CartContext)


    
    let itemlist = cart.cart.productsForBuy.map((item, index) => {
        return (
            <Row className="border" key={index}>
                <Container>

                    <Row>
                        <Col md={{ span: 11, offset: 1 }}>
                            <h3>{item.product.name}</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <Image style={{ maxWidth: '10rem', margin: "10px" }} src={`${devUrl}/images/${item.product.img[0]}`} />
                        </Col>
                        <Col md={1}></Col>
                        <Col md={3}>
                            <h6>Product price: {item.product.price}$</h6>
                            <h6>Quantity of the product: {item.productItemsForBuy}</h6>
                            <h6>Size: {item.productSize}</h6>
                            <h6>Total: {item.product.price * item.productItemsForBuy}$</h6>
                        </Col>
                        <Col md={2}>
                        </Col>
                        <Col md={2}>
                            <IconButton><MdDeleteForever onClick={() => removeFromCart(item, index)} style={{ fontSize: "30px" }} /></IconButton>
                        </Col>
                    </Row>
                </Container>
            </Row>
        )
    })
    return (
        <div className='shoppingcart'>
            <h1>ShoppingCart</h1>
            <Container style={{ backgroundColor: '#847774' }}>
                <Row>
                    <Col xs={7}>
                        {cart.cart.productsForBuy.length ? itemlist :
                            <div>
                                <Row>
                                    <h2>your cart empty ...</h2>
                                </Row>
                                <Row>
                                    <Button variant="outline-danger" size="lg"><Link to={`/products`}>
                                        go shop now!!!</Link></Button>
                                </Row>
                            </div>

                        }
                    </Col>
                    <Col style={{ backgroundColor: '#ECEDD5' }}>
                        <Col className="checkout">
                            <h2>Total</h2>
                            <h3>Sub-total :{cart.cart.totalPrice} $</h3>
                            <Button variant="danger">Checkout</Button>
                            {/* <YourComponent/> */}
                        </Col>
                    </Col>
                </Row>
            </Container>
            <br /><br /><br /><br /><br />

        </div>
    )
}

export default ShoppingCart;