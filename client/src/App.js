import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Route path="/home" component={HomeScreen} />
      </BrowserRouter>
    </div>
  );
}

export default App;
