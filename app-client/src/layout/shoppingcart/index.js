import { Container, Row, Col, Image, Button, Card } from "react-bootstrap"
import "./cart.css"
import { Link } from 'react-router-dom'
import { MdDeleteForever } from "react-icons/md"
import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/cart-context'

function ShoppingCart({ removeFromCart }) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const oneproduct = [{
        img: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxJzmyeQY9B_fMKc-o-cMx3nHsr3nZC4CDQQcjRp0PagShGIgIrHBC3YWq04gXkdBdRXndTgZI&usqp=CAc',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMo8SnQkV9kMO7BLEAIJLcr_mv7-b-3GxPIOW31Y-_uwjssvoDxp6R77Q7IaIR5sDo3GrAGXAl&usqp=CAc',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxl4WyIOPoghPfEaqv5KJIB7EzzodtTLx1-CWb3zJq529FKecT80bqOYCPB4Y&usqp=CAc',
            'https://d3ajt0yv1dh774.cloudfront.net/uploads/2020/09/men-LACOSTE-Sport-Hooded__SH1551423-300x300.jpg'],
        name: 'proudct_name',
        price: 100,
        star: 2.9,
        text: "lorem lorem lorem lorem lorem",
        size: "L",
        itemToBuy: 1,
        id: 34
    },
    {
        img: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxJzmyeQY9B_fMKc-o-cMx3nHsr3nZC4CDQQcjRp0PagShGIgIrHBC3YWq04gXkdBdRXndTgZI&usqp=CAc',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMo8SnQkV9kMO7BLEAIJLcr_mv7-b-3GxPIOW31Y-_uwjssvoDxp6R77Q7IaIR5sDo3GrAGXAl&usqp=CAc',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxl4WyIOPoghPfEaqv5KJIB7EzzodtTLx1-CWb3zJq529FKecT80bqOYCPB4Y&usqp=CAc',
            'https://d3ajt0yv1dh774.cloudfront.net/uploads/2020/09/men-LACOSTE-Sport-Hooded__SH1551423-300x300.jpg'],
        name: 'proudct_name',
        price: 100,
        star: 2.9,
        text: "lorem lorem lorem lorem lorem",
        size: "L",
        itemToBuy: 5,
        id: 344
    },
    {
        img: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxJzmyeQY9B_fMKc-o-cMx3nHsr3nZC4CDQQcjRp0PagShGIgIrHBC3YWq04gXkdBdRXndTgZI&usqp=CAc',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMo8SnQkV9kMO7BLEAIJLcr_mv7-b-3GxPIOW31Y-_uwjssvoDxp6R77Q7IaIR5sDo3GrAGXAl&usqp=CAc',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxl4WyIOPoghPfEaqv5KJIB7EzzodtTLx1-CWb3zJq529FKecT80bqOYCPB4Y&usqp=CAc',
            'https://d3ajt0yv1dh774.cloudfront.net/uploads/2020/09/men-LACOSTE-Sport-Hooded__SH1551423-300x300.jpg'],
        name: 'proudct_name',
        price: 100,
        star: 2.9,
        text: "lorem lorem lorem lorem lorem",
        size: "L",
        itemToBuy: 1,
        id: 3465
    },
    {
        img: ['https://d3ajt0yv1dh774.cloudfront.net/uploads/2020/09/men-LACOSTE-Sport-Hooded__SH1551423-300x300.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMo8SnQkV9kMO7BLEAIJLcr_mv7-b-3GxPIOW31Y-_uwjssvoDxp6R77Q7IaIR5sDo3GrAGXAl&usqp=CAc',
            'https://d3ajt0yv1dh774.cloudfront.net/uploads/2020/09/men-LACOSTE-Sport-Hooded__SH1551423-300x300.jpg'],
        name: 'proudct_name2',
        price: 150,
        star: 2.2,
        text: "lorem lorem lorem lorem lorem",
        size: "XL",
        itemToBuy: 1,
        id: 35
    }, {
        img: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxJzmyeQY9B_fMKc-o-cMx3nHsr3nZC4CDQQcjRp0PagShGIgIrHBC3YWq04gXkdBdRXndTgZI&usqp=CAc',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMo8SnQkV9kMO7BLEAIJLcr_mv7-b-3GxPIOW31Y-_uwjssvoDxp6R77Q7IaIR5sDo3GrAGXAl&usqp=CAc',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxl4WyIOPoghPfEaqv5KJIB7EzzodtTLx1-CWb3zJq529FKecT80bqOYCPB4Y&usqp=CAc',
            'https://d3ajt0yv1dh774.cloudfront.net/uploads/2020/09/men-LACOSTE-Sport-Hooded__SH1551423-300x300.jpg'],
        name: 'proudct_name',
        price: 100,
        star: 2.9,
        text: "lorem lorem lorem lorem lorem",
        size: "l",
        itemToBuy: 3,
        id: 2154
    }]
    const devUrl = "http://localhost:3002";
    const [cart, updateCart] = useContext(CartContext)
    // console.log(cart.cart.productsForBuy);
    let [toBuyProducts, setToBuy] = useState(oneproduct)
    let priceAllFunc = () => {
        let sum = 0;
        for (let item of toBuyProducts) {
            sum += item.price * item.itemToBuy;
        }
        return sum;
    }
    let [totalPrice, setTotalPrice] = useState(priceAllFunc)
    useEffect(() => {
        setTotalPrice(priceAllFunc);
    }, [toBuyProducts])
    function removeItem(id) {
        setToBuy(toBuyProducts.filter(e => e.id != id))
    }
    let itemlist = cart.cart.productsForBuy.map((item, index) => {
        // console.log(item);
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
                        <Col md={3}>
                        </Col>
                        <Col md={1}>
                            <MdDeleteForever onClick={() => removeFromCart(item, index)} style={{ fontSize: "30px" }} />
                        </Col>
                    </Row>
                </Container>
            </Row>
        )
    })
    // console.log(itemlist);
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
                        </Col>
                    </Col>
                </Row>
            </Container>
            <br /><br /><br /><br /><br />

        </div>
    )
}

export default ShoppingCart;