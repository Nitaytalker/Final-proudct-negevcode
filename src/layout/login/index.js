import { MDBBtn } from "mdbreact";
import React, { Fragment } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import FormPage from "../card/formPage";

function Login() {
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
                <Form style={{ color: "black" }}>
                  <h1>Login</h1>
                  <Form.Group>
                    <Form.Label >Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text style={{ color: "black" }}>
                      We'll never share your email with anyone else.
              </Form.Text>

                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Fragment>
                    <MDBBtn rounded color="danger" type="submit">Submit</MDBBtn>
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