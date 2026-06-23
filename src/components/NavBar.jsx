import React, { useState } from "react";
import { NavLink } from "react-router";
import { useCart } from '../pages/checkout/CartContext'
import './NavBar.css'

export function NavBar() {
    const { totalItems } = useCart()
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className="Navbar">
            <div className="Nav-container">
                <NavLink to="/">
                    <img className="logo" src="images/logo.png" alt="logo" />
                </NavLink>

                {/* Desktop Menu */}
                <div className="Menu">
                    <li className='Menu-list-item-active'><NavLink to="/products">Shop</NavLink></li>
                    <li className='Menu-list-item'><NavLink to="/about">About Us</NavLink></li>
                    <li className='Menu-list-item'><NavLink to="/contact">Contact</NavLink></li>
                </div>

                <div className="right-section">
                    <NavLink className="cart-header-link" to="/checkout">
                        <img className="cart-icon" src="/icons/cart-icon.png" />
                        <div className="cart-quantity">{totalItems}</div>
                        <div className="cart-text">Cart</div>
                    </NavLink>

                    {/* Hamburger */}
                    <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? '✕' : '☰'}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="mobile-menu">
                    <NavLink to="/products" className="mobile-menu-active" onClick={() => setMenuOpen(false)}>Shop</NavLink>
                    <NavLink to="/about" onClick={() => setMenuOpen(false)}>About Us</NavLink>
                    <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
                </div>
            )}
        </div>
    )
}