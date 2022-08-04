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


function App() {
  return (
    <div>
      <div>
    <nav>
      <div className=' flex mt-5 ml-8 '>
  <img src={logo} alt='logo' className='w-10 h-[32px] pr-1 pt-1 mt-[3px]'  />
  <h2 className='text-[28px] leading-[42px] font-semibold ' >Payna</h2>
  </div>
    </nav>
    </div>
<div>
    <h1 className='text-[38px] w-[305px] leadin-[57px] font-bold ml-8 mt-5'>Manage payroll like an Expert</h1>

    <p className='text-4 leading-[32px] ml-8 mr-1 mt-2'>Payna is helping you to setting up the payroll without
required any finance skills or knowledge before</p>

<button className='bg-blue-400 py-2 px-6 rounded-full text-white ml-8 mt-6'>Get Started</button>
</div>

<div>
<h3 className='w-[240px] font-semibold text-4 leading-[24px] ml-8 mt-8 mb-4' >Trusted Global Companies</h3>
<div>
  <div className='flex  ml-8'>
   <img src={apple} alt='logo' className='w-[77px] h-[26px] mr-6'/>
   <img src={adobe} alt='logo'  className='w-[77px] h-[26px]'/>
   </div>

   <div className='flex ml-8 mt-6'>
   <img src={slack} alt='logo'  className='w-[77px] h-[26px] mr-6'/>
   <img src={spotify} alt='logo'  className='w-[77px] h-[26px]'/>
   <img src={google} alt='logo'  className='w-[77px] h-[26px]'/>
   
</div>
</div>

</div>

<section>
  <h3 className='text-red-400 text-4 leading-[24px] mt-[52px] font-bold text-center'>WORK BETTER</h3>
  <h1 className='text-center text-[36px] leading-[54px] font-bold'>For Your Business</h1>
  <div className=' w-[333px] ml-auto mr-auto'>
  <p className='text-4 leading-[32px] text-center mt-3'>We did research what your company needs and here we are providing
all of them just for you</p>
</div>

<div>
  <div className='flex justify-center mt-8'>
    <img src={share} alt='share' className=' w-[50px] h-[50px]'/>
    <div className='w-[220px] ml-8'>
      <h4>Share Insights</h4>
      <p>Working together with your
team to make decisions</p>
    </div>
  </div>
  <div className='flex justify-center mt-10'>
    <img src={offline} alt='share' className=' w-[50px] h-[50px]'/>
    <div className='w-[220px] ml-8'>
      <h4>Offline Mode</h4>
      <p>Use the feature while off
from internet? sure can</p>
    </div>
  </div>
  <div className='flex justify-center mt-10'>
    <img src={kanban} alt='share' className=' w-[50px] h-[50px]'/>
    <div className='w-[220px] ml-8'>
      <h4>Kanban Mode</h4>
      <p> Organize the report that
easy to be understand</p>
    </div>
  </div>
  <div className='flex justify-center mt-10'>
    <img src={track} alt='share' className=' w-[50px] h-[50px]'/>
    <div className='w-[220px] ml-8'>
      <h4>Track Leads</h4>
      <p>See where your money goes
and comes in business</p>
    </div>
  </div>
  <div className='flex justify-center mt-10'>
    <img src={show} alt='share' className=' w-[50px] h-[50px]'/>
    <div className='w-[220px] ml-8'>
      <h4>189 Country</h4>
      <p>Working together with your
team to make decisions</p>
    </div>
  </div>
  <div className='flex justify-center mt-10'>
    <img src={reward} alt='share'  className=' w-[50px] h-[50px]'/>
    <div className='w-[220px] ml-8'>
      <h4>Reward System</h4>
      <p>Motivate your team working
harder and receive a gift</p>
    </div>
  </div>
</div>

</section>

<div className=''>
  <img src={video} alt='video' className='w-[321px] h-[227px] ml-auto mr-auto mt-14'/>
</div>

<h3 className='text-red-400 text-4 leading-[24px] mt-[52px] font-bold text-center'>SAVE MORE TIME</h3>
<h1 className='text-[28px] leading-[42px] font-bold text-center'>And Boost Productivity</h1>
<p className='text-center text-4 leading-[32px] mt-4 w-[333px] ml-auto mr-auto'>Your employees can bring any success into your business, so we need to
take care of them</p>
<div className='text-center'>
<input placeholder='email address' className='w-[299px] [h-48px] bg-gray-200 text-gray-900 px-2 py-3 block mt-3 mr-auto ml-auto rounded-full'/>
<button  className='bg-blue-400 py-2 px-6 rounded-full text-white ml-auto mr-auto mt-2 w-[299px] h-[48px] mb-8'>Get Started</button>
</div>

    </div>
  );
}

export default App;
