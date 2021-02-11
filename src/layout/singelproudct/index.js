import { Col, Container, Button, Row, InputGroup, FormControl, Card, Dropdown, DropdownButton,ButtonGroup } from "react-bootstrap";
import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from "mdbreact";
import { GiShoppingCart } from "react-icons/gi";

function SingelProudct(props) {
    function Mypic(props) {
        function Star(props) {
            function starttest(star) {
                const stars = [];
                let i = 0;
                let number = star % 1
                let maxStar = 5;
                if (number) {
                    star = star - number;
                }
                let word = 'star'
                for (; i < star; i++) {
                    stars.push(<a key={word + i.toString()}><BsStarFill /></a>);
                }
                if (number) {
                    stars.push(<a key={word + i.toString()}><BsStarHalf /></a>);
                    i++;
                }
                for (; i < maxStar; i++) {
                    stars.push(<a key={word + i.toString()}><BsStar /></a>);
                }
                return stars;
            }

            const stars = starttest(props.star)
            return <div key='star'>
                {stars}
            </div>
        }

        return (
            <div className="infoproudct">
                <Container>
                    <Row>
                        <Col>
                            <div className='pic'>
                                <MDBContainer>
                                    <MDBCarousel
                                        activeItem={1}
                                        length={props.proudct.img.length}
                                        showControls={true}
                                        showIndicators={true}
                                        className="z-depth-1"
                                    >
                                        <MDBCarouselInner>
                                            {gallery(props.proudct.img)}
                                        </MDBCarouselInner>

                                    </MDBCarousel>
                                </MDBContainer>
                            </div>
                        </Col>
                        <br />
                        <Col>
                            <div className='allabout'>
                                <br /><br /><br /><br /><br />
                                <div> price: {props.proudct.price}$ </div>
                                <br />
                                <div>
                                    <DropdownButton
                                        as={ButtonGroup}
                                        key={"Danger"}
                                        id={`dropdown-split-variants-Danger`}
                                        variant={"danger"}
                                        title={"Size"}
                                    >
                                        <Dropdown.Item eventKey="1">S</Dropdown.Item>
                                        <Dropdown.Item eventKey="2">M</Dropdown.Item>
                                        <Dropdown.Item eventKey="3" active>L</Dropdown.Item>
                                        <Dropdown.Item eventKey="4">XL</Dropdown.Item>
                                        <Dropdown.Item eventKey="5">XXL</Dropdown.Item>

                                    </DropdownButton>


                                </div>
                                <br />
                                <div>
                                    <Row className="justify-content-md-center">
                                        <Col lg="5">
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text id="inputGroup-sizing-default">Items</InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <FormControl
                                                    type='number'
                                                    defaultValue={1}
                                                    min={1}
                                                    aria-label="Default"
                                                    aria-describedby="inputGroup-sizing-default"
                                                />
                                            </InputGroup>
                                        </Col>
                                    </Row>
                                </div>
                                <div> <Button variant="danger">Add to cart<GiShoppingCart style={{ fontSize: "25px" }} /></Button></div>
                                <br />
                                <div> Rating: <Star star={props.proudct.star} /> </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        )
    }
    const myname = props.proudcts.name

    return (
        <div className='singelproudct'>
            <h1>{myname}</h1>
            <br />
            <Mypic proudct={props.proudcts} />
            <br/><br /><br />
            <div> <Button variant="danger">Back to shop</Button></div>
        </div>
    );
}

const gallery = (images) => {
    const mygallery = images.map((pic, index) => {
        let word = "pic";
        return (
            <Card key={ index + 1} border="danger" style={{ width: '30rem' }}>
                <MDBCarouselItem key={ index + 1} itemId={index + 1}>
                    <MDBView>
                        <img
                            className="d-block w-100"
                            src={pic}
                            alt="First slide"
                        />
                        <MDBMask overlay="black-light" />
                    </MDBView>
                </MDBCarouselItem>
            </Card>
        )
    }
    )
    console.log(mygallery);
    return mygallery;
}


export default SingelProudct;