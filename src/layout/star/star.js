import Rating from '@material-ui/lab/Rating';

function Star(props) {
  // console.log(props.numberOfStar);
    return(
      <Rating name="half-rating" value={props.numberOfStar } precision={0.1} readOnly />
    )
}

export default Star;