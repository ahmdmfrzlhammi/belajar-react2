import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import TodoList from './pages/TodoList';
import ShoppingCart from './pages/ShoppingCart';
import Done from './pages/Done';
import Navbar from './component/Navbar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/todo" element={<TodoList />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/done" element={<Done />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;