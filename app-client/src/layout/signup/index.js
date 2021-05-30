import React, { Fragment } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { singUpShop } from '../../api/products'
import { useContext, useState } from 'react';
import { CartContext } from '../context/cart-context'
import './signup.css'

function Signup() {
    const { register, handleSubmit, watch, errors } = useForm();
    const [cart, updateCart] = useContext(CartContext)
    const [existsEmail, setExistsEmail] = useState(false)
    const onSubmit = async toSend => {
        const email = toSend.email;
        try {
            const answer = await singUpShop('users', toSend)
            updateCart({
                ...cart,
                token: answer.data.token,
                key: "clientkey",
                email: email,
                userName: toSend.firstname
            })
            alert('sign up good')
        }
        catch (error) {
            switch (error.response.status) {
                case 409:
                    console.log("409");
                    setExistsEmail(true)
                    break;
                case 500:
                    console.log("500");
                    break;
                default:
                    break;
            }
        }


    };
    const login = (
        <Container>
            <Row>
                <Col></Col>
                <Col md='8' className="rounded-pill block-example border border-danger" alt="500x75" style={{ background: "#616161" }}>
                    <br /><br />
                    <Container>
                        <Row>
                            <Col lg="2"></Col>
                            <Col>
                                <Form onSubmit={handleSubmit(onSubmit)} style={{ color: "black" }}>
                                    <h1>Sign up</h1>
                                    <Link to="/login">Already registered? Log in now</Link>
                                    <Form.Group>
                                        <Form.Label >Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" name="email" ref={register({ required: true })} />
                                        {errors.email && <span className="errorspan">This field is required</span>}
                                        {existsEmail && <span className="errorspan">This email already exists </span>}
                                        <Form.Text style={{ color: "black" }}>
                                            {/* We'll never share your email with anyone else. */}
                                        </Form.Text>

                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label >First Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter first name" name="firstname" ref={register({ required: true })} />
                                        {errors.firstname && <span className="errorspan">This field is required</span>}
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label >Last Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter last name" name="lastname" ref={register({ required: true })} />
                                        {errors.lastname && <span className="errorspan">This field is required</span>}
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" name="emailPassword" ref={register({ required: true })} />
                                        {errors.emailPassword && <span className="errorspan">This field is required</span>}
                                        <Form.Text style={{ color: "black" }}>

                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label >Date of birth:</Form.Label>
                                        <Form.Control type="date" defaultValue="1999-01-01" name="birthdate" ref={register({ required: true })} />
                                        {errors.birthdate && <span className="errorspan">This field is required</span>}
                                    </Form.Group>
                                    <Fragment>
                                        <Button type="submit" variant="danger">Submit</Button>
                                    </Fragment>
                                </Form>
                            </Col>
                            <Col lg="2"></Col>
                        </Row>
                    </Container>
                    <br /><br />
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )

    return (
        <div className='login'>
            <h1>Online shop</h1>
            {login}
            <br />
            {/* <FormPage /> */}

        </div>
    )
}



export default Signup;