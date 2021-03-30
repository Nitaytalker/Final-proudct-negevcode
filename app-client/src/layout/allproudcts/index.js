import { MDBCardGroup, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Smallproudct from "../smallproudct";
import CheckboxLabels from "../checkbox";
import React, { useEffect, useState } from "react";
import { DropdownButton, Dropdown, ButtonGroup } from "react-bootstrap";
// import PaginationControlled  from "../myPagination";
import { makeStyles, Typography } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import "./index.css";
// import { myproudcts } from "./allArrayProducts";
import { getAll } from '../../api/products'
import { useParams } from 'react-router-dom'
import MySpinner from "../spinner"
import { Container, Row, Col, Image, Button, Card } from "react-bootstrap"

const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

let myproudcts = []

function AllProudcts(props) {
    const [categorypage,setCategorypage] =useState(useParams().category)
    const [loadingState, setLoadingState] = useState(true)
    // console.log(categorypage);
    useEffect(async () => {
        window.scrollTo(0, 0)
        const array = await getAll('products');
        myproudcts = array.data
        showMap([...array.data])
        setLoadingState(false)
        if (categorypage) {
            filterBy(categorypage)
        }
    }, [])
    let x=useParams().category;
    // console.log(x); 
    useEffect(()=>{
        if(x && x!=categorypage){
            setCategorypage(x)
            filterBy(x)
        }else if(!x && categorypage!='all-Product'){
            console.log(x);
            setCategorypage('all-Product')
            filterBy('all-Product')
        }
    })
   
    
    // console.log(loadingState);
    const filters = [
        't-shirt', 'pants', 'Shoes', 'Hats'
    ]
    const classes = useStyles();
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
        window.scrollTo(0, 0)
    };
    function PaginationControlled({ pages }) {
        return (
            <div className={classes.root} style={{ margin: 'auto', width: '50%' }}>
                <Typography >Page: {page}</Typography>
                <Pagination count={pages} page={page} onChange={handleChange} variant="outlined" color="secondary" />
            </div>
        );
    }
    const filterArray = [];
    filters.map((item, index) => {
        filterArray.push(<CheckboxLabels key={index} text={item} />)
    })
    function rowOfProdcts(array1) {
        //1.array1.slice()
        //2.and set in next8
        const shownext8 = []
        for (let i = (page - 1) * 8; i < ((page - 1) * 8) + 8 && i < array1.length; i++) {
            shownext8.push(array1[i])
        }
        // console.log(array1);
        let whatToShow = [];
        shownext8.map((element, index) => {

            whatToShow.push(<Smallproudct product={element} key={index} />)
        });
        // console.log(whatToShow);
        return (
            <Row className='justify-content-center'>
                <Col md={1} ></Col>
                <Col  className="justify-content-md-center">
                    <MDBCardGroup>
                        {/* {items} */}
                        {whatToShow}
                    </MDBCardGroup>
                </Col>
            </Row>
        )
    }
    let [allItemsShow, showMap] = useState([]);
    

    let [numberOfPages, newpages] = useState(Math.ceil((allItemsShow.length / 8))); //when add filter need use it
    useEffect(() => {
        let newSetNumber = Math.ceil((allItemsShow.length / 8))
        // console.log(newSetNumber);
        newpages(newSetNumber)
    }, [allItemsShow.length])

    function afterSort(arrayToShow) {
        setPage(1);
        showMap([...arrayToShow])
        
    }
    function sortBy(toSort) {
        let arrayToShow = allItemsShow.sort((item1, item2) => {
            switch (toSort) {
                case 1:
                    return item1.price - item2.price;
                case 2:
                    return item2.price - item1.price;
                case 3:
                    return item2.star - item1.star;
                default:
                    break;
            }
        })
        afterSort(arrayToShow)
    }
    function filterBy(tofilter) {
        // console.log(allItemsShow);
        if(tofilter==="all-Product")return afterSort(myproudcts)
        let arrayToShow = myproudcts.filter((item) =>{
            if(item.category == tofilter)return true
            if(item.name==tofilter)return true
            return false
        }
            
        )
        afterSort(arrayToShow)

    }
    return (
        <div>
            <Container style={{ display: loadingState ? 'flex' : 'none' }}>
                <Col >
                    <MySpinner />
                </Col>
            </Container>

            <div className='allproudcts' style={{ display: loadingState ? 'none' : 'block' }}>
                <h1>{ categorypage !='all-Product' ? `your search : ${categorypage}`:'All products'} </h1>
                <Container className='align-content-center' >
                    <Row  >
                        <Col lg='2' />
                        <Col lg='1' >
                            <DropdownButton as={ButtonGroup} title="Category" variant="outline-danger" id="bg-nested-dropdown">
                            <Dropdown.Item onClick={() => { filterBy("all-Product") }} eventKey="1">All-Products</Dropdown.Item>
                                <Dropdown.Item onClick={() => { filterBy("t-shirt") }} eventKey="2">t-shirt</Dropdown.Item>
                                <Dropdown.Item onClick={() => { filterBy("pants") }} eventKey="3">pants</Dropdown.Item>
                                <Dropdown.Item onClick={() => { filterBy("shoes") }} eventKey="4">Shoes</Dropdown.Item>
                                <Dropdown.Item onClick={() => { filterBy("jacket") }} eventKey="5">jacket</Dropdown.Item>
                            </DropdownButton>
                        </Col>
                        <Col lg='6'></Col>
                        <Col lg='1'>
                            <DropdownButton as={ButtonGroup} title="Sort by" variant="outline-danger" id="bg-nested-dropdown">
                                <Dropdown.Item onClick={() => { sortBy(1) }} eventKey="1">Low to high</Dropdown.Item>
                                <Dropdown.Item onClick={() => { sortBy(2) }} eventKey="2">High to low</Dropdown.Item>
                                <Dropdown.Item eventKey="3">New item</Dropdown.Item>
                                <Dropdown.Item onClick={() => { sortBy(3) }} eventKey="4">By rating</Dropdown.Item>
                            </DropdownButton>
                        </Col>
                    </Row >
                    {rowOfProdcts(allItemsShow)}
                    <br />
                    <Row>
                        <Col></Col>
                        <Col lg={10}><PaginationControlled pages={numberOfPages} />  </Col>
                        <Col></Col>
                    </Row>

                </Container>
                <br />
            </div></div>
    );
}

export default AllProudcts;