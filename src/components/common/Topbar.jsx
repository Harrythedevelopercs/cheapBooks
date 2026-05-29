import Link from 'next/link'
import React from 'react'
import { FaBoxOpen } from "react-icons/fa";
import { FaHeadphonesSimple } from "react-icons/fa6";

export default function Topbar() {
    return (
        <div className="bg-primary w-full ">
            <div className="container h-10 flex items-center justify-between px-4">
                <div className="flex space-x-4 justify-between">
                    <li className="text-white text-sm list-none font-light flex space-x-2 items-center">
                        <FaBoxOpen  />
                        <Link href="/track-order">Track Order</Link>
                    </li>
                    <li className="hidden md:block text-white text-sm list-none font-light">
                        <Link href="/about">About Us</Link>
                    </li>
                    <li className="hidden md:block text-white text-sm list-none font-light">
                        <Link href="/faq">FAQ</Link>
                    </li>
                </div>
                <div>
                    <li className="text-white text-sm list-none flex space-x-2 items-center">
                        <FaHeadphonesSimple className="sm:text-[26px] md:text-xl" />
                        <p className="hidden md:block text-white text-sm font-light">You can contact us 24/7</p>
                        <Link className="text-alpha text-sm font-medium" href="tel:(914) 312-4706">
                            (914) 312-4706
                        </Link>
                    </li>
                </div>
            </div>

        </div>
    )
}
