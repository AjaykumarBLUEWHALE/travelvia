import { Link } from 'react-router-dom'
const Sidebar = () => {

  return (
  <>
  

          {/* Sidebar */}
        
            {/* Close button inside sidebar */}
      
               
     

            {/* Sidebar menu items */}
            
            <div className="flex flex-col mt-17  space-y-0 px-4 ">
              <div className="px-3 py-0 text-5xl opacity-50 "><a href="/">Home</a></div>
              <div className="px-3 py-0 text-5xl  "><a href="/destinations">Destinations</a></div>
              <div className="px-3 py-0 text-5xl  "><a href="/hotel">Hotel</a></div>
              <div className="px-3 py-0 text-5xl  "><a href="/partnership">Partnership</a></div>
              <div className="px-3 py-0 text-5xl  "><a href="/blog">Blog</a></div>
              <div className="px-3 py-0  text-5xl "><a href="/contact">Contact</a></div>
           <div className="parent4">
  <div className="px-3 py-1 text-base font-medium opacity-50">
    socials
  </div>
  <div className="px-3 py-0 text-[17px] ">
    <ul>
      <li>
        <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer">
          pinterest
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/zackzyrical/" target="_blank" rel="noopener noreferrer">
          instagram
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/@Zackzyrical" target="_blank" rel="noopener noreferrer">
          youtube
        </a>
      </li>
      <li>
        <a href="" target="_blank" rel="noopener noreferrer">
          facebook
        </a>
      </li>
      <li>
        <a href="https://x.com/ZZyrical" target="_blank" rel="noopener noreferrer">
          x
        </a>
      </li>
    </ul>
  </div>
</div>

         
            </div>
     <div className='mt-6'>
        <div class="border flex justify-between   space-y-4 p-3 ">
<div>
 <a href="/search">
<img  loading="lazy" 
 src="https://cdn.prod.website-files.com/6713971095c4a7cab5d924ee/671aa53e3d420b8eb1880fc1_search_icon.svg" 
alt="search" className='p-2' /></a></div>
<div className='text-5xl'><a href="/search">Search</a></div>
</div>
<div className=' flex justify-between space-y-0  text-5xl'>
 
<div className=' text-5xl p-3 w-1/2 border-r '><a href="/login">log in</a></div>
<div className=' text-5xl p-3 '><a href="/sign-up">sign in</a></div>
</div>   
     </div>
  </>
  )
}

export default Sidebar
