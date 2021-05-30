import { Switch, Route, BrowserRouter, Link,useHistory } from 'react-router-dom';
import Users from './users'
import AdminMenu from './adminmenu'
import ProductsAdmin from './productsadmin'
import { Container, Row, Col } from 'react-bootstrap';
import {  useContext, useEffect } from "react";
import { CartContext } from '../context/cart-context'
export default function Admin() {
    const [cart, updateCart] = useContext(CartContext)
    let history = useHistory();

    useEffect(()=>{
        if(cart.key!=='adminkey'){
            history.push(`/home`);
        }
    },[])
    
    return <Container>
        <Row>
            <Col xl='1'>
                <AdminMenu/>
            </Col>
            <Col>
                <Route exact path='/admin/usersinfo' component={Users} />
                <Route exact path='/admin/productsinfo' component={ProductsAdmin} />
                <Route exact path='/admin' component={Users} />
            </Col>
        </Row>
    </Container>
}