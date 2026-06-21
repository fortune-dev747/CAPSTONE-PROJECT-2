import React from "react";
import { NavLink } from "react-router";
import { useCart } from '../pages/checkout/CartContext'
import './NavBar.css'

export function NavBar() {
    const { totalItems } = useCart()

    return (
        <>
            <div className="Navbar">
                <div className="Nav-container">
                    <NavLink to="/">
                        <img className="logo" src="images/logo.png" alt="logo" />
                    </NavLink>

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
                    </div>
                </div>
            </div>
        </>
    )
}