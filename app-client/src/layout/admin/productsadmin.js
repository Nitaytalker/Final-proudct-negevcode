import {getAll} from '../../api/products'
import { Container, Row, Col, Image, Button, Card } from "react-bootstrap"
import DataTable from "./table";
import { useEffect, useState, useContext } from "react";
import { CartContext } from '../context/cart-context'
import MySpinner from "../spinner"
export default function ProductsAdmin(){
    const [allUsers, setUsers] = useState([])

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'category', headerName: 'category', width: 130 },
        { field: 'name', headerName: 'name', width: 130 },
        { field: 'price', headerName: 'price', width: 130 },
        { field: 'star', headerName: 'star', width: 150 }
        
        // ,
        // { field: 'sizeInStock', headerName: 'size in stock', width: 130 }
    ];

   
    const [cart, updateCart] = useContext(CartContext)
    const [loadingState, setLoadingState] = useState(true)
    const [permission, setPermission] = useState(true)
    useEffect(async () => {
        // console.log(cart.token);
        try {
            const answer = await getAll("products")

            setUsers(answer.data.map((user, index) => {
                console.log(Object.values(user.sizeInStock));
                return { ...user  }
            }))
            setPermission(false)

        }
        catch (error) {
            switch (error.response.status) {
                case 401:
                    console.log("401");
                    break;
                case 500:
                    console.log("500");
                    break;
                default:
                    break;
            }
        }
        setLoadingState(false);
    }, [])
    return (
        <Container>
            <Row>
                <Row style={{ display: loadingState ? 'block' : 'none' }}>
                    <MySpinner />
                </Row>
                {/* <Col xs={6}>
                    <DataTable columns={columns} rows={rows} />
                </Col> */}
                <Col style={{ display: loadingState || !permission ? 'none' : 'flex' }}>
                    Not authorized
                </Col>
                <Col style={{ display: loadingState || permission ? 'none' : 'flex' }}>
                    <DataTable columns={columns} rows={allUsers} />
                </Col>
            </Row>
        </Container>

    )
}