import styles from './Footer.module.css'

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>

                {/* Brand */}
                <div className={styles.footerBrand}>
                    <img src="images/logo.png" alt="Nexus Gadgets" className={styles.footerLogo} />
                    <p className={styles.footerTagline}>Premium Apple devices. Unbeatable prices. Delivered fast.</p>
                    <div className={styles.socials}>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" className={styles.socialLink}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                            Twitter
                        </a>
                        <a href="https://tiktok.com" target="_blank" rel="noreferrer" className={styles.socialLink}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
                            </svg>
                            TikTok
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className={styles.footerLinks}>
                    <h4 className={styles.footerHeading}>Quick Links</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div className={styles.footerContact}>
                    <h4 className={styles.footerHeading}>Contact Us</h4>
                    <ul>
                        <li>📞 <a href="tel:09122278793">09122278793</a></li>
                        <li>💬 <a href="https://wa.me/2349017186911" target="_blank" rel="noreferrer">09017186911</a></li>
                        <li>✉️ <a href="mailto:fortuneemmanuel18@gmail.com">fortuneemmanuel18@gmail.com</a></li>
                        <li>📍 14 Tech Avenue, Lekki Phase 1, Lagos, Nigeria</li>
                    </ul>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className={styles.footerBottom}>
                <p>© 2026 Fortune U. Emmanuel. All rights reserved.</p>
            </div>
        </footer>
    )
}