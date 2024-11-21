// import React from 'react';

export default function Footer() {
  return (
    <main className="pt-[5rem] pb-[3rem] bg-blue-900">
      <div className="w-[80%] border-b-[1.2px] pb-[2rem] border-b-slate-500 mx-auto grid grid-cols-1 md:grid-cols-2 gap-[3rem]">
        {/* Left Side: Paragraph */}
        <div>
          <h1 className="text-[20px] sm:text-[30px] text-white font-extrabold">
            Nf<span className="text-yellow-300">tf</span>y
          </h1>
          <p className="text-[14px] text-white opacity-60 mt-[1rem]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente,
            accusamus laborum! Iure qui explicabo dicta expedita modi
            voluptatum, sunt voluptatibus odio quaerat, optio suscipit?
            Architecto optio distinctio perferendis eos officia?
          </p>
          <p className="text-[14px] mt-[1.4rem] text-white opacity-80">
            (670765) 7987 98-76876 info@example.com
          </p>
        </div>

        {/* Right Side: Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2rem]">
          {/* Information Section */}
          <div>
            <h1 className="text-[20px] text-white mb-[1.5rem]">Information</h1>
            <p className="footer-link">About us</p>
            <p className="footer-link">Privacy policy</p>
            <p className="footer-link">Wallet</p>
            <p className="footer-link">Bidding</p>
            <p className="footer-link">FAQ</p>
          </div>

          {/* Account Section */}
          <div>
            <h1 className="text-[20px] text-white mb-[1.5rem]">Account</h1>
            <p className="footer-link">Dashboard</p>
            <p className="footer-link">My Bidding</p>
            <p className="footer-link">My Wishlist</p>
            <p className="footer-link">Account Details</p>
            <p className="footer-link">FAQ</p>
          </div>

          {/* Shop Section */}
          <div>
            <h1 className="text-[20px] text-white mb-[1.5rem]">Shop</h1>
            <p className="footer-link">Affiliate</p>
            <p className="footer-link">Bestseller</p>
            <p className="footer-link">Wallet</p>
            <p className="footer-link">Bidding</p>
            <p className="footer-link">FAQ</p>
          </div>
        </div>
      </div>

      {/* Icons and Copyright Section */}
      <div className="mt-[2rem] flex flex-col sm:flex-row justify-between items-center w-[80%] mx-auto">
        <p className="text-[14px] text-white opacity-80">
          &#1654; Copyright WebDev 2024
        </p>
        <img
          src="/7.png"
          alt="Footer Icon"
          width={230}
          height={230}
          className="object-contain sm:ml-auto"
        />
      </div>
    </main>
  );
}