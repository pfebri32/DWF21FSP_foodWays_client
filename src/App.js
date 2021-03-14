import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Contexts.
import { UserContextProvider } from './contexts/userContext';
import { RestaurantContextProvider } from './contexts/retaurantContext';
import { CartContextProvider } from './contexts/cartContext';

// Pages.
import Home from './pages/Home';
import Shop from './pages/Shop';
import Login from './pages/Login';
import Register from './pages/Register';

// Components.
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import Cart from './pages/Cart';

const App = () => {
  return (
    <UserContextProvider>
      <RestaurantContextProvider>
        <CartContextProvider>
          <div className='App'>
              <BrowserRouter>
                <Navbar/>
                <main>
                  <Switch>
                    <Route path='/' component={Home} exact/>
                    <Route path='/login' component={Login} exact/>
                    <Route path='/register' component={Register} exact/>
                    <PrivateRoute path='/shop/:id' component={Shop} exact/>
                    <PrivateRoute path='/cart' component={Cart} exact/>
                  </Switch>
                </main>
              </BrowserRouter>
          </div>
        </CartContextProvider>
      </RestaurantContextProvider>
    </UserContextProvider>
  )
}

export default App;