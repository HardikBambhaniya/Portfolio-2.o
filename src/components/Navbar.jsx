import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {HomeIcon} from "./ui/home";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`
        fixed top-0 left-1/2 -translate-x-1/2 z-50
        font-montserrat text-white
        

        sm:w-[95vw]
        px-2

        transition-all
        duration-800 ease-[cubic-bezier(0.22,1,0.36,1)]

        ${
          scrolled
            ? "mt-4 scale-[0.96] shadow-lg backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl"
            : "mt-0 scale-100 shadow-none rounded-none"
        }
      `}
    >
      <nav className="h-12 w-screen flex items-center justify-center">
        <ul className="flex w-full justify-evenly text-[12px] font-extrabold xs:text-[14px] md:text-[16px] lg:text-[18px]">
          
          <li><Link to={"/project"} >Projects</Link></li>
          <li><Link to={"/experience"} >Experience</Link></li>
          <li><Link to={"/Education"}>Education</Link></li>
        </ul>
      </nav>
    </section>
  );
};
