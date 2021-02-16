import { MDBCard, MDBCardTitle, MDBBtn, MDBCardGroup, MDBCardImage, MDBCardText, MDBCardBody, MDBInput, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Smallproudct from "../smallproudct";
import CheckboxLabels from "../checkbox";
import React, { useState } from "react";
import { DropdownButton, Dropdown, ButtonGroup } from "react-bootstrap";



function AllProudcts(props) {

    const myproudcts = [
        {
            img: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxJzmyeQY9B_fMKc-o-cMx3nHsr3nZC4CDQQcjRp0PagShGIgIrHBC3YWq04gXkdBdRXndTgZI&usqp=CAc',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMo8SnQkV9kMO7BLEAIJLcr_mv7-b-3GxPIOW31Y-_uwjssvoDxp6R77Q7IaIR5sDo3GrAGXAl&usqp=CAc',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxl4WyIOPoghPfEaqv5KJIB7EzzodtTLx1-CWb3zJq529FKecT80bqOYCPB4Y&usqp=CAc',
                'https://d3ajt0yv1dh774.cloudfront.net/uploads/2020/09/men-LACOSTE-Sport-Hooded__SH1551423-300x300.jpg'],
            name: 'proudct_name',
            price: "100",
            star: "2.5",
            text: "lorem lorem lorem lorem lorem"
        },
        {
            img: ['https://d3ajt0yv1dh774.cloudfront.net/uploads/2020/09/men-LACOSTE-Sport-Hooded__SH1551423-300x300.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMo8SnQkV9kMO7BLEAIJLcr_mv7-b-3GxPIOW31Y-_uwjssvoDxp6R77Q7IaIR5sDo3GrAGXAl&usqp=CAc',
                'https://d3ajt0yv1dh774.cloudfront.net/uploads/2020/09/men-LACOSTE-Sport-Hooded__SH1551423-300x300.jpg'],
            name: 'proudct_name2',
            price: "150",
            star: "2.5",
            text: "lorem lorem lorem lorem lorem"
        },
        {
            img: ['https://d3ajt0yv1dh774.cloudfront.net/uploads/2020/09/men-LACOSTE-Sport-Hooded__SH1551423-300x300.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMo8SnQkV9kMO7BLEAIJLcr_mv7-b-3GxPIOW31Y-_uwjssvoDxp6R77Q7IaIR5sDo3GrAGXAl&usqp=CAc',
                'https://d3ajt0yv1dh774.cloudfront.net/uploads/2020/09/men-LACOSTE-Sport-Hooded__SH1551423-300x300.jpg'],
            name: 'proudct_name2',
            price: "140",
            star: "2.5",
            text: "lorem lorem lorem lorem lorem"
        },
        {
            img: ['https://d3ajt0yv1dh774.cloudfront.net/uploads/2020/09/men-LACOSTE-Sport-Hooded__SH1551423-300x300.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMo8SnQkV9kMO7BLEAIJLcr_mv7-b-3GxPIOW31Y-_uwjssvoDxp6R77Q7IaIR5sDo3GrAGXAl&usqp=CAc',
                'https://d3ajt0yv1dh774.cloudfront.net/uploads/2020/09/men-LACOSTE-Sport-Hooded__SH1551423-300x300.jpg'],
            name: 'proudct_name2',
            price: "120",
            star: "2.5",
            text: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
        },
        {
            img: ['https://d3ajt0yv1dh774.cloudfront.net/uploads/2020/09/men-LACOSTE-Sport-Hooded__SH1551423-300x300.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMo8SnQkV9kMO7BLEAIJLcr_mv7-b-3GxPIOW31Y-_uwjssvoDxp6R77Q7IaIR5sDo3GrAGXAl&usqp=CAc',
                'https://d3ajt0yv1dh774.cloudfront.net/uploads/2020/09/men-LACOSTE-Sport-Hooded__SH1551423-300x300.jpg'],
            name: 'proudct_name2',
            price: "170",
            star: "2.5",
            text: "lorem lorem lorem lorem lorem"
        },
        {
            img: ['https://d3ajt0yv1dh774.cloudfront.net/uploads/2020/09/men-LACOSTE-Sport-Hooded__SH1551423-300x300.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMo8SnQkV9kMO7BLEAIJLcr_mv7-b-3GxPIOW31Y-_uwjssvoDxp6R77Q7IaIR5sDo3GrAGXAl&usqp=CAc',
                'https://d3ajt0yv1dh774.cloudfront.net/uploads/2020/09/men-LACOSTE-Sport-Hooded__SH1551423-300x300.jpg'],
            name: 'proudct_name2',
            price: "10",
            star: "2.5",
            text: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
        },
        {
            img: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMo8SnQkV9kMO7BLEAIJLcr_mv7-b-3GxPIOW31Y-_uwjssvoDxp6R77Q7IaIR5sDo3GrAGXAl&usqp=CAc',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMo8SnQkV9kMO7BLEAIJLcr_mv7-b-3GxPIOW31Y-_uwjssvoDxp6R77Q7IaIR5sDo3GrAGXAl&usqp=CAc',
                'https://d3ajt0yv1dh774.cloudfront.net/uploads/2020/09/men-LACOSTE-Sport-Hooded__SH1551423-300x300.jpg'],
            name: 'proudct_name3',
            price: "170",
            star: "2.5",
            text: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
        }
    ];
    
    const my4proudcts = [
        {
            img: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxJzmyeQY9B_fMKc-o-cMx3nHsr3nZC4CDQQcjRp0PagShGIgIrHBC3YWq04gXkdBdRXndTgZI&usqp=CAc',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMo8SnQkV9kMO7BLEAIJLcr_mv7-b-3GxPIOW31Y-_uwjssvoDxp6R77Q7IaIR5sDo3GrAGXAl&usqp=CAc',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxl4WyIOPoghPfEaqv5KJIB7EzzodtTLx1-CWb3zJq529FKecT80bqOYCPB4Y&usqp=CAc',
                'https://d3ajt0yv1dh774.cloudfront.net/uploads/2020/09/men-LACOSTE-Sport-Hooded__SH1551423-300x300.jpg'],
            name: 'proudct_name',
            price: "100",
            star: "2.5",
            text: "lorem lorem lorem lorem lorem"
        },
        {
            img: ['https://d3ajt0yv1dh774.cloudfront.net/uploads/2020/09/men-LACOSTE-Sport-Hooded__SH1551423-300x300.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMo8SnQkV9kMO7BLEAIJLcr_mv7-b-3GxPIOW31Y-_uwjssvoDxp6R77Q7IaIR5sDo3GrAGXAl&usqp=CAc',
                'https://d3ajt0yv1dh774.cloudfront.net/uploads/2020/09/men-LACOSTE-Sport-Hooded__SH1551423-300x300.jpg'],
            name: 'proudct_name2',
            price: "150",
            star: "2.5",
            text: "lorem lorem lorem lorem lorem"
        },
        {
            img: ['https://d3ajt0yv1dh774.cloudfront.net/uploads/2020/09/men-LACOSTE-Sport-Hooded__SH1551423-300x300.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMo8SnQkV9kMO7BLEAIJLcr_mv7-b-3GxPIOW31Y-_uwjssvoDxp6R77Q7IaIR5sDo3GrAGXAl&usqp=CAc',
                'https://d3ajt0yv1dh774.cloudfront.net/uploads/2020/09/men-LACOSTE-Sport-Hooded__SH1551423-300x300.jpg'],
            name: 'proudct_name2',
            price: "150",
            star: "2.5",
            text: "lorem lorem lorem lorem lorem"
        },
        {
            img: ['https://d3ajt0yv1dh774.cloudfront.net/uploads/2020/09/men-LACOSTE-Sport-Hooded__SH1551423-300x300.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMo8SnQkV9kMO7BLEAIJLcr_mv7-b-3GxPIOW31Y-_uwjssvoDxp6R77Q7IaIR5sDo3GrAGXAl&usqp=CAc',
                'https://d3ajt0yv1dh774.cloudfront.net/uploads/2020/09/men-LACOSTE-Sport-Hooded__SH1551423-300x300.jpg'],
            name: 'proudct_name2',
            price: "150",
            star: "2.5",
            text: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
        }]
    
    const filters = [
        't-shirt', 'pants', 'Shoes', 'Hats'
    ]


    const items = [];
    // props.proudcts
    myproudcts.map((proudct, index) => {
        items.push((<MDBCol key={index} md={4} >
            <MDBCard>
                <MDBCardImage src={proudct.img[0]} alt="MDBCard image cap" top hover
                    overlay="dark-slight" />
                <MDBCardBody style={{
                    backgroundColor: '#2E2E2E',
                    color: '#ff4444'
                }}>
                    <MDBCardTitle tag="h5" >{proudct.name}</MDBCardTitle>
                    <hr className='hr-light' />
                    <MDBCardText>
                        price: {proudct.price}$
                    </MDBCardText>
                    <MDBCardText> </MDBCardText>
                    <MDBBtn color="danger" size="md">Go</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>))

    })

    const filterArray = [];
    // props.filters
    filters.map((item, index) => {
        filterArray.push(<CheckboxLabels key={index} text={item} />)
    })
    function rowOfProdcts(array1) {
        return (
            <MDBRow>
                <MDBCol md={1} ></MDBCol>
                <MDBCol>
                    <MDBCardGroup>
                        {/* {items} */}
                       {array1.map((element, index) => {
                    <Smallproudct product={element} key={index} />
                       }) } 
                    </MDBCardGroup>
                </MDBCol>


            </MDBRow>
        )
    }
    let [allItemsShow,showMap]= useState(myproudcts);
    function lowToHigh() {
        let arrayToShow = allItemsShow.sort((item1,item2)=>{
            return item2.price-item1.price;
        })
        console.log(arrayToShow);
        showMap(arrayToShow)
    }

    return (
        <div className='allproudcts'>
            <MDBCard wide cascade style={{ position: "fixed" }} >
                <h4>  Show only  </h4>
                {filterArray}
            </MDBCard>
            <h1>All products </h1>
            <MDBContainer>
                <MDBRow>
                    <MDBCol size='9'></MDBCol>
                    <MDBCol size='1'>
                    <DropdownButton as={ButtonGroup} title="Sort by" variant="outline-danger" id="bg-nested-dropdown">
                        <Dropdown.Item onClick={lowToHigh} eventKey="1">Low to high</Dropdown.Item>
                        <Dropdown.Item eventKey="2">High to low</Dropdown.Item>
                        <Dropdown.Item eventKey="2">New item</Dropdown.Item>
                    </DropdownButton>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <MDBContainer  >
                {/* <h4>Best sellers</h4>
                <MDBCol xs={1}></MDBCol>
                <MDBCol>
                    {rowOfProdcts(my4proudcts)}
                </MDBCol>
                <MDBCol xs={1}></MDBCol>
                <br />
                <h4>sale</h4>
                {rowOfProdcts(my4proudcts)}
                <br />
                <h4>More</h4> */}
                {rowOfProdcts(allItemsShow)}
            </MDBContainer>
            <br />
        </div>
    );
}

export default AllProudcts;