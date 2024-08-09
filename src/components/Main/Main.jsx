import React, { useEffect, useState } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './Main.css'
import img1 from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8.jpg'
import img9 from '../../Assets/img9.jpg'
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai'
const Data = [
  {
    id: 1,
    imgSrc: img1,
    desTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.'
  },
  {
    id: 2,
    imgSrc: img2,
    desTitle: 'Paris',
    location: 'France',
    grade: 'HISTORICAL SIGHTSEEING',
    fees: '$500',
    description: 'Known as the city of love, Paris is famed for its cultural landmarks like the Eiffel Tower, the Louvre, and exquisite cuisine.'
  },
  {
    id: 3,
    imgSrc: img3,
    desTitle: 'Kyoto',
    location: 'Japan',
    grade: 'CULTURAL EXPLORATION',
    fees: '$600',
    description: 'Kyoto, once the capital of Japan, is famous for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses.'
  },
  {
    id: 4,
    imgSrc: img4,
    desTitle: 'Maui',
    location: 'Hawaii, USA',
    grade: 'ADVENTURE NATURE',
    fees: '$800',
    description: 'Maui is a Hawaiian island known for its stunning beaches, scenic drives, and diverse outdoor activities such as snorkeling, hiking, and whale watching.'
  },
  {
    id: 5,
    imgSrc: img5,
    desTitle: 'Santorini',
    location: 'Greece',
    grade: 'SCENIC RELAXATION',
    fees: '$650',
    description: 'Santorini is a picturesque island famous for its whitewashed buildings, stunning sunsets, and volcanic beaches. It is a prime location for honeymooners.'
  },
  {
    id: 6,
    imgSrc: img6,
    desTitle: 'Banff',
    location: 'Canada',
    grade: 'NATURE ADVENTURE',
    fees: '$550',
    description: 'Banff National Park in the Canadian Rockies is known for its stunning mountain landscapes, crystal-clear lakes, and abundant wildlife.'
  },
  {
    id: 7,
    imgSrc: img7,
    desTitle: 'Marrakech',
    location: 'Morocco',
    grade: 'CULTURAL EXPLORATION',
    fees: '$400',
    description: 'Marrakech is a vibrant city with a rich history, known for its bustling souks, beautiful palaces, and stunning gardens.'
  },
  {
    id: 8,
    imgSrc: img8,
    desTitle: 'Sydney',
    location: 'Australia',
    grade: 'URBAN EXPLORATION',
    fees: '$750',
    description: 'Sydney is a bustling city known for its iconic Sydney Opera House, stunning harbor, and beautiful beaches such as Bondi Beach.'
  },
  {
    id: 9,
    imgSrc: img9,
    desTitle: 'Bursa',
    location: 'Turkey',
    grade: 'URBAN EXPLORATION',
    fees: '$650',
    description: ' is a bustling city known for its iconic Sydney Opera House, stunning harbor, and beautiful beaches such as Bondi Beach.'
  }
];

const Main = () => {
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const handleDetailsClick = (id) => {
    setActiveCard(id === activeCard ? null : id); // Toggle the active card
  };

  return (
    <section className="main container section">

      <div className="secTitle">
        <h3 data-aos='fade-right' className="title">Most visited destinations</h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(({ id, imgSrc, desTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos='fade-up' className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={desTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{desTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon' />
                    <span className="name">{location}</span>
                  </span>


                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button onClick={() => handleDetailsClick(id)} className="btn flex">
                    {activeCard === id ? 'CLOSE' : 'DETAILS'}
                    <HiOutlineClipboardCheck className='icon' />
                  </button>

                  {activeCard === id && (
                    <div className="detailsOverlay">
                      <AiOutlineClose onClick={() => setActiveCard(null)} className='closeIcon' />
                      <p>Booking Process:<br/> Select Package: Choose your desired destination and travel dates.<br/>Customize: Pick your accommodation, activities, and any add-ons.<br/> Review & Pay: Confirm your choices and proceed with secure payment.<br/> Confirmation: Receive your booking details and itinerary via email.</p>
                    </div>
                  )}

                </div>
              </div>
            )
          })
        }
      </div>

    </section>
  )
}

export default Main
