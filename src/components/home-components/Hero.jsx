import Image from 'next/image'
import React from 'react'

import HeroImage from "@assets/heroimage.webp";
import HeroImageTwo from "@assets/heroimagetwo.webp";

export default function Hero() {
  return (
     
        <div className="grid grid-cols-2 gap-5 items-center  pt-10">
            <div className="flex flex-col space-y-6 justify-center pr-15">
                <h2 className="text-[70px] leading-20 font-semibold  text-primary">Search less, read more with a smoother way to find your books</h2>
                <p className="text-[16px] font-light  text-primary">Finding the right college textbooks should not take hours or cost a fortune. With Cheap Books For College, you get a faster way to search, compare, and access the books you need without the usual stress.</p>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <form className="flex space-x-4 relative items-center">
                        <input
                            type="text"
                            placeholder="Search for books..."
                            className="w-full border border-none  rounded-md py-2 px-6 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                        />
                        <button className="bg-primary absolute right-0 text-white py-3 px-5 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Search</button>
                    </form>
                </div> 
                <p className="text-[14px] font-light text-primary">Buy your first book <span className="font-bold text-secondary">-50%</span> and start reading now!</p>
            </div>
            <div className="relative">
                <Image src={HeroImage} alt="Cheap Books For College Banner" />
                <Image src={HeroImageTwo} alt="Cheap Books For College Banner" className="absolute top-10 left-10  " />
                <div className="absolute top-30 left-10 bg-secondary text-white p-4 rounded-lg shadow-md animate-float">
                    <p className="font-bold">Save up to 50%!</p>
                </div>
            </div>
        </div>
     
  )
}
