import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'
const images = [
  {
    url: 'https://images-na.ssl-images-amazon.com/images/I/712iPqGUc4L._AC_UX385_.jpg',
    title: 'T-shirt',
    width: '50%',
    to:'/products/t-shirt',
  },
  {
    url: 'https://cdn.bike24.net/i/mb/5a/4d/ac/357440-00-d-768492.jpg',
    title: 'Pants',
    width: '50%',
    to:'/products/pants',
  },
  {
    url: 'https://images-na.ssl-images-amazon.com/images/I/61zh7D5GkmL._UL1500_.jpg',
    title: 'jacket',
    width: '50%',
    to:'/products/jacket',
  },
  {
    url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rw-best-nikes-1588011427.jpg?crop=1xw:1xh;center,top&resize=1200:*',
    title: 'Shoes',
    width: '50%',
    to:'/products/shoes',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 400,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export default function ButtonBases() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      {images.map((image) => (
        
        <ButtonBase
          focusRipple
          
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <Link to={image.to}>
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
          </Link>
          
        </ButtonBase>
      ))}
    </div>
  );
}
