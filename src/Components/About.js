import { Button, Typography, Avatar } from '@material-ui/core'
import React from 'react'
import "../Styles/About.css"
import Logo from "../Image/akshay.jpeg"
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';

const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/meabhisingh";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>
        <div>
          <div>
            <Avatar src={Logo} alt="Founder" 
            style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
            />
            <Typography>Akshay Gehlot</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram 
            </Button>
          </div>
          <div className="aboutSectionContainer2">
            <h3><b><span>Location:</span>Pune Maharashtra</b></h3>
            <h3><b><span>Phone:</span>+91 7058451564</b></h3>
            <h3><b><span>Email:</span>akshaygehlot003@gmail.com</b></h3>
            <div className='aboutSectionSocialMedia'>
            <a href="https://www.instagram.com/akshay.k.gehlot/" alt="blank">
            <InstagramIcon className="instagramSvgIcon" />
            </a>
            <a href="https://www.instagram.com/akshay.k.gehlot/" alt="blank">
            <FacebookIcon className="FacebookIconSvgIcon" />
            </a>
            <a href="https://www.instagram.com/akshay.k.gehlot/" alt="blank">
            <LinkedInIcon className="LinkedInIconSvgIcon" />
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
