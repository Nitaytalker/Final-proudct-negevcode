import { useEffect, useState } from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap"
import MySpinner from "../spinner"
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles,Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

function Blog() {

    async function loadPosts() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
        const data = await response.json();
        return data;
    }

    
    const [loadingState, setLoadingState] = useState(true)
    
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        loadPosts().then((data) => {
            setLoadingState(false);
            setBlogs(data)
            newpages((data.length/12).toFixed(0))
        })
    }, [])

    const list =blogs.map((item, index) => {
            return <Col md={4} key={index} style={{}}>
                <Card style={{ width: '18rem', height: '300px' }}>
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>{item.title}</Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
            </Col>
        }
        )
        let [numberOfPages, newpages] = useState(0);
        const classes = useStyles();
        const [page, setPage] =useState(1);
        const handleChange = (event, value) => {
          setPage(value);
        };     
      function PaginationControlled({pages}) {
        return (
          <div className={classes.root} style={{margin: 'auto',width: '100%'}}>
            <Typography >Page: {page}</Typography> 
            <Pagination count={pages} page={page}  onChange={handleChange} variant="outlined" color="secondary"  />
          </div>
        );
      }
    function showPage(array) {
        const shownext12 = []
        for(let i =(page-1)*12 ; i < ((page-1)*12)+12 && i<array.length ; i++ ) {
            shownext12.push(array[i])
        }
        // console.log(array);
        // console.log(whatToShow);
        return (shownext12)
    }

    

   
    return (
        <div className="blog">
            <Container>
                <Row style={{ display: loadingState ? 'block' : 'none' }}>
                    <MySpinner />
                </Row>
                <Row style={{ display: loadingState ? 'none' : 'flex' }}>
                    {showPage(list)}
                </Row>
                <Row>
                    <Col></Col>
                    <Col size={10}><PaginationControlled  pages={numberOfPages}/>  </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    )
}


export default Blog;
