import './App.css'
import { Routes, Route } from 'react-router';
import { HomePage } from './pages/home/HomePage'
import { ProductsPage } from './pages/products/ProductsPage'
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { AboutPage } from './pages/about/AboutPage';
import { ContactPage } from './pages/contact/ContactPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  )
}

export default App
