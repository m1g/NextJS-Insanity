import Link from "next/link";
import React from "react";
import Instagram from "~/icons/Instagram";
import Mail from "~/icons/Mail";
import Shop from "~/icons/Shop";
import Events from "~/icons/Events";
import logo from "./logo.jpg"


import MenuIcon from '../icons/Menu'


export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav className="nav w-full fixed flex items-center justify-between">
      <div className="container max-w-5xl mx-auto flex flex-wrap items-center justify-between pl-6 pr-6">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="/">
            <img className="nav-logo" src={logo.src} alt="site logo" />
          </Link>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
              <MenuIcon alt="FontAwesome Bars Icon" className="w-6 h-6 text-white" />
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex justify-end" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <Link
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="https://www.instagram.com/10flowersyoga/"
                target="_blank"
              >
                <Instagram alt="FontAwesome Mail Icon" className="w-6 h-6 text-white" /><span className="ml-2">Community</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="https://10flowersyoga.creator-spring.com"
                target="_blank"
              >
                <Shop alt="FontAwesome Shop Icon" className="w-6 h-6 text-white" /><span className="ml-2">Shop</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="http://www.eventbrite.com/o/81923064123"
                target="_blank"
              >
                <Events alt="FontAwesome Ticket Icon" className="w-6 h-6 text-white" /><span className="ml-2">Events</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="/contact"
              >
                <Mail alt="FontAwesome Mail Icon" className="w-6 h-6 text-white" /><span className="ml-2">Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}