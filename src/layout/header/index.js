import { Navbar, NavDropdown, FormControl, Button, Form, Nav } from "react-bootstrap";
import { GiShoppingCart } from "react-icons/gi";

function Header() {
    return (
        <div  className='header'>
            <Navbar fixed="top" bg="dark" variant="dark"  expand="lg">
                <Navbar.Brand href="#home" >Online-Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="mr-auto" >
                        <Nav.Link href="#home" style={{color:'#d9534f'}} >Home</Nav.Link>
                        <Nav.Link href="#products" style={{color:'#d9534f'}} >All products</Nav.Link>
                        <NavDropdown  title="Dropdown" id="basic-nav-dropdown ">
                            <NavDropdown.Item href="#action/3.1" >Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2" >Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3" >Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4" >Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#login" style={{color:'#d9534f'}}>login</Nav.Link>
                        <Nav.Link href="#cart" style={{color:'#d9534f'}}>  Shopping cart <GiShoppingCart style={{fontSize:"25px"}} /></Nav.Link>
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