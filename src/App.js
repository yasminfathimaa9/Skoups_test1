import React from 'react';

  
import './App.css';
import FlightIcon from '@mui/icons-material/Flight';
import HotelIcon from '@mui/icons-material/Hotel';
import MoveUpIcon from '@mui/icons-material/MoveUp';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';

import CarRentalIcon from '@mui/icons-material/CarRental';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
 import BookingImg from "./Booking";
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';

import ReactCalendar from './Calender';

function App() {

  
  return (
    <div>
      <ul>
      <div className='services'>
        <li>
        <a href="#">

      <FlightIcon  />
      <div className='name'>Flights</div>
      </a>
      </li>
      
      <div className='services'></div>
      <li>
        <a href="#">

  <HotelIcon
      />
      <div className='name'>Hotels</div>
      </a>
      </li>
      <div className='services'></div>
        <li>
        <a href="#">

      <FlightIcon  /> <HotelIcon
      />
      <div className='name'>Flights + Hotels</div>
      </a>
      </li>
      


      <div className='services'></div>
      <li>
        <a href="#">

  <MoveUpIcon
      />
      <div className='name'>Transfer</div>
      </a>
      </li>
      <div className='services'></div>
      <li>
        <a href="#">

        < LocalActivityIcon />
      
      <div className='name'>Activities</div>
      </a>
      </li>
      <div className='services'></div>
      <li>
        <a href="#">

     
      <SportsBasketballIcon />
      
      <div className='name'>Sports</div>
      </a>
      </li>
      <div className='services'></div>
      <li>
        <a href="#">

     
        <CarRentalIcon />
      
      <div className='name'>Car rental</div>
      </a>
      </li>
      </div>
</ul>


  
<div>
<img src="https://images.unsplash.com/photo-1488188840666-e2308741a62f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80"  width="1160px" height="450px"/>
</div>
<div className='container'>
  <div className='box'>
    
    <button className='btn'>ONE WAY</button>
    <button>ROUND TRIP</button>
    <button>MULTI-DESTINATION</button>
    
    <div className='container1'>
      <p>From</p>
      <h3>Kuwait</h3>
      
    </div>
    <div className='arrow'><CompareArrowsOutlinedIcon /></div>
    <div className='container2'>
      <p>To</p>
      <h3>Bengaluru</h3>
      </div>
      <div className='container3'>
      <p>Departure</p>
      <h3>08,<span>Feb,Tue</span></h3>
      </div>
      
      <div className='container4'>
      <p>Return</p>
      <h3>12,<span>Feb,Sat</span></h3>
      <div className='cal'>
      <ReactCalendar />
      </div>
       
      </div>
     
      <div className='container5'>
      <p>Class</p>
    
      <h3>Premium Ec...</h3>
      
  

      </div>
      
      <div className='container6'>
      <p>No of passenger </p>
      <h3>01 </h3>
      </div>
      
  
  <div className='select'>
  <form action ="" >
    <input type="checkbox" className='check'/>
    <label for="non stop" className='check1'>Non Stop Flights</label>  </form>
    <div class="dropdown">
  <button class="dropbtn">Select Airlines </button>
  <div class="dropdown-content">
  <a href="#">Select Airlines</a>
  <a href="#">Emirates</a>
  <a href="#">Kuwait Airways</a>
  <a href="#">Qatar Airaway</a>
  <a href="#">Middle Eat Airlines</a>
  
  </div>

  <form action="">
    <input type="checkbox" className="check3" />
    <label for="chec" className="check4" >My dates are flexible(+/-2 days)</label>
  </form>
  <button className='searchbtn'>Search</button>
</div>


</div>

  </div>  
</div>
<div>
</div>
<div className='deals'>
  <main className='topdeals'>Top flight deals For you</main>
  <div class="change">
  <section className="one">
   <p className="ku"> KW<br/>
    Kuwait<br/>
    18,JAN,2022<br/> 
    </p>
    <div className='arrow1'><CompareArrowsOutlinedIcon /></div>
  <p className="side">
    BLR<br />
    BANGALORE<br/>
    18,JAN,2022
  </p>
  <p className='side1'>
    KD <br/>
   <span className='red'>102</span>
  </p>
  </section>
  <div>
  <section className="one">
   <p className="ku"> KW<br/>
    Kuwait<br/>
    18,JAN,2022<br/> 
    </p>
    
    <div className='arrow2'><CompareArrowsOutlinedIcon /></div>
  
  <div><p className="side2">
    BLR<br />
    BANGALORE<br/>
    18,JAN,2022
  </p>
  <p className='side3'>
    KD<br/ >
   <span className='red'>102</span>
  </p>
  </div>
  </section>
  </div>
  <div><section className="one">
   <p className="ku"> KW<br/>
    Kuwait<br/>
    18,JAN,2022<br/> 
    </p>
    <div className='arrow3'><CompareArrowsOutlinedIcon /></div>
  <p className="side5">
    BLR<br />
    BANGALORE<br/>
    18,JAN,2022
  </p>
  <p className='side6'>
    KD<br/ >
   <span className='red'>102</span>
  </p>
  </section></div>
<div><section className="two">
   <p className="ku"> KW<br/>
    Kuwait<br/>
    18,JAN,2022<br/> 
    </p>
    {/* <div className='arrow5'><CompareArrowsOutlinedIcon /></div> */}
  <p className="side7">
    BLR<br />
    BANGALORE<br/>
    18,JAN,2022
  </p>
  <p className='side8'>
    KD<br/ >
   <span className='red'>102</span>
  </p>
  </section>
  </div>
  <div><section className="two">
   <p className="ku"> KW<br/>
    Kuwait<br/>
    18,JAN,2022<br/> 
    </p>
    <div className='arrow4'><CompareArrowsOutlinedIcon /></div>
  <p className="side9">
    BLR<br />
    BANGALORE<br/>
    18,JAN,2022
  </p>
  <p className='side10'>
    KD<br/ >
   <span className='red'>102</span>
  </p>
  </section>
  </div>
  
   
    
  {/* <p className="side">
    BLR<br />
    BANGALORE<br/>
    18,JAN,2022
  </p>
  <p className='side'>
    KD<br/ >
   <span className='red'>102</span>
  </p> */}
  
  </div>
  <div>
    <div className='inspire'>
    Inspire & Explore</div>
    
   <iframe width="460" height="300" src="https://www.youtube.com/embed/PFjp1MW6Lzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   
   <blockquote>
<p className='about'>
It is a nice clip. it focussed on the lives of paper bicycle boys  and how they distribute papers to the people in the community. .the most interesting part is that it showed humanity in bicycle boy as he read the newspaper for the blind person who listens to him with curiosity in the climax . i thank zoola dubes for presenting a such a wonderful movie. super script . in my opinion  we should be nice to the people who are needy in the society.
</p>
<button className='explore'> Explore Now</button> 

</blockquote>
    </div>
    <div class="color">
    <h3 className='popular'>Popular Destination</h3>
    <div className='dest'>
     

    <BookingImg
    src="https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8&w=1000&q=80" />
   
    <BookingImg
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjSeHS-uQMaAGjPNuZyiLrfaVfbcdo7Trx6g&usqp=CAU"
    />
    
    <BookingImg
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuY5REyWTMzPIUEgUIVL88wxVJ2RcEY8QqCQ&usqp=CAU"
     />
     <BookingImg
     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpxa3KMFShh9x2i31YA8uXdAEmqUyJ_VjkxQ&usqp=CAU"
     />
      </div>
     <div className='des2'>
     
     <BookingImg 
     src="https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1635501546_3_1.jpg"
     />
     
     <BookingImg
     src="https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
     />
     <BookingImg 
     src="https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1635501546_3_1.jpg"
     />
     <BookingImg 
     src="https://images.memphistours.com/large/642582268_7.jpg"
     />

    
     </div>
     <div>
     <button className="lastbtn">View All Destinations</button>
     </div>
     </div>
     
    <div className='grad'>

      <div className="email">
<h4>Enter Your Email Adress And Subscribe to get Latest Deals</h4>
        <input type="text" placeholder='Enter Email address' className='lastbtn2'/><button className='lastbtn1'>Subscribe</button>
      </div>
      </div> 
      
   </div>
  
   
  </div> 
 
  
 
  
  


  );
}

export default App;
