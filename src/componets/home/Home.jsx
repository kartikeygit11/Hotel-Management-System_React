import React from 'react'
import Parallax from '../common/Parallax'
import RoomCarousel from '../common/RoomCarousel'
import Room from '../rooms/Room'
import HotelService from '../common/HotelService'
import ContactUs from '../common/ContactUs'
import AboutUs from '../common/AboutUs'

const  Home = () => {
  return (
    <div>
        <Parallax/>
        <RoomCarousel/>
        <HotelService/>
        
       
        <AboutUs/>
        
        <ContactUs/>

        
         </div>
  )
}

export default  Home