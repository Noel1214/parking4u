import React from 'react'
import Header from '@/components/Header';
import Navbar from '@/components/NavBar';
import MainOne from '@/components/MainOne';
import BannerOne from '@/components/BannerOne';
import InfoCard from '@/components/InfoCard';
import OurServices from '@/components/OurServices';
import NewNavigationBar from '@/components/NewNavigationBar';

const page = () => {
  return (
    <div className={`bg-black `}>
      <div className={`bg-[url('https://images.pexels.com/photos/1756957/pexels-photo-1756957.jpeg')] bg-cover bg-center bg-fixed h-auto w-[100vw] pb-24 flex flex-col gap-14 relative`}>
        {/* <Header /> */}
        {/* <Navbar /> */}
        <NewNavigationBar />
        <MainOne />
        <BannerOne />
        {/* <PopUpNavBar /> */}
        <OurServices />
        {/* <div className='h-12 w-12 rounded-full flex justify-center items-center bg-slate-700 text-white fixed top-[87vh] left-[86vw] scale-90 hover:scale-110 transition-all duration-200 ease-in-out'>
          <RiChat1Line size={30} />
        </div> */}
      </div>
    </div>
  )
}

export default page