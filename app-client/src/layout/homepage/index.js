import { MDBBtn, MDBRow, MDBContainer, MDBCol, MDBCardGroup } from "mdbreact";
import "./homepage.css";
import Smallproudct from "../smallproudct";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import ButtonBases from "./buttonimg"
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'

function HomePage(props) {
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])
    const myimagebutton = (
        <MDBContainer className="bg" style={{ margin: '' }}>
            <br /><br />
            <h1 style={{ color: "#212121" }}>Online Shop</h1>
            <br /><br /><br /><br />
            <MDBRow>
                <MDBCol></MDBCol>
                <MDBCol>
                    <Link to="/products"><MDBBtn  color="danger" size="md" >Start your buy</MDBBtn>
                </Link></MDBCol>
                <MDBCol></MDBCol>
            </MDBRow>
        </MDBContainer>
    )
    // const [bestSellers,setListBestSellers]=useState(myproudcts)
    
    return (
        <div >
            {myimagebutton}
            {/* {bestSellers} */}
            <ButtonBases />
        </div>
    )

    
}


export default HomePage;