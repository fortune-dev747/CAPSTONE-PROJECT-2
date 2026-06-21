import { NavBar } from '../../components/NavBar'
import { Footer } from '../../components/Footer'
import styles from './AboutPage.module.css'

export function AboutPage() {
    return (
        <>
            <title>About Us</title>
            <NavBar />
            <div className={styles.aboutWrapper}>

                {/* Hero Section */}
                <div className={styles.aboutHero}>
                    <div className={styles.aboutHeroContent}>
                        <span className={styles.badge}>Founded June 14, 2026</span>
                        <p className={styles.aboutSubtitle}>
                            At Nexus Gadgets, we are committed to providing quality smartphones, laptops, and tech accessories at competitive prices. We focus on delivering genuine products, reliable customer service, and a seamless shopping experience. Whether you’re looking for the latest iPhone, MacBook, or everyday tech essentials, we’re here to help you stay connected with the technology you need.
                        </p>
                    </div>
                    <div className={styles.aboutHeroImage}>
                        {/* Add your image here */}
                        <img src="images/Gadget-Hub.jpg" alt="Nexus Gadgets" className={styles.aboutImage} />
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}