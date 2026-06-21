import { useState } from 'react'
import { NavBar } from '../../components/NavBar'
import { Footer } from '../../components/Footer'
import styles from './ContactPage.module.css'

export function ContactPage() {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const message = encodeURIComponent(
            `Name: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`
        )
        window.open(`https://wa.me/2349017186911?text=${message}`, '_blank')
        setSubmitted(true)
        setForm({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitted(false), 4000)
    }

    return (
        <>
            <NavBar />
            <div className={styles.contactWrapper}>

                {/* Header */}
                <div className={styles.contactHeader}>
                    <p className={styles.contactSubtitle}>
                        Have a question or want to place an order? We're just a message away.
                    </p>
                </div>

                <div className={styles.contactGrid}>

                    {/* Left - Info */}
                    <div className={styles.contactInfo}>

                        <div className={styles.infoCard}>
                            <span className={styles.infoIcon}>📞</span>
                            <div>
                                <h4>Phone</h4>
                                <a href="tel:09122278793">09122278793</a>
                            </div>
                        </div>

                        <div className={styles.infoCard}>
                            <span className={styles.infoIcon}>💬</span>
                            <div>
                                <h4>WhatsApp</h4>
                                <a href="https://wa.me/2349017186911" target="_blank" rel="noreferrer">09017186911</a>
                            </div>
                        </div>

                        <div className={styles.infoCard}>
                            <span className={styles.infoIcon}>✉️</span>
                            <div>
                                <h4>Email</h4>
                                <a href="mailto:fortuneemmanuel18@gmail.com">fortuneemmanuel18@gmail.com</a>
                            </div>
                        </div>

                        <div className={styles.infoCard}>
                            <span className={styles.infoIcon}>📍</span>
                            <div>
                                <h4>Address</h4>
                                <p>14 Tech Avenue, Lekki Phase 1, Lagos, Nigeria</p>
                            </div>
                        </div>

                        <div className={styles.infoCard}>
                            <span className={styles.infoIcon}>🕐</span>
                            <div>
                                <h4>Business Hours</h4>
                                <p>Monday – Friday: 9am – 6pm</p>
                                <p>Saturday: 10am – 4pm</p>
                                <p>Sunday: Closed</p>
                            </div>
                        </div>

                    </div>

                    {/* Right - Form */}
                    <div className={styles.contactForm}>
                        <h3 className={styles.formTitle}>Send us a Message</h3>

                        {submitted && (
                            <div className={styles.successMsg}>
                                ✅ Message sent! We'll get back to you shortly.
                            </div>
                        )}

                        <div className={styles.formGroup}>
                            <label>Full Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="John Doe"
                                value={form.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label>Email Address</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="john@example.com"
                                value={form.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label>Message</label>
                            <textarea
                                name="message"
                                placeholder="Tell us what you need..."
                                rows="5"
                                value={form.message}
                                onChange={handleChange}
                            />
                        </div>

                        <button className={styles.submitBtn} onClick={handleSubmit}>
                            Send via WhatsApp
                        </button>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}