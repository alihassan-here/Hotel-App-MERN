import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import Bookingscreen from './screens/Bookingscreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Route path="/home" exact component={HomeScreen} />
        <Route path="/book/:roomid" component={Bookingscreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/login" component={LoginScreen} />
      </BrowserRouter>
    </div>
  );
}

export default App;
