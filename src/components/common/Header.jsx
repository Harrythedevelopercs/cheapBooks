"use client";

import Image from "next/image";
import Topbar from "@/components/common/Topbar";
import Logo from "@assets/logo/cheapbooksforcollege-logo.png";
import Link from "next/link";
import { BsPersonCircle } from "react-icons/bs";
import { PiShoppingCartDuotone } from "react-icons/pi";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RiCloseCircleFill } from "react-icons/ri";


const Header = () => {
    const [navopen, setNavopen] = useState(false);
    return (
        <>
            <Topbar />
            <header className="bg-white">
                <div className="container py-4 mx-auto">
                    <div className="flex items-center justify-between ">
                        <div>
                            <Link href="/">
                                <Image
                                    src={Logo}
                                    alt="Cheap Books for College Logo"
                                    width={175}
                                    height="auto"
                                />
                            </Link>
                        </div>
                        <div className="hidden md:block">
                            <ul className="flex space-x-6 text-gray-700 items-start">
                                <li className="font-semibold"><Link href="/shop">Shop</Link></li>
                                <li className="font-semibold"><Link href="/Categories">Categories</Link></li>
                                <li className="font-semibold"><Link href="/faq">FAQ</Link></li>
                                <li className="font-semibold"><Link href="/account">Refund and Returns Policy</Link></li>
                                <li className="font-semibold"><Link href="/contact">Contact Us</Link></li>

                            </ul>
                        </div>
                        <div>
                            <ul className="flex space-x-6 text-gray-700 items-start">
                                <li className="font-semibold flex items-center space-x-4">

                                    <Link href="/shop" className="flex flex-col">
                                        <BsPersonCircle className="text-[30px] text-primary" />
                                    </Link>

                                    <Link href="/shop" className="flex flex-col relative">
                                        <PiShoppingCartDuotone className="text-[30px] text-primary" />
                                        <div className="text-xs text-white rounded-full flex items-center justify-center w-4.5 h-4.5 bg-secondary absolute -top-2 -right-2">2</div>
                                    </Link>

                                    <button
                                        onClick={() => setNavopen(!navopen)}
                                        className="md:hidden text-2xl z-[9999] relative"
                                    >
                                        {navopen ? <RiCloseCircleFill /> : <FaBars className="text-primary" />}
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className={`md:hidden  bg-white p-4  absolute w-[95%] left-0 right-0 mx-auto z-50 transform transition-all duration-300 ease-in-out overflow-hidden
                            ${navopen
                                ? "opacity-100 translate-y-0 max-h-96 mt-4 "
                                : "opacity-0 -translate-y-5 max-h-0 pointer-events-none"
                            }
                            `}
                    >
                        <ul className="flex flex-col space-y-4 text-gray-700">
                            <li className="font-semibold">
                                <Link href="/shop" className="hover:text-alpha" onClick={() => setNavopen(false)}>Shop</Link>
                            </li>
                            <li className="font-semibold">
                                <Link href="/Categories" className="hover:text-alpha" onClick={() => setNavopen(false)}>Categories</Link>
                            </li>
                            <li className="font-semibold">
                                <Link href="/faq" className="hover:text-alpha" onClick={() => setNavopen(false)}>FAQ</Link>
                            </li>
                            <li className="font-semibold">
                                <Link href="/account" className="hover:text-alpha" onClick={() => setNavopen(false)}>Refund and Returns Policy</Link>
                            </li>
                            <li className="font-semibold">
                                <Link href="/contact" className="hover:text-alpha" onClick={() => setNavopen(false)}>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </header>
        </>
    );
};

export default Header;