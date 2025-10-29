import Form from 'next/form';
import styles from "./Contact.module.css";

export default function Contact() {

    return (
        <div className="paddingTop">
            <section id="contact" style={{ padding: "2rem" }}>
                <Form action="/api/contact" className={styles.form}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required className={styles.whiteBackground} />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required className={styles.whiteBackground} />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="5" required className={styles.whiteBackground} ></textarea>

                    <button type="submit" className={styles.submit}>Send Message</button>
                </Form>
            </section>
        </div>
    )
}