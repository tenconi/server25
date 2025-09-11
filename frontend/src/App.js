import './App.css';
import { Routes, Route, BrowserRouter as Browser } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import PageDetail from './pages/PageDetail.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';

function App() {
  return (
    <Browser>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<PageDetail />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Browser>
  );
}

export default App;
