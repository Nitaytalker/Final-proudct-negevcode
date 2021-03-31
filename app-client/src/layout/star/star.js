import Rating from '@material-ui/lab/Rating';

function Star(props) {
    return(
      <Rating name="half-rating" value={props.numberOfStar } precision={0.1} readOnly />
    )
}

export default Star;