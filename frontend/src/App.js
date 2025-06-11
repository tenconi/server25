import './App.css';
import {Routes, Route, BrowserRouter as Browser} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';

function App() {
  return (

    <Browser>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Browser>
  );
}

export default App;
