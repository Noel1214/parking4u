import React from 'react'
import Header from '@/components/Header';
import Navbar from '@/components/NavBar';
import MainOne from '@/components/MainOne';
import BannerOne from '@/components/BannerOne';
import InfoCard from '@/components/InfoCard';
import OurServices from '@/components/OurServices';

const page = () => {
  return (
    <div className={`bg-black `}>
      <div className={`bg-[url('https://images.pexels.com/photos/1756957/pexels-photo-1756957.jpeg')] bg-cover bg-center bg-fixed h-auto w-[100vw] pb-24 flex flex-col gap-14 relative`}>
        {/* <Header /> */}
        <Navbar />
        <MainOne />
        <BannerOne />
        {/* <PopUpNavBar /> */}
        <div className='bg-black bg-opacity-55 flex flex-col items-center overflow-y-hidden'>
          <h1 className='text-white font-semibold text-5xl text-center pt-16 border-b-2 pb-4 w-[20rem]'>Our Services</h1>
          <div className='flex flex-col lg:flex-wrap lg:flex-row items-center lg:items-start justify-center gap-28 mt h-auto lg:h-auto w-[100vw] overflow- pt-44 pb-28'>
            <div className='pb-20'>
              <InfoCard image="./valetParking1.jpg" text="Meet and Greet Parking services, sometimes known as valet parking, where you can have a person from the company you prefer, who does the convenient and secure parking for you, and then greet and handover keys to you, when you come back. This meet and greet parking services arespecially designed for your convenience, as your vehicle will be parked safely and then available when you return back." />
            </div>
            <div className='lg:translate-y-[5rem]'>
              <InfoCard image="./parkingIconVector.jpg" text="Park and Ride is the most affordable option, where you can easily avail free shuttle service in just 5 to 10 minutes after you are done with your parking. These facilities offer a unique personalized customer service, where you easily relax and enjoy the ride without having any worries about your parking space. Park and Ride services are very secure and run frequently upon request." />
            </div>
            <div className='pt-20 lg:pt-0'>
              <InfoCard image="./onSiteParking.webp" text="In onsite parking, you can have the advantage of being provided with a parking space from the airport itself. This includes a long stay option where you can have a short transfer and the short stay option is near the terminal. In order to avail huge discounts and savings, you are required to reserve your onsite parking in advance for the best price possible. " />
            </div>
          </div>
        </div>
        {/* <div className='h-12 w-12 rounded-full flex justify-center items-center bg-slate-700 text-white fixed top-[87vh] left-[86vw] scale-90 hover:scale-110 transition-all duration-200 ease-in-out'>
          <RiChat1Line size={30} />
        </div> */}
      </div>
    </div>
  )
}

export default page