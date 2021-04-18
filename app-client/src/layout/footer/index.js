import { Card, Button, ButtonGroup, Container, Row, Col } from "react-bootstrap";
import { FaRegCopyright, FaInstagram } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { Link } from 'react-router-dom';
import './footer.css'

function Footer() {
    return (
        <div className='footer'>

            <Card style={{ backgroundColor: '#262626', color: 'white' }}>
                <Container>
                    <Row>
                        <Col  lg='2'>
                            <Row><Link to="/blog">Blog</Link></Row>
                            <Row> <Link to='/contact-us'>Contact Us</Link></Row>
                            <Row> <Link to="/about">About</Link></Row>
                        </Col>
                        <Col lg='8'>
                            <Card.Body>
                                <Card.Title>Copyright</Card.Title>
                                <Card.Text>
                                    <FaRegCopyright /> All rights reserved to "Online-Shop".
            </Card.Text>
                                <ButtonGroup className="mr-2" aria-label="First group">
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <Button variant="danger"><ImFacebook2 /></Button></a>
                                </ButtonGroup>
                                <ButtonGroup className="mr-2" aria-label="First group">
                                    <a href="https://www.instagram.com/" target="_blank">
                                        <Button variant="danger"><FaInstagram /></Button>  </a>
                                </ButtonGroup>
                            </Card.Body>
                        </Col>
                    </Row>
                </Container>

            </Card>
        </div>
    );
}

export default Footer;