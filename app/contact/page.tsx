import React from 'react'
import Header from '@/components/header/page'
import Image from 'next/image'
import Footer from '@/components/footer/page'
const page = () => {
  return (
    <div className='h-screen '>
     <Header></Header>
      <div className='flex h-[80%]'>
        <div className='w-1/2 flex flex-col justify-center items-start m-12'>
          <h1 className='text-blue-600 text-[50px] font-bold flex'>We provide you 24hrs service
          </h1>
          <p className='text-slate-600 text-[20px] w-[571px] m-1 flex'>Feel free to contact us and Get satisfy with our services and Tours just click Down button for contact with us</p>
          <button className='text-white bg-blue-500 w-[237px] h-[66px] '>Contact US</button>
        </div>
        <div className='w-1/2 flex justify-center items-center m-2 '>
          <Image
           src={"/images/contact.png"}
           alt='this is a photo you know'
           width={502}
           height={465}
           
           
           
           />
       
        
        </div>
        




      </div>
      <Footer></Footer>

    </div>
  )
}

export default page
