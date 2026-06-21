import { NavLink } from "react-router";
import './HomePage.css'
import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import { CTA } from "../../components/CTA";

export function HomePage() {
    return (
        <>
            <title>Ecommerce Project</title>
            <NavBar />

            <div className="page-wrapper">
                <div className="hero-image">
                    <img className="hero-image" src="images/iphone2.jpg" alt="cart" />
                </div>
                <div className="hero-section">
                    <h1 className="hero-text">Your Next Apple </h1> <img className="apple-logo" src="images/apple-logo.png" alt="" />
                    <div className="div">
                        <h1>Product Starts <NavLink to="products"><span className="link-primary">Here</span>.</NavLink></h1>
                    </div>
                    <div className="div">
                        <h2 className="sub-hero-text">Premium Apple Devices.</h2>
                        <div>
                            <h2 className="sub-hero-text2">Unbeatable Prices. Delivered Fast.</h2>
                        </div>
                    </div>
                </div>

                <div className="card1">
                    <img className="iphone-card" src="images/iphone-card.png" alt="iphone" />
                    <h3 className="card-text">iPhones</h3>
                </div>
                <div className="card2">
                    <img className="headphones-card" src="images/apple-headphones-card.png" alt="iphone" />
                    <h3 className="card-text2">Headphones</h3>
                </div>
                <div className="card3">
                    <img className="laptop-card" src="images/laptop-card.png" alt="iphone" />
                    <h3 className="card-text3">Laptops</h3>
                </div>
                <NavLink to="products">
                    <button className="view-products-btn">View Products ↗</button>
                </NavLink>

                <div className="card4">
                    <h3 className="card-text4">Our Feature</h3>
                    <div className="card-text5">Products</div>
                    <img className="review-hero" src="images/review-hero.svg" alt="" />
                    <h4 className="card-text6">If we define Nexus Gadgets
                        <div>in three words it will be excellence,</div>
                        <div>ultimate and high-quality.</div>
                    </h4>
                </div>
            </div>

            <CTA />
            <Footer />
        </>
    )
}