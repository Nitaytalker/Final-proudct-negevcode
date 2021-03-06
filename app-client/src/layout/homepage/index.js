import { MDBBtn, MDBRow, MDBContainer, MDBCol, MDBCardGroup } from "mdbreact";
import "./homepage.css";
import Smallproudct from "../smallproudct";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import ButtonBases from "./buttonimg"
import React, { useState, useEffect } from 'react';

const myproudcts = [
    {
        "img": ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxJzmyeQY9B_fMKc-o-cMx3nHsr3nZC4CDQQcjRp0PagShGIgIrHBC3YWq04gXkdBdRXndTgZI&usqp=CAc',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMo8SnQkV9kMO7BLEAIJLcr_mv7-b-3GxPIOW31Y-_uwjssvoDxp6R77Q7IaIR5sDo3GrAGXAl&usqp=CAc',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxl4WyIOPoghPfEaqv5KJIB7EzzodtTLx1-CWb3zJq529FKecT80bqOYCPB4Y&usqp=CAc',
            'https://d3ajt0yv1dh774.cloudfront.net/uploads/2020/09/men-LACOSTE-Sport-Hooded__SH1551423-300x300.jpg'],
        "name": 'proudct_name',
        "price": "100",
        "star": "2.5",
        "text": "lorem lorem lorem lorem lorem"
    },

    {
        "img": ['https://d3ajt0yv1dh774.cloudfront.net/uploads/2020/09/men-LACOSTE-Sport-Hooded__SH1551423-300x300.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMo8SnQkV9kMO7BLEAIJLcr_mv7-b-3GxPIOW31Y-_uwjssvoDxp6R77Q7IaIR5sDo3GrAGXAl&usqp=CAc',
            'https://d3ajt0yv1dh774.cloudfront.net/uploads/2020/09/men-LACOSTE-Sport-Hooded__SH1551423-300x300.jpg'],
        "name": 'proudct_name2',
        "price": "150",
        "star": "2.5",
        "text": "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
    },
    {
        "img": ['https://d3ajt0yv1dh774.cloudfront.net/uploads/2020/09/men-LACOSTE-Sport-Hooded__SH1551423-300x300.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMo8SnQkV9kMO7BLEAIJLcr_mv7-b-3GxPIOW31Y-_uwjssvoDxp6R77Q7IaIR5sDo3GrAGXAl&usqp=CAc',
            'https://d3ajt0yv1dh774.cloudfront.net/uploads/2020/09/men-LACOSTE-Sport-Hooded__SH1551423-300x300.jpg'],
        "name": 'proudct_name2',
        "price": "150",
        "star": "2.5",
        "text": "lorem lorem lorem lorem lorem"
    }

];

function HomePage(props) {

    const myimagebutton = (
        <MDBContainer className="bg" style={{ margin: '' }}>
            <br /><br />
            <h1 style={{ color: "#212121" }}>Online Shop</h1>
            <br /><br /><br /><br />
            <MDBRow>
                <MDBCol></MDBCol>
                <MDBCol>
                    <MDBBtn href="products" color="danger" size="md" >Start your buy</MDBBtn>
                </MDBCol>
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

    // return (
    //     <div>
    //         {myimagebutton}
    //         <MDBContainer className='homepage'>

    //          <br/>
    //          <h2>popular item</h2>
    //         {top3proudct}
    //         <br/>
    //     </MDBContainer>
    //     </div>

    // )
}


export default HomePage;