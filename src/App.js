import logo from './photos/header-logo.png'
import apple from "./photos/apple.png"
import adobe from './photos/Group.png'
import slack from "./photos/slack.png"
import spotify from "./photos/spotify.png"
import google from './photos/google.png'
import video from './photos/payna-video.png'
import share from './photos/share.png'
import offline from './photos/offline.png'
import kanban from './photos/kanban.png'
import reward from './photos/reward.png'
import track from './photos/track.png'
import show from './photos/show.png'
import woman from './photos/woman.png'


function App() {
  return (
    <div>
      <div>
    <nav>
      <div className=' sm:flex justify-between'>
      <div className=' flex mt-6 ml-8 lg:mt-5'>
  <img src={logo} alt='logo' className='w-10 h-[32px] pr-1 pt-2'  />
  <h2 className='text-[28px] leading-[38px] font-semibold ' >Payna</h2>
  </div>
  <ul className='hidden lg:flex mt-7' >
    <li className='pr-5 cursor-pointer'>Home</li>
    <li className='pr-5 cursor-pointer'>Features</li>
    <li className='pr-5 cursor-pointer'>Showcase</li>
    <li className='pr-5 cursor-pointer'>Pricing</li>
    
  </ul>
  <button className='bg-[#F5F6FB] mr-8 py-1 px-4 w-[130px] h-[38px] rounded-full mt-6 hidden sm:flex'  >sign in</button>
  </div>
    </nav>
    </div>
    <div className='lg:flex lg:mt-[100px] md:mt-[65px] md:flex md:justify-center'>
<div className='sm:text-center w-[442px] lg:text-left lg:ml-auto lg:mr-auto '>
  
    <h1 className='text-[38px] w-[305px]  font-bold ml-8 mt-5 sm:ml-auto sm:mr-auto lg:text-left md:text-center '>Manage payroll like an Expert</h1>

<div className='lg:ml-[69px]'>
    <p className='text-4 leading-[32px] ml-8 mr-1 mt-2 sm:ml-auto sm:mr-auto'>Payna is helping you to setting up the payroll without
required any finance skills or knowledge before</p>

<button className='bg-blue-400 py-2 px-6 rounded-full text-white ml-8 mt-6 sm:ml-auto sm:mr-auto'>Get Started</button>
</div>
</div>
<div className='lg:ml-auto lg:mr-auto'>
  <img src={woman} alt='woman' className='w-[460px] h-[320px hidden lg:flex'></img>
</div>
</div>

<div  className='sm:text-center lg:flex mt-6' >
<h3 className='w-[240px] font-semibold text-4 leading-[24px] ml-8 mt-8 mb-4 sm:ml-auto sm:mr-auto lg:mt-5' >Trusted Global Companies</h3>
<div className=' flex-row sm:hidden'>
  <div className='flex  ml-8 '>
   <img src={apple} alt='logo' className='w-[77px] h-[26px] mr-6'/>
   <img src={adobe} alt='logo'  className='w-[77px] h-[26px]'/>
   </div>
  

   <div className='flex ml-8 mt-6'>
   <img src={slack} alt='logo'  className='w-[77px] h-[26px] mr-6'/>
   <img src={spotify} alt='logo'  className='w-[77px] h-[26px]'/>
   <img src={google} alt='logo'  className='w-[77px] h-[26px]'/>
   
</div>
</div>
<div className=' flex-row hidden sm:flex lg:justify-center md:justify-center lg:items-center   lg:mr-auto ml-auto '>
  
   <img src={apple} alt='logo' className='w-[77px] h-[26px] mr-6'/>
   <img src={adobe} alt='logo'  className='w-[77px] h-[26px] mr-6'/>
   
  

   
   <img src={slack} alt='logo'  className='w-[77px] h-[26px] mr-6'/>
   <img src={spotify} alt='logo'  className='w-[77px] h-[26px]  mr-6'/>
   <img src={google} alt='logo'  className='w-[77px] h-[26px]  mr-6'/>
   

</div>

</div>

<section className=''>
  <h3 className='text-red-400 text-4 leading-[24px] mt-[52px] md:mt-[76px] font-bold text-center lg:mt-[88px]'>WORK BETTER</h3>
  <h1 className='text-center text-[36px] leading-[54px] font-bold'>For Your Business</h1>
  <div className=' w-[333px] ml-auto mr-auto'>
  <p className='text-4 leading-[32px] text-center mt-3'>We did research what your company needs and here we are providing
all of them just for you</p>
</div>

<div className='sm:mr-auto sm:ml-auto '>
  <div className='sm:flex justify-center'>
  <div className='flex justify-center mt-10 sm:w-276 sm:pr-4'>
    <img src={share} alt='share' className=' w-[50px] h-[50px]'/>
    <div className='w-[220px] ml-8'>
      <h4>Share Insights</h4>
      <p>Working together with your
team to make decisions</p>
    </div>
  </div>
  <div className='flex justify-center mt-10 sm:mt-10 sm:pl-4'>
    <img src={offline} alt='share' className=' w-[50px] h-[50px]'/>
    <div className='w-[220px] ml-8'>
      <h4>Offline Mode</h4>
      <p className='w-[185px]'>Use the feature while off
from internet? sure can</p>
    </div>
  </div>
  </div>
  <div className='sm:flex justify-center '>
  <div className='flex justify-center mt-10 sm:pr-4'>
    <img src={kanban} alt='share' className=' w-[50px] h-[50px]'/>
    <div className='w-[220px] ml-8'>
      <h4>Kanban Mode</h4>
      <p  className='w-[185px]'> Organize the report that
easy to be understand</p>
    </div>
  </div>
  <div className='flex justify-center mt-10 sm:pl-4'>
    <img src={track} alt='share' className=' w-[50px] h-[50px]'/>
    <div className='w-[220px] ml-8'>
      <h4>Track Leads</h4>
      <p  className='w-[185px]'>See where your money goes
and comes in business</p>
    </div>
  </div>
  </div>
  <div className='sm:flex justify-center'>
  <div className='flex justify-center mt-10 sm:pr-4'>
    <img src={show} alt='share' className=' w-[50px] h-[50px]'/>
    <div className='w-[220px] ml-8'>
      <h4>189 Country</h4>
      <p  className='w-[185px]'>Working together with your
team to make decisions</p>
    </div>
  </div>
  <div className='flex justify-center mt-10 sm:pl-4'>
    <img src={reward} alt='share'  className=' w-[50px] h-[50px]'/>
    <div className='w-[220px] ml-8'>
      <h4>Reward System</h4>
      <p  className='w-[185px]'>Motivate your team working
harder and receive a gift</p>
    </div>
    </div>
  </div>
</div>

</section>
<div className='lg:flex lg:justify-around lg:mt-8 '>
<div className=''>
  <img src={video} alt='video' className='w-[321px] h-[227px] lg:h-[370px] lg:w-[590px]  ml-auto mr-auto mt-14'/>
</div>
<div className='lg:pt-10 lg:ml-[-45px]'>
<h3 className='text-red-400 text-4 leading-[24px] mt-[52px] font-bold text-center'>SAVE MORE TIME</h3>
<h1 className='text-[28px] leading-[42px] font-bold text-center'>And Boost Productivity</h1>
<p className='text-center text-4 leading-[32px] mt-4 w-[333px] ml-auto mr-auto'>Your employees can bring any success into your business, so we need to
take care of them</p>
<div className='text-center'>
<input placeholder='email address' className='w-[299px] [h-48px] bg-[#F5F6FB] text-gray-900 px-2 py-3 block mt-3 mr-auto ml-auto rounded-full'/>
<button  className='bg-blue-400 py-2 px-6 rounded-full text-white ml-auto mr-auto mt-2 w-[299px] h-[48px] mb-8'>Get Started</button>
</div>
</div>
</div>
    </div>
  );
}

export default App;
