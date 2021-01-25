import React from "react";
// images
import frame from "../../assets/Contact/Frame.png";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="left">
        <iframe
          width="520"
          height="535"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          id="gmap_canvas"
          src="https://maps.google.com/maps?width=520&amp;height=535&amp;hl=en&amp;q=Amir%20Temur%20Tashkent+(mbm)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
        <a href="https://www.counters-free.net/">
          https://www.counters-free.net
        </a>{" "}
      </div>
      <div className="right">
        <img src={frame} alt="frame" className="frame" />
        <h2>Get In Touch</h2>
        <span></span>
        <p>
          Have any questions? Feel free to use the contact form below to got in
          <br />
          touch with us. We will answer you as soon as possible!
        </p>
        <form>
          <div className="input">
            <input type="text" placeholder="Your Name" />
          </div>
          <div className="input">
            <input type="email" placeholder="Your Email" />
          </div>
          <div className="input">
            <input type="number" placeholder="Your Phone" />
          </div>
          <div className="input">
            <textarea type="number" placeholder="Your Messasge" />
          </div>
          <div className="input">
            <button type="submit" type="number">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
