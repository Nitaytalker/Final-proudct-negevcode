import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './layout/homepage';
import AllProudcts from './layout/allproudcts';
import Header from './layout/header';
import Footer from './layout/footer';
import Login from './layout/login';
import ShoppingCart from './layout/shoppingcart';
import About from './layout/about';
import SingelProudct from './layout/singelproudct';
import Blog from './layout/blog'
import AdminUsers from './layout/admin/users'
import Admin from './layout/admin/admin'
import Signup from "./layout/signup"
import ContactUs  from './layout/contactus'
import {useContext} from 'react';
import {CartContext} from './layout/context/cart-context'
function App() {
  const [cart, updateCart] = useContext(CartContext)
  
  const removeFromCart = (productForDelete,index)=>{
    const newCartProducts = Object.values(cart.cart.productsForBuy)
    .filter((e,eindex)=>eindex!=index)
    updateCart({
      ...cart,
      cart:{
        ...cart.cart,
        numberOfItems: cart.cart.numberOfItems - 1,
        totalPrice: cart.cart.totalPrice - productForDelete.product.price*productForDelete.productItemsForBuy,
        productsForBuy:[
          ...newCartProducts
        ]
      }
    })
  }
  return (
    <div className="App" >
      <BrowserRouter>
        <Header />
        <Switch>         
            <Route exact path='/home' component={HomePage} />
            <Route exact path='/products/:category/:id' component={()=><SingelProudct/>} />
            <Route exact path='/products/:category' component={AllProudcts} />
            <Route path='/products' component={AllProudcts} />
            <Route exact path='/login' component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path='/shoppingcart' component={()=><ShoppingCart  removeFromCart={removeFromCart}/>} />
            <Route exact path='/about' component={About} />
            <Route exact path='/blog' component={Blog} />
            {/* <Route exact path='/singelproduct' component={()=><SingelProudct updateCartSingelProd={updateCartSingelProd}/>}  /> */}
            <Route  path='/admin' component={Admin} />
            <Route exact path='/contact-us' component={ContactUs} />
            <Route path='/' component={HomePage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}



export default App;
