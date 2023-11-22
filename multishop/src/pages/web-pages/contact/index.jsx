import "./style.scss";
import { routerLinks } from "../../../router";

import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="Contact">
      <div className="G-container">
        <div className="home-contact">
          <Link to={routerLinks.HOME}>Home</Link>
          <span className="slesh">/</span>
          <span className="contact-span">Contact</span>
        </div>
        <h2>CONTACT US</h2>
        <div className="contact-info">
          <div className="contect-left">
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Your Email" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message" />
            <button className="contact-left-btn">Send Message</button>
          </div>
          <div className="contact-right">
            <div class="google-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
                title="google"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
