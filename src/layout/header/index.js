import { Navbar, NavDropdown, FormControl, Button, Form, Nav } from "react-bootstrap";
import React from 'react';
import { GiShoppingCart } from "react-icons/gi";
// import TemporaryDrawer from "./headswipeable";


function Header() {
    
    
    return (
        <div  className='header'>
            <Navbar fixed="top" bg="dark" variant="dark"  expand="lg">
                <Navbar.Brand href="home" >Online-Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="mr-auto" >
                        <Nav.Link href="home" style={{color:'#d9534f'}} >Home</Nav.Link>
                        <Nav.Link href="products" style={{color:'#d9534f'}} >All products</Nav.Link>
                        <Nav.Link href="login" style={{color:'#d9534f'}}>login</Nav.Link>
                        <Nav.Link href="shoppingcart" style={{color:'#d9534f'}}>  Shopping cart <GiShoppingCart style={{fontSize:"25px"}} /></Nav.Link>
                        <Nav.Link href="about" style={{color:'#d9534f'}}>  about </Nav.Link>
                        <Nav.Link href="blog" style={{color:'#d9534f'}}>  blog </Nav.Link>
                        <Nav.Link href="singelproduct" style={{color:'#d9534f'}}>  singelproduct </Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-danger">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <br/><br/><br/>
            
        </div>
    )
}

export default Header;