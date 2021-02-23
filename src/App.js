import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './layout/main';
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
import Admin from './layout/admin'

function App() {
  return (
    <div  className="App" >
      <Header />
      
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/home' component={HomePage} />
          <Route exact path='/products' component={AllProudcts} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/shoppingcart' component={ShoppingCart}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/blog' component={Blog}/>
          <Route exact path='/singelproduct' component={SingelProudct}/>
          <Route exact path='/admin' component={Admin}/>
        </Switch>
      </BrowserRouter>

      <Footer />
    </div>
  );
}



export default App;
