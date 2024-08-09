import React, {useEffect, useState} from 'react'
import './Home.css'
import Videoo from '../../Assets/Videoo.mp4'
import { GrLocation } from 'react-icons/gr'
import { HiFilter } from 'react-icons/hi'
import { FiFacebook } from 'react-icons/fi'
import { AiOutlineInstagram } from 'react-icons/ai'
import { SiTripadvisor } from 'react-icons/si'
import { BsListTask } from 'react-icons/bs'
import { TbApps } from 'react-icons/tb'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Home = () => {
  const [maxPrice, setMaxPrice] = useState(5000);
  const handlePriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  useEffect(() => {
    Aos.init({duration:2000})
  }, [])

  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={Videoo} muted autoPlay loop type="video/mp4"></video>


      <div className="homeContent container">

        <div className="textDiv">

          <span data-aos='fade-up' className="smallText">
            Our Packages
          </span>

          <h1 data-aos='fade-up' className="homeTitle">
            Search your Holiday
          </h1>

        </div>

        <div data-aos='fade-up' className="cardDiv grid">

          

          <div className="destinationInput">
            <label htmlFor='city'>Search your destination</label>
            <div className="input flex">

              <input type='text' placeholder='Enter name here....' />
              <GrLocation className='icon' />
            </div>

          </div>

          <div className="dateInput">
            <label htmlFor='date'>Select your date:</label>
            <div className="input flex">

              <input type='date' placeholder='Enter date here....' />
            </div>

          </div>

          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor='price'>Max Price:</label>
              <h3 className='total'>${maxPrice}</h3>
            </div>

            <div className="input flex">
              <input type='range' min='1000' max='5000' value={maxPrice} onChange={handlePriceChange}/>
            </div>

          </div>


          <div className="searchOptions flex">
           
            <span>SEARCH  </span>
            <HiFilter className='icon'/>
          </div>

        </div>

        <div data-aos='fade-up' className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className='icon'/>
            <AiOutlineInstagram className='icon'/>
            <SiTripadvisor className='icon'/>
          </div>
          <div className="leftIcons">
            <BsListTask className='icon'/>
            <TbApps className='icon'/>
          </div>
        </div>

      </div>


    </section>
  )
}

export default Home
