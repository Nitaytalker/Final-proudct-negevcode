import { Container, Row, Col, Image, Button, Card } from "react-bootstrap"
import DataTable from "./table";
import { getUserInfo } from '../../api/products'
import { useEffect, useState, useContext } from "react";
import { CartContext } from '../context/cart-context'
import MySpinner from "../spinner"
function User() {
    const allOrders = [
        {
            id: 1,
            userName: "nitay_talker",
            orderDate: "24/12/2020",
            name: "product_name",
            itemId: 2315152,
            itemToBut: 3,
            price: 199
        },
        {
            id: 54651,
            userName: "bot_:(",
            orderDate: "25/12/2020",
            name: "product_name",
            itemId: 2315152,
            itemToBut: 4,
            price: 175
        },
        {
            id: 7654,
            userName: "wawa",
            orderDate: "30/12/2020",
            name: "product_name",
            itemId: 2315152,
            itemToBut: 5,
            price: 450
        },
        {
            id: 5,
            userName: "lala",
            orderDate: "31/12/2020",
            name: "product_name",
            itemId: 2315152,
            itemToBut: 1,
            price: 150
        },
        {
            id: 4,
            userName: "abcde",
            orderDate: "2/1/2021",
            name: "product_name",
            itemId: 2315152,
            itemToBut: 7,
            price: 700
        }

    ]

    const [allUsers, setUsers] = useState([])

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'email', headerName: 'email', width: 150 },
        { field: 'firstname', headerName: 'firstname', width: 130 },
        { field: 'lastname', headerName: 'lastname', width: 130 },
        { field: 'key', headerName: 'key', width: 130 }
        // ,
        // {
        //     field: 'price',
        //     headerName: 'purchase price',
        //     type: 'number',
        //     width: 150,
        // },
        // {
        //     field: 'itemToBut',
        //     headerName: 'products',
        //     description: 'This column has a value getter and is not sortable.',
        //     type: 'number',
        //     width: 160
        // }
    ];

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];
    const [cart, updateCart] = useContext(CartContext)
    const [loadingState, setLoadingState] = useState(true)
    const [permission, setPermission] = useState(true)
    useEffect(async () => {
        // console.log(cart.token);
        try {
            const answer = await getUserInfo("users", {}, cart.token)
            console.log(answer);

            setUsers(answer.data.map((user, index) => {
                return { ...user, id: index }
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

export default User