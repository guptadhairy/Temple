import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Photos from './components/Photos';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<Photos />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
