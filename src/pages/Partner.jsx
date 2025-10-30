import React, { useState } from "react";
import Footer from '../components/Footer'

const Partner = () => {
  const box =[
    {
      num:"1",
      p1:"Mehr verdienen bei jeder Buchung",
      p2:"Verdiene bis zu 15 % Provision bei jeder Buchung."
    },
     {
      num:"2",
      p1:"Exklusive Reiseangebote für Deine Community",
      p2:"Schalte einzigartige Rabatte und Angebote frei, die Du mit Deinen Followern teilen kannst."
    },
     {
      num:"3",
      p1:"Marketing-Tools, die auf Dich zugeschnitten sind",
      p2:"Nutze personalisierte Tools und Analysen, um Deine Reichweite zu steigern."
    },
     {
      num:"4",
      p1:"Teil einer florierenden Community sein",
      p2:"Vernetze Dich mit Gleichgesinnten, die Deine Leidenschaft fürs Reisen teilen.."
    }
  ]
  const para =[
    {
    point:"(a)Bewerbung",
    p:"Fülle das Bewerbungsformular aus und erzähle uns Deine Geschichte."
  },  {
    point:"(a)Bewerbung",
    p:"Fülle das Bewerbungsformular aus und erzähle uns Deine Geschichte."
  },  {
    point:"(a)Bewerbung",
    p:"Fülle das Bewerbungsformular aus und erzähle uns Deine Geschichte."
  }]
  const [openIndex, setOpenIndex] = useState(null);

const faq = [
  {
    num: "1.",
    heading: "Who can become a partner at Travel Next Level?",
    para: "Anyone who loves to travel, share their experiences, and capture memorable moments can join our program."
  },
  {
    num: "2.",
    heading: "How do I become an affiliate partner?",
    para: "It's super easy! Just sign up on our platform and complete the verification process to start promoting."
  },
  {
    num: "3.",
    heading: "How much is the commission and how is it calculated?",
    para: "Each partner receives up to 15% commission on successful bookings made through their referral links."
  },
  {
    num: "4.",
    heading: "How will I receive my payments?",
    para: "Payments are sent monthly via bank transfer or PayPal, depending on your preference."
  },
  {
    num: "5.",
    heading: "Can I track my referrals and earnings?",
    para: "Yes! Our dashboard allows you to monitor clicks, bookings, and total commissions in real-time."
  },
  {
    num: "6.",
    heading: "Are there any costs to join the partner program?",
    para: "Absolutely not! Joining our affiliate program is completely free and there are no hidden charges."
  },
  {
    num: "7.",
    heading: "What kind of marketing support is provided?",
    para: "We provide banners, creatives, social media assets, and dedicated tips to help you maximize your earnings."
  }
];

const social=[
  {
    url:"https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/676416867cd22a9484c63337_icon-1.avif"
,num:"50,000",
txt:"Followers"
  },
   {
    url:"https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/6764168f27b6f195ea0ba985_icon-2.avif"
,num:"1% - 500 bookings",
txt:"Engagement"
  },
   {
    url:"https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/67641698be2d2fb0d3e677ed_icon-3.avif"
,num:"2,500 EUR per booking",
txt:"Average booking value"
  },
   {
    url:"https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/6764169fa9093c1d86610be4_icon-4.avif"
,num:"175 EUR per booking",
txt:"Provisions"
  },
   {
    url:"https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/676416a74a1ce4ad6803df0f_icon-5.avif"
,num:"Imagine 10%",
txt:"Only 1%"
  },
   {
    url:"https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/676416aea1aecc29b34e0109_icon-6.avif"
,num:"13,125 EUR",
txt:"earning"
  },

]
  return (
  <div className='overflow-x-hidden'>
     <div className='bg-white w-full menu h-screen'>
    <video
    src="/video/back4.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-[100vh] object-cover"
  ></video>
<div className="absolute top-48  left-0 w-full flex justify-between px-8 underline text-white text-xl font-semibold">
  <h1>Elevate Your Influence</h1>
  <h1>Elevate Your Impact</h1>
</div>

       {/* Main headline */}
<div className="absolute bottom-28 left-0 px-10 text-white font-semibold text-start">
  <span className="text-3xl sm:text-6xl leading-tight">
    Become a Travel<br />Next Level Partner
  </span>
</div>


{/* Button below the headline */}
<div className="absolute bottom-10  left-0 px-10  text-white font-semibold">
  <button className="rounded bg-white text-black w-[140px] h-[45px] border border-transparent hover:bg-transparent hover:text-white hover:border-white transition-all">
   Apply Now
  </button>
</div>

    </div>
<section className="relative w-full h-screen menu">
  {/* Background image */}
  <img
   loading="lazy"
    className="w-full scale-x-[-1] h-full object-cover"
    src="https://cdn.pixabay.com/photo/2021/06/21/08/09/aircraft-6352940_1280.jpg"
    alt="tail"
  />

  {/* Text overlay container */}
  <div className="absolute inset-0 flex flex-col justify-between text-right text-white px-10 py-12 max-w-md ml-auto">
    {/* Top heading */}
    <h1 className="text-3xl sm:text-5xl font-bold">
      Why Partner <br /> with Us?
    </h1>

    {/* Bottom paragraph */}
    <p className="text-sm sm:text-2xl font-medium leading-relaxed opacity-90">
      At Travel Next Level, we empower influencers and creators of all scales with tools to
      monetize their passion for exploration. Our program is simple, transparent, and designed
      to maximize your earnings.
    </p>
  </div>
</section>
<section className='relative grid sm:grid-cols-4 w-full  menu'>
  {box.map((n)=>(
<div class='border-t sm:border-r border-stone-500 p-9 flex flex-col items-start justify-start'>
    <span class='bg-black text-white w-15 h-15 p-4 rounded-full flex items-center justify-center text-3xl font-bold'>{n.num}</span>
    <h1 class='mt-8 text-center'>{n.p1}</h1>
    <h2 class='mt-28 text-center'>{n.p2}</h2>
</div>
  ))}


</section>
<section>
  <div className='grid mt-0  sm:grid-cols-2 gap-0 w-full '>
<div className='w-full p-4 border-t menu'>
<h1 className='text-3xl sm:text-6xl'>How it Works</h1>
<h2 className='border-b'>Three simple steps to start your journey</h2>
{para.map((p)=>(
<div className='border-b'>
  <h1>{p.point}</h1>
  <p>{p.p}</p>
</div>
))}


 <button className="rounded mt-2 sm:m-4 bg-black text-white w-full sm:w-[140px] h-[45px] border border-transparent hover:bg-black/90  transition-all">
   Apply Now
  </button>
</div>
<img  loading="lazy" className='w-full' src="https://cdn.prod.website-files.com/6713971095c4a7cab5d924ee/67640e85df5efbb671d5a129_how_it_work.avif" alt="greenry" />
  </div>
</section>
<section className="relative p-4  ipad3 sm:w-[80%] sm:ml-auto  menu">
 <div> <h1 className="text-3xl sm:text-7xl mb-4 sm:w-[40%]">What Makes Travel  Next Level Different?
</h1>
<p className="text-xl sm:text-3xl  sm:w-[40%]">Unlike other affiliate programs, our
payouts have no limit. The more you
influence, the more you earn. Even with a
modest following, you can achieve
significant payouts.</p></div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 ">
{social.map((s, index) => (
  <div key={index} className=" p-4 ">
  <div>  <img  loading="lazy"
      className="bg-black text-white w-16 h-16 p-4 rounded-full text-3xl font-bold"
      src={s.url}
      alt=""
    />
    <h1 className="text-gray-400">{s.txt}</h1>
    <h1 className="text-black">{s.num}</h1></div>
  </div>
))}


</div>
</section>
<section className="relative w-full h-screen menu">
  {/* Background image */}
  <img  loading="lazy"
    className="w-full  h-full object-cover"
    src="https://cdn.pixabay.com/photo/2017/01/06/17/28/road-1958388_1280.jpg "
    alt="road girl"
  />

  {/* Text overlay container */}
  <div className="absolute inset-0  text-right text-white px-10 py-12 max-w-md mr-auto">
    {/* Top heading */}
    <h1 className="text-3xl sm:text-5xl font-bold">
   Become Part of Our Success Story
    </h1>

 <button className="rounded mt-2 sm:m-4 bg-white text-black w-full sm:w-[140px] h-[45px] border border-transparent   transition-all">
   Apply Now
  </button>
    {/* Bottom paragraph */}
   
  </div>

  
 <div className="absolute bottom-4 right-8 text-white p-10 max-w-md">
  <p className="text-sm sm:text-3xl font-bold leading-relaxed opacity-90">
   Join a growing network of passionate travelers and creators turning their love for exploration into rewarding opportunities. Be the next to share your success and inspire others on their journey.
  </p>
</div>

  
</section>

<section>
  <div className='grid sm:mt-12 mt-18 ipad4  sm:grid-cols-2 gap-0 w-full sm:h-screen'>
<div className='w-full p-4  menu'>
<h1 className='text-8xl'>faq</h1>
</div>
 <div className="w-full">
      {faq.map((f, index) => (
        <div key={index} className="flex justify-between menu border-t p-4">
          <div>
            <h1>
              <span>{f.num}</span> {f.heading}
            </h1>

            {/* Only show paragraph if this index is open */}
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{f.para}</p>
            )}
          </div>

          <div>
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              } // toggle only this item
              title="Toggle"
              className="group cursor-pointer outline-none duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                className="stroke-black fill-none group-active:duration-0 duration-300"
              >
                <path d="M8 12H16" strokeWidth="1.5"></path>
                <path
                  d="M12 16V8"
                  strokeWidth="1.5"
                  className={openIndex === index ? "hidden" : "block"}
                ></path>
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
<section>
  <h1 className="text-4xl sm:text-8xl menu px-4">Apply Now to Join <br/> Our Partner Network</h1>
  <h2 className="menu px-4">*fill the form</h2>
      <div className="sm:px-4 p-4 pt-3 pb-6 space-y-3">
        <div className="space-x-3 sm:flex justify-between ">
            <div className='  w-full'>
               <label className="block menu mb-2 text-sm font-medium text-gray-900">
          Full name*

              </label>
          <input type="text" placeholder="Enter full name"  className=" w-full rounded text-md px-2 py-2 outline-none bg-gray-200 " />
       </div>  <div className='w-full'>
        <label className="block menu mb-2 text-sm font-medium text-gray-900">
             
E-mail* Address*
              </label>
          <input type="text" placeholder="Enter email-addresss"  className=" w-full rounded  text-md px-2 py-2 outline-none bg-gray-200 focus:placeholder-gray-500" />
      </div>  </div>
       <div className="space-x-3 sm:flex justify-between ">
            <div className='  w-full'>
               <label className="block menu mb-2 text-sm font-medium text-gray-900">
          Social Media Link*

              </label>
          <input type="text" placeholder="http://" className=" w-full rounded text-md px-2 py-2 outline-none bg-gray-200 " />
       </div>  <div className='w-full'>
        <label className="block menu mb-2 text-sm font-medium text-gray-900">
             
Additional Social Media Link(opacity)
              </label>
          <input type="text" placeholder="http://"   className=" w-full rounded  text-md px-2 py-2 outline-none bg-gray-200 focus:placeholder-gray-500" />
      </div>  </div>
        <div>
         
        </div>
      
     
     
        <div className="text-start">
         <label for="textarea" className="menu">Brief Description of your Audience*</label>
          <textarea   placeholder="Write discription" name="textarea" id="textarea" className="w-full rounded text-md px-2 py-2 outline-none bg-gray-200 focus:placeholder-gray-500" rows="10" cols="50" required="">          </textarea>
        </div>
        <div className="flex justify-end">
     <button className="rounded bg-black text-white w-full menu sm:w-3/7 h-[40px]">
                Submit your application
              </button>
        </div>
     
      </div>
</section>
<section>
  <Footer/>
</section>
  </div>
  )
}

export default Partner
