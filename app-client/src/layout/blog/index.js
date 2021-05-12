import { useEffect, useState } from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap"
import MySpinner from "../spinner"
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles, Typography } from '@material-ui/core';
import { getAll } from '../../api/products'
import "./blog.css"

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
  let showItemInPage = 9;

  const [loadingState, setLoadingState] = useState(true)

  const [blogs, setBlogs] = useState([])

  useEffect(async () => {
   const array = await getAll('blog');
    setLoadingState(false);
    setBlogs(array.data)
  },[])
  // useEffect(() => {
  //   loadPosts().then((data) => {
  //     setLoadingState(false);
  //     setBlogs(data)
  //     let number = (data.length / showItemInPage).toFixed(0)
  //     if (data.length % showItemInPage) {
  //       number++;
  //     }
  //     newpages(number)
  //   }).catch("err")
  // }, [])
  const devUrl = "http://localhost:3002";
  const list = blogs.map((item, index) => {
    const text = item.text.slice(0,60)
    const title = item.title.slice(0,35)
    return <Col md={4} key={index} style={{}}>
      <Card style={{ width: '18rem', height: '300px' }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
          <Card.Img className='blogimg' variant="top" src={`${devUrl}/images/${item.img}`} />
          <Card.Text>{text}...</Card.Text>
          <Card.Link href={item.url} target="_blank">Go Read</Card.Link>
          {/* <Card.Link href="#">Another Link</Card.Link> */}
        </Card.Body>
      </Card>
    </Col>
  }
  )
  let [numberOfPages, newpages] = useState(0);
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo(0, 0)
  };
  function PaginationControlled({ pages }) {
    return (
      <div className={classes.root} style={{ margin: 'auto', width: '100%' }}>
        <Typography >Page: {page}</Typography>
        <Pagination count={pages} page={page} onChange={handleChange} variant="outlined" color="secondary" />
      </div>
    );
  }
  function showPage(array) {
    const shownext12 = []
    for (let i = (page - 1) * showItemInPage; i < ((page - 1) * showItemInPage) + showItemInPage && i < array.length; i++) {
      shownext12.push(array[i])
    }
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
        <Row style={{ display: loadingState ? 'none' : 'flex' }}>
          <Col></Col>
          <Col size={10}><PaginationControlled pages={numberOfPages} />  </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  )
}


export default Blog;
