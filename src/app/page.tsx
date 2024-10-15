import React from 'react'
import Header from '@/components/Header';
import Navbar from '@/components/NavBar';
import MainOne from '@/components/MainOne';
import { RiChat1Line } from "react-icons/ri";



const page = () => {
  return (
    <div>
      <div className={`bg-[url('https://images.pexels.com/photos/1756957/pexels-photo-1756957.jpeg')] bg-cover bg-center bg-fixed h-[100vh] w-[100vw] pb-10 flex flex-col gap-16 overflow-x-hidden relative`}>
        {/* <Header /> */}
        <Navbar />
        <MainOne />
        <div className='h-14 w-14 rounded-full flex justify-center items-center bg-slate-700 text-white fixed top-[90vh] left-[93.9vw] scale-90 hover:scale-110 transition-all duration-200 ease-in-out'>
          <RiChat1Line size={40} />
        </div>
      </div>
    </div>
  )
}

export default page