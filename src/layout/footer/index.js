import { Card, Button, ButtonGroup } from "react-bootstrap";
import { FaRegCopyright, FaInstagram } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
function Footer() {
    return (
        <div className='footer'>
            <Card>
                <Card.Body>
                    <Card.Title>Copyright</Card.Title>
                    <Card.Text>
                        <FaRegCopyright /> All rights reserved to "Online-Shop".
            </Card.Text>
                    <ButtonGroup className="mr-2" aria-label="First group">
                        <Button variant="danger"><ImFacebook2 /></Button>
                    </ButtonGroup>
                    <ButtonGroup className="mr-2" aria-label="First group">
                        <Button variant="danger"><FaInstagram /></Button>
                    </ButtonGroup>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Footer;