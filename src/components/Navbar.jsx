import Sidebar from './Sidebar'
import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom'
import AeroBookingIcon from './AeroBookingIcon';

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Lock scroll when sidebar open
  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  // ✅ Dynamic text color logic
  const getColor = () => {
    if (isMobile && open) return "white"; // 🔥 override color when sidebar open on mobile
    switch (location.pathname) {
      case "/": return "white";
      case "/destinations": return "black";
      case "/blog": return "white";
      case "/contact": return "black";
      case "/about": return "purple";
      case "/search": return "black";
      case "/partnership": return "white";
      case "/login": return "white";
      case "/sign-up": return "white";
      default: return "black";
    }
  };

  const imgBackColor = () => {
    switch (location.pathname) {
      case "/contact":
      case "/destinations":
      case "/search":
      case "/hotel":
        return "invert(1)";
      default:
        return "invert(0)";
    }
  };

  return (
    <div className="navbar">
      <header className="w-full bg-transparent">
        <nav className="max-w-8xl uppercase mx-auto py-0 px-0 sm:px-6 lg:px-8">
          <div className="parent">
            
            {/* DIV 1 */}
            <div style={{ color: getColor() }} className="div1 transition-colors duration-500 ease-in-out z-50 bg-transparent">
              <div className="flex sm:justify-between sm:p-4 text-base font-medium">
                <div className="flex justify-start">
                  <ul>
                    <li>Travel</li>
                    <li>Next.Level</li>
                  </ul>
                </div>
                <div className="hidden md:block">
                  <ul>
                    <li><Link to="/">Home</Link></li>
                    <Link to="/blog"><li>Blog</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                  </ul>
                </div>
                <div className="hidden md:block">
                  <ul>
                    <Link to="/destinations"><li>Destinations</li></Link>
                    <Link to="/hotel"><li>Hotel</li></Link>
                    <Link to="/partnership"><li>Partnership</li></Link>
                  </ul>
                </div>
              </div>
            </div>

            {/* DIV 2 */}
            <div className="div2 z-50 flex justify-center">
              <AeroBookingIcon />
            </div>

            {/* DIV 3 */}
            <div style={{ color: getColor() }} className="div3 transition-colors duration-500 ease-in-out z-40  bg-transparent py-3">
              <div className="flex sm:justify-between gap-2 p-2 ml-10 text-[13px]">
                <div className="text-base hidden md:flex font-medium">english</div>
                
                {/* MENU button */}
                <div className="md:hidden flex ">
                  <button
                    onClick={() => setOpen(!open)}
                    className="text-base font-medium z-50"
                  >
                    {open ? "CLOSE" : "MENU"}
                  </button>
                </div>

                {/* SIDEBAR */}
                <div
                  className={`fixed menu top-0 right-0 h-full w-full bg-black text-white md:hidden transform transition-all duration-500 ease-in-out origin-right z-40 ${
                    open
                      ? "translate-x-0 scale-100 opacity-100"
                      : "translate-x-full scale-90 opacity-0"
                  }`}
                >
                  <Sidebar />
                </div>

                {/* SEARCH + LOGIN */}
                <Link to="/search">
                  <div className="hidden md:flex items-center gap-2 text-base font-medium">
                    <img
                      style={{ filter: imgBackColor() }}
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/6713971095c4a7cab5d924ee/671aa53e3d420b8eb1880fc1_search_icon.svg"
                      alt="search icon"
                      className="w-5 h-5"
                    />
                    <span>seek</span>
                  </div>
                </Link>

                <div className="hidden md:block text-base font-medium">
                  <Link to="/login">login</Link>
                </div>
              </div>
            </div>

          </div>
        </nav>
      </header>
    </div>
  );
}
