import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components.
import Navbar from './components/Navbar';

// Pages.
import Home from './pages/Home';
import ProductRestaurant from './pages/ProductRestaurant';
import Cart from './pages/Cart';
import Profile from './pages/Profile';

const App = () => {
  return (
    <div className='App'>
      <main>
        <BrowserRouter>
          <Navbar/>
          <Switch>
            <Route path='/' component={Home} exact/>
            <Route path='/restaurant/:id' component={ProductRestaurant} exact/>
            <Route path='/cart' component={Cart} exact/>
            <Route path='/profile' component={Profile} exact/>
          </Switch>
        </BrowserRouter>
      </main>
    </div>
  )
}

export default App;