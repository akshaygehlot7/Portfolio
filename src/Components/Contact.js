import React from "react";
import "../Styles/Contact.css";
import { Typography, Button } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Contact = () => {
  return (
    <div className="contactSection">
      <div></div>
      <div className="contactSectionContainer mt-5">
        <Typography component="h1">Contact Us</Typography>
        <div>
          <div>
              <form
                action="https://formspree.io/f/mnqyponl"
                method="POST"
                className="form mb-2"
              >
                <div className="form__group">
                  <input
                    type="Name"
                    name="name"
                    placeholder="Name"
                    class="form-control"
                    autoComplete="off"
                    id="name"
                    required
                  />
                </div>
                <div className="form__group mt-2 mb-2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    class="form-control"
                    id="email"
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="form__group mb-2">
                  <textarea
                    placeholder="Message"
                    name="message"
                    class="form-control"
                    id="message"
                    autoComplete="off"
                    rows="5"
                    required
                  />
                </div>

                <div class="col-lg-5 col-md-6 form">
                  <button type="submit" className="btn btn-default btn-lg">
                    Send
                  </button>
                </div>
              </form>
          </div>
          <div className="contactSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <h3>
              <b>
                <span>Location:</span>Pune Maharashtra
              </b>
            </h3>
            <h3>
              <b>
                <span>Phone:</span>+91 7058451564
              </b>
            </h3>
            <h3>
              <b>
                <span>Email:</span>akshaygehlot003@gmail.com
              </b>
            </h3>
            <div className="aboutSectionSocialMedia">
            <a href="https://www.instagram.com/akshay.k.gehlot/" alt="blank">
              <InstagramIcon className="contactinstagramSvgIcon" />
            </a>
            <a href="https://www.facebook.com/akshay.gehlot.984" alt="blank">
              <FacebookIcon className="contactFacebookIconSvgIcon" />
            </a>
            <a href="https://www.instagram.com/akshay.k.gehlot/" alt="blank">
              <LinkedInIcon className="contactLinkedInIconSvgIcon" />
            </a>
            </div>
          </div>
        </div>
      </div>
    </div> 
    
  );
};

export default Contact;
