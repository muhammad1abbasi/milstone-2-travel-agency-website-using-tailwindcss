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
          <h1 className='text-blue-600 text-[50px] font-bold'>Enjoy Your Vacation
          </h1>
          <p className='text-slate-600 text-[20px] w-[571px] m-1'>Traveling is not just about taking pictures and checking places off a bucket list. It’s about choosing to invest in your most important relationships, deliberately slowing life down, enjoying special moments with your family & friends, while making memories that last a lifetime.</p>
          <button className='text-white bg-blue-500 w-[237px] h-[66px] '>Contact US</button>
        </div>
        <div className='w-1/2 flex justify-center items-center m-2 '>
          <Image
           src={"/images/planeone.png"}
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
