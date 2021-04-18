import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {Link,useHistory} from 'react-router-dom';
import React, { Fragment, useEffect } from "react";
import {sendMail} from '../../api/products'
import { useContext } from 'react';
import { CartContext } from '../context/cart-context'
import {checkToken} from '../../api/products'
function ContactUs(){
    const { register, handleSubmit, watch, errors } = useForm();
    const [cart, updateCart] = useContext(CartContext)
    const onSubmit = async (data)=>{
      const answer={}
      try{
         answer = await sendMail('email',data,cart.token)
        console.log(".....");
      }
      catch(err){
        alert("Opss!!!\nNeed login")
        console.log(err);
      }
        
        
    }
    let history = useHistory();
    useEffect(()=>{
      window.scrollTo(0, 0)
  //     const answer = checkToken('users',{}, cart.token )
  //     console.log(answer);
  //     console.log(Object.keys(answer));
  //     if (answer.status == 400) {
  //       alert('error: need login')
  //       history.push(`/login`);
  //       return
  //   } 
  //   if (answer.status == 200) {
  //     return
  // } 
    },[])
    

    return (
        <div className='contactus'>
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
                  <h1>Contact us</h1>
                  <p>Only online users can contact us by email</p>
                  <Form.Group>
                    <Form.Label >Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="to" ref={register({ required: true })}/>
                    {errors.to && <span>This field is required</span>}
                    <Form.Text style={{ color: "black" }}>
                      We'll never share your email with anyone else.
              </Form.Text>

                  </Form.Group>
                  <Form.Group >
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="Subject" name="subjectFromUser" ref={register({ required: true })}  />
                    {errors.subjectFromUser && <span>This field is required</span>}
                    <Form.Text style={{ color: "black" }}>
              </Form.Text>
                  </Form.Group>

                  <Form.Group >
                    <Form.Label>Text</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Text area" name="textFromUser" ref={register({ required: true })}  />
                    {errors.textFromUser && <span>This field is required</span>}
                    <Form.Text style={{ color: "black" }}>
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
        </div>
    )
}

export default ContactUs