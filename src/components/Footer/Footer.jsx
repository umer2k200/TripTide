import React, { useEffect, useState } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import emailjs from 'emailjs-com'
import './Footer.css'
import Videoo2 from '../../Assets/Videoo2.mp4'
import { FiChevronRight, FiSend } from 'react-icons/fi'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import { FaTripadvisor } from 'react-icons/fa'
const Footer = () => {

  const [email, setEmail] = useState('');

  const sendEmail = () => {

    const templateParams = {
      user_email: email,
    };

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,   
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,  
      templateParams,
      process.env.REACT_APP_EMAILJS_USER_ID    
    )
      .then((result) => {
        console.log(result.text);
        alert('Thank you for subscribing!');
        setEmail(''); 
      }, (error) => {
        console.log(error.text);
        alert('Something went wrong, please try again.');
      });

  };
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={Videoo2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos='fade-up' className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos='fade-up' type="text" placeholder='Enter Email Address here' value={email} onChange={(e) => setEmail(e.target.value)}  required />
            <button data-aos='fade-up' className="btn flex" type='submit' onClick={sendEmail}>
              SEND <FiSend className='icon' />
            </button>
          </div>

        </div>



        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="/" className="logo flex">
                <MdOutlineTravelExplore className='icon' /> Travel.
              </a>
            </div>

            <div data-aos='fade-up' className="footerParagraph">
            Explore the world with us and create unforgettable memories. Join our community today and embark on your next adventure!
            </div>

            <div data-aos='fade-up' className="footerSocials flex">
              <AiOutlineTwitter className='icon' />
              <AiFillYoutube className='icon' />
              <AiFillInstagram className='icon' />
              <FaTripadvisor className='icon' />
            </div>
          </div>

          <div className="footerLinks grid">
            {/* Group one */}
            <div data-aos='fade-up' data-aos-duration='3000' className="linkGroup">
              <span className='groupTitle'>OUR AGENCY</span>
              <li className='footerList flex'>
                <FiChevronRight className='icon' /> Services
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' /> Insurance
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' /> Agnecy
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' /> Tourism
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' /> Payment
              </li>
            </div>

            {/* Group two */}
            <div data-aos='fade-up' data-aos-duration='4000' className="linkGroup">
              <span className='groupTitle'>PARTNERS</span>
              <li className='footerList flex'>
                <FiChevronRight className='icon' /> Bookings
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' /> Rentcars
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' /> HostelWorld
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' /> Trivago
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' /> TripAdvisor
              </li>
            </div>

            {/* Group three */}
            <div data-aos='fade-up' data-aos-duration='5000' className="linkGroup">
              <span className='groupTitle'>LAST MINUTE</span>
              <li className='footerList flex'>
                <FiChevronRight className='icon' /> London
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' /> California
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' /> Indonesia
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' /> Europe
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' /> Oceania
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE </small>
            <small>COPYRIGHTS RESERVED - UMER2k200 2024</small>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Footer
