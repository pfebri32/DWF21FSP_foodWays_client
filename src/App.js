import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/Navbar';

// Pages.
import Home from './pages/Home';

const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <main>
        <Home/>
      </main>
    </div>
  )
}

export default App;