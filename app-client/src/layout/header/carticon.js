import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useContext } from 'react';
import { CartContext } from '../context/cart-context'

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 0px',
  },
}))(Badge);

export default function CustomizedBadges() {
    const [cart, updateCart] = useContext(CartContext)
  return (
    <IconButton aria-label="cart"  style={{padding:"0px"}}>
      <StyledBadge badgeContent={cart.cart.numberOfItems} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}