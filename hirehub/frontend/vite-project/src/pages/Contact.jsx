import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Have questions or need support? Reach out to HireHub.</p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="5" placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
