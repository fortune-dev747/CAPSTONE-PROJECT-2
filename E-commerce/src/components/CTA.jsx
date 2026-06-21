import styles from './CTA.module.css'

export function CTA() {
    return (
        <div className={styles.ctaWrapper}>
            <div className={styles.ctaContainer}>

                {/* Glow effect */}
                <div className={styles.glow} />

                {/* Left Content */}
                <div className={styles.ctaContent}>
                    <h2 className={styles.ctaTitle}>
                        Your next Apple device is just a click away.
                    </h2>
                    <p className={styles.ctaSubtitle}>
                        Shop the latest iPhones, MacBooks and accessories at unbeatable prices. 
                        Order easily via WhatsApp or call us directly.
                    </p>
                    <div className={styles.ctaButtons}>
                        <a href="/products" className={styles.primaryBtn}>Shop Now</a>
                        <a href="/contact" className={styles.secondaryBtn}>Contact Us →</a>
                    </div>
                </div>

                {/* Right Image */}
                <div className={styles.ctaImageWrapper}>
                    <img
                        src="images/iphone2.jpg"
                        alt="Nexus Gadgets"
                        className={styles.ctaImage}
                    />
                </div>

            </div>
        </div>
    )
}