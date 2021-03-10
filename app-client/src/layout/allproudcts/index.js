import { MDBCardGroup, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Smallproudct from "../smallproudct";
import CheckboxLabels from "../checkbox";
import React, { useEffect, useState } from "react";
import { DropdownButton, Dropdown, ButtonGroup } from "react-bootstrap";
// import PaginationControlled  from "../myPagination";
import { makeStyles, Typography } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import "./index.css";
import { myproudcts } from "./allArrayProducts";
import { useParams } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

function AllProudcts(props) {
    let categorypage=useParams().category
    // console.log(categorypage);
    useEffect(()=>{
        
        if(categorypage){
            filterBy(categorypage)
        }
    },[])
    const filters = [
        't-shirt', 'pants', 'Shoes', 'Hats'
    ]
    const classes = useStyles();
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
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
            <MDBRow>
                <MDBCol md={1} ></MDBCol>
                <MDBCol>
                    <MDBCardGroup>
                        {/* {items} */}
                        {whatToShow}
                    </MDBCardGroup>
                </MDBCol>
            </MDBRow>
        )
    }
    let [allItemsShow, showMap] = useState(myproudcts);

    //tofixed need fix up
    let numberToSet = (allItemsShow.length / 8).toFixed(0);
    if (allItemsShow.length % 8 < 4) {
        numberToSet++;
    }

    let [numberOfPages, newpages] = useState(numberToSet); //when add filter need use it
    useEffect(()=>{
        let newSetNumber = (allItemsShow.length / 8).toFixed(0);
        console.log("effect");
        if (allItemsShow.length % 8 < 4) {
            newSetNumber++;
        }
        newpages(newSetNumber)
    },[allItemsShow.length])
   
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
        let arrayToShow = myproudcts.filter((item) => 
            item.category == tofilter
        )
        afterSort(arrayToShow)
        
    }
    return (
        <div className='allproudcts'>
            <h1>All products </h1>
            <MDBContainer  >
                <MDBRow  >
                    <MDBCol size='2'/>
                    <MDBCol size='1' >
                    <DropdownButton as={ButtonGroup} title="Category" variant="outline-danger" id="bg-nested-dropdown">
                            <Dropdown.Item onClick={() => { filterBy("t-shirt") }} eventKey="1">t-shirt</Dropdown.Item>
                            <Dropdown.Item onClick={() => { filterBy("pants") }} eventKey="2">pants</Dropdown.Item>
                            <Dropdown.Item onClick={() => { filterBy("shoes") }} eventKey="3">Shoes</Dropdown.Item>
                            <Dropdown.Item onClick={() => { filterBy("jacket") }} eventKey="4">jacket</Dropdown.Item>
                        </DropdownButton>
                    </MDBCol>
                    <MDBCol size='6'></MDBCol>
                    <MDBCol size='1'>
                        <DropdownButton as={ButtonGroup} title="Sort by" variant="outline-danger" id="bg-nested-dropdown">
                            <Dropdown.Item onClick={() => { sortBy(1) }} eventKey="1">Low to high</Dropdown.Item>
                            <Dropdown.Item onClick={() => { sortBy(2) }} eventKey="2">High to low</Dropdown.Item>
                            <Dropdown.Item eventKey="3">New item</Dropdown.Item>
                            <Dropdown.Item onClick={() => { sortBy(3) }} eventKey="4">By rating</Dropdown.Item>
                        </DropdownButton>
                    </MDBCol>
                </MDBRow>
                {rowOfProdcts(allItemsShow)}
                <br />
                <MDBRow>
                    <MDBCol></MDBCol>
                    <MDBCol size={10}><PaginationControlled pages={numberOfPages} />  </MDBCol>
                    <MDBCol></MDBCol>
                </MDBRow>

            </MDBContainer>
            <br />
        </div>
    );
}

export default AllProudcts;