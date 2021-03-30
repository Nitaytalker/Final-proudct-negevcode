import React, { Fragment } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {Link} from 'react-router-dom';
import {useEffect} from 'react'
import { loginShop } from '../../api/products'

function Login() {
  useEffect(()=>{
    window.scrollTo(0, 0)
},[])
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = async data => {
    // console.log(data)
    const answer = await loginShop('users',data)
    console.log(answer);
  };
  // console.log(watch("email"));
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
                <Form onSubmit={handleSubmit(onSubmit)}  style={{ color: "black" }}>
                  <h1>Login</h1>
                  <Form.Group>
                    <Form.Label >Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" ref={register({ required: true })}/>
                    {errors.email && <span>This field is required</span>}
                    <Form.Text style={{ color: "black" }}>
                      We'll never share your email with anyone else.
              </Form.Text>

                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="emailPassword" ref={register({ required: true,minLength:4 })}  />
                    {errors.emailPassword && <span>This field is required</span>}
                    <Form.Text style={{ color: "black" }}>
                    <Link to="/signup">New account? Sign up now</Link>
              </Form.Text>
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



export default Login;