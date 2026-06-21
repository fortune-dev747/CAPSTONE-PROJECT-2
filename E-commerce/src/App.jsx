import './App.css'
import { Routes, Route } from 'react-router';
import { HomePage } from './pages/home/HomePage'
import { ProductsPage } from './pages/products/ProductsPage'
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { AboutPage } from './pages/about/AboutPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  )
}

export default App
