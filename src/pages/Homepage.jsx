import React from "react";
import cake from "../assets/images/cake.jpg";
import cake2 from "../assets/images/cakes2.jpg";
import cake3 from "../assets/images/cakes3.jpg";
import tiktok from "../assets/images/tiktok.png";
import youtube from "../assets/images/youtube.png";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import slice1 from "../assets/images/slice1.jpg";
import slice2 from "../assets/images/slice2.jpg";
import slice3 from "../assets/images/slice3.jpg";
import slice4 from "../assets/images/slice4.jpg";
import slice5 from "../assets/images/slice5.jpg";
import slice6 from "../assets/images/slice6.jpg";
import slice7 from "../assets/images/slice7.jpg";
import slice8 from "../assets/images/slice8.jpg";
import visa from "../assets/images/visa.png";
import mastercard from "../assets/images/master.png";
import americaExpress from "../assets/images/america.png";
import paypal from "../assets/images/paypal.png";
export default function Homepage() {
  return (
    <div className="w-full">
      <div className="h-screen bg-cover bg-center bg-[url('./assets/images/cake1.jpg')] relative">
        {/* HOMEPAGE */}
        <div className="bg-slate-900/30 backdrop-brightness-50 w-full h-screen">
          <div className="flex max-w-[1600px] mx-auto justify-between pt-10">
            <div className="text-white font-bolin text-2xl ml-4 lg:text-4xl">
              <h1 className="text-2xl text-center hidden md:block">THE CAKE</h1>
              <span className="hidden md:block"> BOUTIQUE</span>
            </div>
            <div className="list-none hidden lg:flex text-xs lg:text-base justify-centerfy-around items-center lg:ml-8 text-white">
              <li className="mr-10">SIGNATURE CAKES</li>
              <li className="mr-10">BESPOKE CAKES</li>
              <li className="mr-10">WEDDING CAKES</li>
              <li className="mr-10">CAKESICLES</li>
              <li className="mr-10">CHOCOLATES</li>
              <li className="mr-10">MASTER CLASSES</li>
            </div>
            <div className="hidden md:flex items-center text-white mr-4 md:mr-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                data-slot="icon"
                class="w-6 h-6 mr-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                data-slot="icon"
                class="w-6 h-6 mr-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                data-slot="icon"
                class="w-6 h-6 mr-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="font-cormorant text-6xl md:text-7xl lg:text-9xl capitalize text-white">
              Passion Craft
            </h1>
            <div className="mt-4">
              <button className="inline-block px-6 py-2 text-black bg-white hover:bg-[#797979] hover:text-white rounded-3xl font-medium text-lg md:xl lg:text-2xl">
                ORDER NOW
              </button>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 flex justify-center text-2xl mb-10">
            <button className="flex items-center justify-center text-white">
              MORE
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                data-slot="icon"
                class="w-6 h-6 ml-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* 3 CAKES */}
      <div className="bg-white px-4 lg:px-20 py-8 lg:py-20 lg:h-screen flex justify-center items-center font-cormorant">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-14">
          <div
            className="relative"
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <img
              src={cake2}
              alt="Image 1"
              className="w-full h-auto md:h-[500px] lg:h-[600px] shadow-2xl rounded-2xl transition duration-300 transform hover:opacity-80 hover:scale-105 cursor-pointer"
            />
            <h1 className="absolute bottom-0 left-0 right-0 text-white text-center text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-8 lg:mb-14 backdrop-brightness-50 py-2">
              Birthday Cakes
            </h1>
          </div>
          <div
            className="relative"
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <img
              src={cake}
              alt="Image 2"
              className="w-full h-auto md:h-[500px] lg:h-[600px] shadow-2xl rounded-2xl transition duration-300 transform hover:opacity-80 hover:scale-105 cursor-pointer"
            />
            <h1 className="absolute bottom-0 left-0 right-0 text-white text-center text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-8 lg:mb-14 backdrop-brightness-50 py-2">
              Wedding Cakes
            </h1>
          </div>
          <div
            className="relative"
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <img
              src={cake3}
              alt="Image 3"
              className="w-full h-auto md:h-[500px] lg:h-[600px] shadow-2xl rounded-2xl transition duration-300 transform hover:opacity-80 hover:scale-105 cursor-pointer"
            />
            <h1 className="absolute bottom-0 left-0 right-0 text-white text-center text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-8 lg:mb-14 backdrop-brightness-50 py-2">
              Christmas Cakes
            </h1>
          </div>
        </div>
      </div>

      {/* ABOUT THE CAKE BOUTIQUE */}
      <div className="bg-black text-white min-h-screen">
        <div className="p-8 md:p-16 lg:p-32 text-[#797979] text-center md:text-left font-cormorant">
          <h1 className="text-5xl md:text-8xl">About the</h1>
          <span className="text-5xl md:text-8xl">Cake Boutique</span>
        </div>
        <div className="px-8 md:pl-32 md:pr-40 lg:pr-56 text-lg md:text-xl lg:text-2xl leading-loose text-[#797979]">
          <p>
            The Cake Boutique combines craftsmanship and complexity into
            original cake design where delicious flavor and art are synonymous,
            bringing beauty into the most ordinary days. The Cake Boutique is
            Dubai’s first and only exclusively-online cake shop. Innovative and
            advanced beyond the cake design industry today, award-winning Cake
            Artist, Beth’s designs, are one-of-a-kind, featuring digitally
            sketched illustrations that are unique to the Waldorf Astoria DIFC.
          </p>
        </div>
      </div>

      {/* CAKES */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 m-4">
        <div
          class="w-full h-auto"
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <img src={slice1} alt="" class="w-full h-auto shadow-lg rounded-2xl transition duration-300 transform hover:opacity-80 hover:scale-105 cursor-pointer" />
        </div>
        <div
          class="w-full h-auto"
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <img src={slice2} alt="" class="w-full h-auto shadow-lg rounded-2xl transition duration-300 transform hover:opacity-80 hover:scale-105 cursor-pointer" />
        </div>
        <div
          class="w-full h-auto"
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <img src={slice3} alt="" class="w-full h-auto shadow-lg rounded-2xl transition duration-300 transform hover:opacity-80 hover:scale-105 cursor-pointer" />
        </div>
        <div
          class="w-full h-auto"
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <img src={slice4} alt="" class="w-full h-auto shadow-lg rounded-2xl transition duration-300 transform hover:opacity-80 hover:scale-105 cursor-pointer" />
        </div>
        <div
          class="w-full"
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <img src={slice5} alt="" class="w-full h-auto shadow-lg rounded-2xl transition duration-300 transform hover:opacity-80 hover:scale-105 cursor-pointer" />
        </div>
        <div
          class="w-full h-auto"
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <img src={slice6} alt="" class="w-full h-auto shadow-lg rounded-2xl transition duration-300 transform hover:opacity-80 hover:scale-105 cursor-pointer" />
        </div>
        <div
          class="w-full h-auto"
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <img src={slice7} alt="" class="w-full h-auto shadow-lg rounded-2xl transition duration-300 transform hover:opacity-80 hover:scale-105 cursor-pointer" />
        </div>
        <div
          class="w-full h-auto"
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <img src={slice8} alt="" class="w-full h-auto shadow-lg rounded-2xl transition duration-300 transform hover:opacity-80 hover:scale-105 cursor-pointer" />
        </div>
      </div>
      {/* CONTACT */}
      <div className="bg-black text-white md:pt-32">
        <div className="container mx-auto py-8 px-4 md:px-8 lg:px-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* NEWSLETTER */}
            <div className="flex flex-col text-[#797979]">
              <h1 className="text-xl md:text-2xl lg:text-3xl mb-4">
                Newsletter
              </h1>
              <div className="relative">
                <input
                  id="email"
                  type="text"
                  placeholder="Email Address"
                  className="bg-black text-lg border-b-2 my-2 w-56 peer px-5 pt-4 mt-6 placeholder-transparent text-white leading-loose focus:bg-[#525151]"
                />
                <label
                  for="email"
                  className="absolute left-0 top-7 px-5 text-[#a3a3a3] text-xs peer-placeholder-shown:text-base peer-placeholder-shown:text-[#8c8c8c] transition-all peer-placeholder-shown:top-10 peer-focus:top-7 peer-focus:text-[#a3a3a3] peer-focus:text-xs"
                >
                  Email Address
                </label>
              </div>
              <div className="relative">
                <input
                  id="firstname"
                  type="text"
                  placeholder="Email Address"
                  className="bg-black text-lg border-b-2 my-2 w-56 peer px-5 pt-4 mt-6 placeholder-transparent text-white leading-loose focus:bg-[#525151]"
                />
                <label
                  for="firstname"
                  className="absolute left-0 top-7 px-5 text-[#a3a3a3] text-xs peer-placeholder-shown:text-base peer-placeholder-shown:text-[#8c8c8c] transition-all peer-placeholder-shown:top-10 peer-focus:top-7 peer-focus:text-[#a3a3a3] peer-focus:text-xs"
                >
                  First Name
                </label>
              </div>
              <div className="relative">
                <input
                  id="lastname"
                  type="email"
                  placeholder="Email Address"
                  className="bg-black text-lg border-b-2 my-2 w-56 peer px-5 pt-4 mt-6 placeholder-transparent text-white leading-loose focus:bg-[#525151]"
                />
                <label
                  for="lastname"
                  className="absolute left-0 top-7 px-5 text-[#a3a3a3] text-xs peer-placeholder-shown:text-base peer-placeholder-shown:text-[#8c8c8c] transition-all peer-placeholder-shown:top-10 peer-focus:top-7 peer-focus:text-[#a3a3a3] peer-focus:text-xs"
                >
                  Last Name
                </label>
              </div>
              <div className="relative">
                <input
                  id="phone"
                  type="text"
                  placeholder="Email Address"
                  className="bg-black text-lg border-b-2 my-2 w-56 peer px-5 pt-4 mt-6 placeholder-transparent text-white leading-loose focus:bg-[#525151]"
                />
                <label
                  for="phone"
                  className="absolute left-0 top-7 px-5 text-[#a3a3a3] text-xs peer-placeholder-shown:text-base peer-placeholder-shown:text-[#8c8c8c] transition-all peer-placeholder-shown:top-10 peer-focus:top-7 peer-focus:text-[#a3a3a3] peer-focus:text-xs"
                >
                  Phone Number
                </label>
              </div>
              <div class="flex flex-col my-4 text-sm">
                <div className="mt-4 text-[#797979]">
                  <h1>Marketing Permissions</h1>
                </div>
                <div className=" text-[#797979] font-medium">
                  <input type="checkbox" className="mx-4" />
                  <label>Email</label>
                </div>
                <div className=" text-[#797979] font-medium">
                  <input type="checkbox" className="mx-4" />
                  <label>SMS</label>
                </div>
              </div>
              <div>
                <p className="text-[#797979] text-sm mb-4">
                  By signing up you are agreeing to receive the latest news and
                  exclusive offers from our restaurants
                </p>
              </div>
              <div>
                <button className="rounded-3xl font-medium text-black bg-white hover:bg-[#797979] hover:text-white py-2 px-8 mb-8 md:mb-4">
                  Subscribe
                </button>
              </div>
            </div>
            <div>
              {/* 2nd Column */}
              <div className="text-[#797979] text-xl md:text-2xl">
                <ul>
                  <li className="my-8 hover:border-b-2 border-transparent hover:border-white transition-colors duration-300 w-56 cursor-pointer">
                    Signature Cakes
                  </li>
                  <li className="my-8 hover:border-b-2 border-transparent hover:border-white transition-colors duration-300 w-56 cursor-pointer">
                    Bespoke Cakes
                  </li>
                  <li className="my-8 hover:border-b-2 border-transparent hover:border-white transition-colors duration-300 w-56 cursor-pointer">
                    Wedding Cakes
                  </li>
                  <li className="my-8 hover:border-b-2 border-transparent hover:border-white transition-colors duration-300 w-56 cursor-pointer">
                    Cakesicles
                  </li>
                  <li className="my-8 hover:border-b-2 border-transparent hover:border-white transition-colors duration-300 w-56 cursor-pointer">
                    Chocolates
                  </li>
                  <li className="my-8 hover:border-b-2 border-transparent hover:border-white transition-colors duration-300 w-56 cursor-pointer">
                    Master Classes
                  </li>
                </ul>
              </div>
            </div>
            <div>
              {/* 3rd Column */}
              <div className="text-[#797979] text-xl md:text-2xl">
                <ul>
                  <li className="my-8 hover:border-b-2 border-transparent hover:border-white transition-colors duration-300 w-56 cursor-pointer">
                    Payments And Delivery
                  </li>
                  <li className="my-8 hover:border-b-2 border-transparent hover:border-white transition-colors duration-300 w-56 cursor-pointer">
                    Help Center
                  </li>
                  <li className="my-8 hover:border-b-2 border-transparent hover:border-white transition-colors duration-300 w-56 cursor-pointer">
                    FAQs
                  </li>
                  <li className="my-8 hover:border-b-2 border-transparent hover:border-white transition-colors duration-300 w-56 cursor-pointer">
                    Contact Us
                  </li>
                </ul>
              </div>
              <div className="flex flex-row">
                <button>
                  <img
                    src={tiktok}
                    alt="tiktok"
                    className="w-10 h-10 bg-white rounded-full p-2 mr-8"
                  />
                </button>
                <button>
                  <img
                    src={youtube}
                    alt="youtube"
                    className="w-10 h-10 bg-white rounded-full p-2 mr-8"
                  />
                </button>
                <button>
                  <img
                    src={facebook}
                    alt="facebook"
                    className="w-10 h-10 bg-white rounded-full p-2 mr-8"
                  />
                </button>
                <button>
                  <img
                    src={instagram}
                    alt="instagram"
                    className="w-10 h-10 bg-white rounded-full p-2 mr-8"
                  />
                </button>
              </div>
              <div className="flex flex-row justify-around rounded-3xl bg-white px-6 w-64 mt-8">
                <div className="flex items-center justify-center">
                  <img
                    src={visa}
                    alt="VISA"
                    className="py-2 w-8 h-8 bg-white"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <img
                    src={mastercard}
                    alt="mastercard"
                    className="py-2 w-8 h-8 bg-white"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <img
                    src={americaExpress}
                    alt="america express"
                    className="py-2 w-8 h-8 bg-white"
                  />
                </div>
                <img src={paypal} alt="paypal" className="w-12 h-12 bg-white" />
              </div>
            </div>
          </div>
          <div className="text-center py-6">
            <h1>&copy; 2023 The Cake Boutique. All rights reserved.</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
