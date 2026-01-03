import { HomeIcon } from "./ui/home"
import {GithubIcon} from "./ui/github"
import {LinkedinIcon} from "./ui/linkedin"
import {TwitterIcon} from "./ui/twitter"

export const Navbar = () => {
  return ( 
  <>
  
   <section className='font-serif h-10 max-w-4xl mt-4 fixed z-50 flex justify-evenly items-center text-white top-0 left-0 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg rounded-2xl mx-1 auto right-0  sm:w-[95vw] sm:mx-auto'>
        
        
        <nav className='h-full w-[75%]'>
          <ul className='h-full flex justify-evenly items-center text-[12px] xs:text-[14px] md:text-[16px] lg:text-[18px]'>
            
            <li><a href='#home'>
              {<HomeIcon size={20} />}
              </a></li>
            <li><a href='#home'>
              {<GithubIcon size={20} />}
              </a></li>
            <li><a href='#home'>
              {<LinkedinIcon size={20} />}
              </a></li> 
              <li><a href='#home'>
              {<TwitterIcon size={20} />}
              </a></li>  
          </ul>
        </nav>
      
        <button className='h-[80%] w-[20%] text-[10px] xs:text-[12px] rounded-2xl hover:bg-white/20 transition bg-linear-to-r    from-cyan-400 to-gray-900 mr-1 xs:w-[15%] xs:ml-4 md:text-[14px]'>SignUp</button>

      </section>

  </>
  )
}