import "./style.scss";

function FooterComponent() {
  return (
    <div className="G-container">
      <div className="footer-component">
        <div className="footer-left">
          <h4>Get In Touch</h4>
          <p>
            No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et
            et dolor sed dolor. Rebum tempor no vero est magna amet no
          </p>
          <div className="contact-data">
            <span className="icon-location2 contact-icons" />
            <p>123 Street, New York, USA</p>
          </div>
          <div className="contact-data">
            <span className="icon-mail contact-icons" />
            <p>info@example.com</p>
          </div>
          <div className="contact-data">
            <span className="icon-contact contact-icons" />
            <p>+012 345 67890</p>
          </div>
        </div>
        <div className="footer-right">
          <h4>Newsletter</h4>
          <p>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
          <div className="sing-up-input">
            <input
              className="input-sign-up"
              type="text"
              placeholder="You email address"
            />
            <button className="sign-up-btn">Sign Up</button>
          </div>
          <p>Follow Us</p>
          <div className="icons-social">
            <span className="icon-twitter social" />
            <span className="icon-facebook social" />
            <span className="icon-instagram social" />
            <span className="icon-linkedin2 social" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterComponent;
