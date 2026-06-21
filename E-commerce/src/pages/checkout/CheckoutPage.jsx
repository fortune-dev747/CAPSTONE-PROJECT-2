import { useState } from 'react'
import { NavLink } from 'react-router'
import styles from './CheckoutPage.module.css'
import { NavBar } from '../../components/NavBar'
import { useCart } from './CartContext'

export function CheckoutPage() {
    const [open, setOpen] = useState(false)
    const { cartItems, removeFromCart, totalPrice, clearCart } = useCart()

    const whatsappMessage = encodeURIComponent(
        `Hello! I'd like to order the following:\n` +
        cartItems.map(item => `- ${item.title} x${item.quantity} ($${item.price})`).join('\n') +
        `\n\nTotal: $${totalPrice.toFixed(2)}`
    )

    return (
        <>
            <NavBar />
            <div className="Find">
                <img src="images/find-hero.svg" alt="" />
            </div>
            <div>
                <button className={styles.openBtn} 
                 onClick={() => setOpen(true)}>
                    Open Cart
                </button>

                {/* Backdrop */}
                {open && <div className={styles.backdrop} onClick={() => setOpen(false)} />}

                {/* Drawer */}
                <div className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}>

                    {/* Header */}
                    <div className={styles.drawerHeader}>
                        <h2>Shopping Cart</h2>
                        <button className={styles.closeBtn} onClick={() => setOpen(false)}>✕</button>
                    </div>

                    {/* Product List */}
                    <div className={styles.productList}>
                        {cartItems.length === 0 ? (
                            <p style={{ color: '#aaaaaa', textAlign: 'center', marginTop: '32px' }}>
                                Your cart is empty.
                            </p>
                        ) : (
                            cartItems.map((item) => (
                                <div key={item.id} className={styles.productItem}>
                                    <img src={item.images[0]} alt={item.title} className={styles.productImage} />
                                    <div className={styles.productInfo}>
                                        <div className={styles.productTop}>
                                            <h3>{item.title}</h3>
                                            <p>${item.price}</p>
                                        </div>
                                        <p className={styles.productColor}>Qty {item.quantity}</p>
                                        <div className={styles.productBottom}>
                                            <span>${(item.price * item.quantity).toFixed(2)}</span>
                                            <button
                                                className={styles.removeBtn}
                                                onClick={() => removeFromCart(item.id)}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Footer */}
                    <div className={styles.drawerFooter}>
                        <div className={styles.subtotal}>
                            <p>Subtotal</p>
                            <p>${totalPrice.toFixed(2)}</p>
                        </div>
                        {/* <p className={styles.shippingNote}>Negotiation is allowed via dm.</p> */}

                        <a href={`https://wa.me/+2349000000000?text=${whatsappMessage}`}
                            target="_blank"
                            rel="noreferrer"
                            className={styles.checkoutBtn}
                            onClick={clearCart}
                        >
                            Order via WhatsApp
                        </a>
                        <NavLink to="/products">
                            <button className={styles.continueBtn} 
                             onClick={() => setOpen(false)}>
                                Continue Shopping →
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}