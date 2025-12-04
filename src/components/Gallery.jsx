import React from 'react'
import Carousel from './Carousel'
import Booking from './Booking'
import Footer from './Footer'
import Read from './Read'
const Gallery = () => {
    const videos = [
        {
          src: "https://cdn.prod.website-files.com/6713971095c4a7cab5d924ee%2F6899a021d46b975a9ebecb31_istanbaul-transcode.mp4",
          alt: "Video 1"
        },{
          src: "https://cdn.prod.website-files.com/6713971095c4a7cab5d924ee%2F689703a353ff16d9834e5c44_hot%20air%20ballon-transcode.mp4",
          alt: "Video 1"
        },
            {
          src: "https://cdn.prod.website-files.com/6713971095c4a7cab5d924ee%2F68a2b3711c705d568fe577cb_japan%20tokyo-transcode.mp4",
          alt: "Video 1"
        },
                {
          src: "https://cdn.prod.website-files.com/6713971095c4a7cab5d924ee%2F6899a03f8f8f12637c0fa983_philipines-transcode.mp4",
          alt: "Video 1"
        },
    ]
        
        return (
    <div>
      <Read/>
      <div className=" mobile sm:flex mt-20 mb-20 gap-10 menu ">


  <div className="para p-8">
    <h1 className="text-[30px] sm:w-56 w-66  sm:text-4xl h-10 ">
  Moments to share</h1>
 
  </div>


  <div className="scrolling-image-column">
   <div className="parent10 w-full ">
  {videos.map((video, index) => (
    <video
      key={index}
      src={video.src}
      autoPlay
      loop
      muted
      playsInline
      className="w-[500px] h-[500px]  object-cover"
    />
  ))}
</div>

   
  </div>

</div>

<Footer/>

    </div>
  )
}

export default Gallery
