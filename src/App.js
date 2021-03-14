import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Contexts.
import { UserContextProvider } from './contexts/userContext';
import { RestaurantContextProvider } from './contexts/retaurantContext';

// Pages.
import Home from './pages/Home';
import Menu from './pages/Menu';
import Login from './pages/Login';
import Register from './pages/Register';

// Components.
import Navbar from './components/Navbar';
import { CartContextProvider } from './contexts/cartContext';

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
                    <Route path='/menu/:id' component={Menu} exact/>
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