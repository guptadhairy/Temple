import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Photos from './components/Photos';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import Aarti from './components/Aarti';
import About from './components/About';
import Reach from './components/Reach';
import Donate from './components/Donate';
import PaymentSuccess from './components/PaymentSuccess';
import Booking from './components/Booking';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<Photos />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/aarti' element={<Aarti />} />
        <Route path='/about' element={<About />} />
        <Route path='/visit' element={<Reach />} />
        <Route path='/donate' element={<Donate />} />
        <Route path='/paymentsuccess' element={<PaymentSuccess />} />
        <Route path='/booking' element={<Booking />} />
      </Routes>
      <Footer />
      <Toaster />
    </Router>
  );
}

export default App;
