import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Contexts.
import { UserContextProvider } from './contexts/userContext';
import { RestaurantContextProvider } from './contexts/retaurantContext';
import { CartContextProvider } from './contexts/cartContext';
import { HistoryContextProvider } from './contexts/historyContext';

// Pages.
import Home from './pages/Home';
import Shop from './pages/Shop';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import ProfileEdit from './pages/Profile/Edit';
import HistoryCart from './pages/History/Cart';
import ProductAdd from './pages/Product/Add';
import Logout from './pages/Logout';

// Components.
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import Cart from './pages/Cart';

const App = () => {
  return (
    <UserContextProvider>
      <HistoryContextProvider>
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
                      <PrivateRoute path='/profile' component={Profile} exact/>
                      <PrivateRoute path='/profile/edit' component={ProfileEdit} exact/>
                      <PrivateRoute path='/product/add' component={ProductAdd} exact/>
                      <PrivateRoute path='/order/:id' component={HistoryCart} exact/>
                      <PrivateRoute path='/logout' component={Logout} exact/>
                    </Switch>
                  </main>
                </BrowserRouter>
            </div>
          </CartContextProvider>
        </RestaurantContextProvider>
      </HistoryContextProvider>
    </UserContextProvider>
  )
}

export default App;