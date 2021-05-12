import { Navbar, NavDropdown, FormControl, Button, Form, Nav } from "react-bootstrap";
import React, { useState } from 'react';
import { GiShoppingCart } from "react-icons/gi";
import { useForm } from "react-hook-form";
import { Link,useHistory } from 'react-router-dom';
import './header.css'
// import TemporaryDrawer from "./headswipeable";
import { useContext } from 'react';
import { CartContext } from '../context/cart-context'
import CustomizedBadges from './carticon'

function Header() {
    const { register, handleSubmit, watch, errors } = useForm();
    const [goTo, setGoTo] = useState("")
    const onSubmit = data => setGoTo(data.Search);
    const valueSearch = data => setGoTo(data.search);
    const [cart, updateCart] = useContext(CartContext)
    let history = useHistory();

    function handleClick() {
      history.push(`/products/${goTo}`);
    }
    return (
        <div className='header'>
            <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
                <Navbar.Brand  ><Link to="/home">Online Shop</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="mr-auto" >
                        <Nav.Link><Link to="/home">Home</Link></Nav.Link>
                        <Nav.Link style={{ color: "rgb(217, 83, 79)" }}>
                            <Link to="/products"> All products</Link>
                        </Nav.Link>
                        <Nav.Link> <Link to="/shoppingcart">Shopping Cart <CustomizedBadges /></Link></Nav.Link>
                        
                    </Nav>
                    {
                        cart.token ? <Nav.Link>Hello {cart.userName.charAt(0).toUpperCase()+cart.userName.slice(1)} </Nav.Link> 
                        : <Nav.Link><Link to="/login">Login</Link></Nav.Link>
                    }
                    

                    <Form onChange={handleSubmit(valueSearch)} inline>
                        <FormControl 
                        onKeyPress={event => {
                            if (event.key === "Enter") {
                                event.preventDefault()
                                handleClick()
                            }
                          }}
                        type="text" placeholder="Search" name="search" className="mr-sm-2"
                            ref={register({ required: true })} />
                        {/* {errors.search && <span>This field is required</span>} */}
                        <Button variant="outline-danger">
                            <Link to={`/products/${goTo}`} >Search</Link></Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <br /><br /><br />

        </div>
    )
}

export default Header;