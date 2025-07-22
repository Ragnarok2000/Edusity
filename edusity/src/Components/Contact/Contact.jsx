import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png"

const Contact = () => {


    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ced130bf-07ee-4990-a421-42a6c335b8a5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact" id="contact" >
      <div className="contact-col">
        <h3>
          Send Us A Message <img src={msg_icon} alt="" />
        </h3>
        <p>
          We welcome your inquiries and feedback. Whether you require
          assistance, wish to provide suggestions, or seek further information,
          please do not hesitate to reach out. Our team is committed to
          providing prompt and professional support, and we will endeavor to
          respond to your message at the earliest convenience.
        </p>
        <ul>
          <li>
            {" "}
            <img src={mail_icon} alt="" /> Email us at: contact@example.com{" "}
          </li>
          <li>
            {" "}
            <img src={location_icon} alt="" /> Visit us: 123 Startup Lane,
            Bareilly, UP{" "}
          </li>
          <li>
            {" "}
            <img src={phone_icon} alt="" /> Contact us at: 📞 +91 98765 43210
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit} >
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
          <label>Phone Number</label>
          <input type="tel" name="phone" placeholder="Enter your Mobile Number" required />
          <label>Write Your Message Here</label>
          <textarea name="message"   rows="6" placeholder="Enter Your Message" required ></textarea>
          <button type="submit" className="btn dark-btn" >Submit Now <img src={white_arrow} alt="" /> </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
  0;
};

export default Contact;
