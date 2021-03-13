import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Contexts.
import { UserContextProvider } from './contexts/userContext';
import { RestaurantContextProvider } from './contexts/retaurantContext';

// Pages.
import Home from './pages/Home';
import ProductRestaurant from './pages/ProductRestaurant';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';

// Components.
import Navbar from './components/Navbar';

const App = () => {
  return (
    <UserContextProvider>
      <RestaurantContextProvider>
        <div className='App'>
            <BrowserRouter>
              <Navbar/>
                <main>
                  <Switch>
                    <Route path='/' component={Home} exact/>
                    <Route path='/login' component={Login} exact/>
                    <Route path='/register' component={Register} exact/>
                    <Route path='/restaurant/:id' component={ProductRestaurant} exact/>
                    <Route path='/cart' component={Cart} exact/>
                    <Route path='/profile' component={Profile} exact/>
                  </Switch>
                </main>
            </BrowserRouter>
        </div>
      </RestaurantContextProvider>
    </UserContextProvider>
  )
}

export default App;