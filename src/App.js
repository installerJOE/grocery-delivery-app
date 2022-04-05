import {Route, Switch} from 'react-router-dom'
import Home from './view/pages/Home'
import About from './view/pages/About'
import Orders from './view/pages/Orders'
import Products from './view/pages/Products'
import Register from './view/pages/Register'
import CreateOrder from './view/pages/CreateOrder'
import NotFoundPage from './view/errorpages/NotFoundPage'



function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/about" exact component={About}/>
      <Route path="/orders" exact component={Orders}/>
      <Route path="/order/create" exact component={CreateOrder}/>
      <Route path="/products" exact component={Products}/>
      <Route path="/register" exact component={Register}/>
      <Route path='*' component={NotFoundPage}/>
    </Switch>
  );
}

export default App;
