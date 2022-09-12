import "./Contact.scss";
import { FaPhoneAlt, FaEnvelope, FaTwitter } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import Card from "../../components/card/Card";
import { useState } from "react";
import axios from "axios";
import { SERVER_URL } from "../../App";
import { toast } from "react-toastify";

const Contact = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const data = {
    subject,
    message,
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    console.log(subject, message);
    try {
      const response = await axios.post(`${SERVER_URL}/api/contactus`, data);
      console.log(response.data);
      setSubject("");
      setMessage("");
      toast.info(response.data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className={"contact"}>
      <h3 className="--mt">Contact Us</h3>
      <div className={"section"}>
        <form onSubmit={sendEmail}>
          <Card cardClass={"card"}>
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <label>Message</label>
            <textarea
              cols="30"
              rows="10"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button className="--btn --btn-primary">Send Message</button>
          </Card>
        </form>

        <div className={"details"}>
          <Card cardClass={"card2"}>
            <h3>Our Contact Information</h3>
            <p>Fill the form or contact us via other channels listed below</p>
            <div className={"icons"}>
              <span>
                <FaPhoneAlt />
                <p>+234 705 141 6545</p>
              </span>
              <span>
                <FaEnvelope />
                <p>Support@invent.com</p>
              </span>
              <span>
                <GoLocation />
                <p>Abuja, Nigeria</p>
              </span>
              <span>
                <FaTwitter />
                <p>@ZinoTrust</p>
              </span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
