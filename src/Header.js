import React from "react";
import img1 from './Images/icons/Vector.jpg';
import img2 from "./Images/icons/arabic.jpg";
import img3 from './Images/icons/Vector2.jpg';
import img4 from "./Images/icons/unsplash.jpg";
import img5 from "./Images/icons/Vector3.jpg" ;
import img6 from "./Images/icons/Vector4.jpg" ;
import img7 from "./Images/icons/Vector5.jpg" ;
import img8 from "./Images/icons/Vector6.jpg" ;
import img9 from "./Images/icons/Vector7.jpg" ;
import img10 from "./Images/icons/Vector8.jpg" ;
import img11 from "./Images/icons/Vector9.jpg" ;
import img12 from "./Images/icons/Vector10.jpg" ;
import img13 from "./Images/icons/Vector11.jpg" ;
import img14 from './Images/icons/unsplash2.jpg';
import img15 from './Images/icons/unsplash3.jpg';
import img16 from './Images/icons/unsplash4.jpg';
import img17 from './Images/icons/unsplash5.jpg';
import img18 from './Images/icons/unsplas6.jpg';
import img19 from './Images/icons/unsplash7.jpg';
import img20 from './Images/icons/unsplas8.jpg';
import img21 from './Images/icons/unsplash9.jpg';
import img22 from './Images/icons/unsplash10.jpg';


import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import Dest from "./Dest";
import  ReactCalendar from "./Cal";
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';

function Header() {
    
  return(
        <>

        <div className='container-one'>
         
<img className="img1" src={img1} alt="img1"/>
<p className="alghanium">Alghanium Travels</p>

<ul>
    <li>Home</li>
    <li>Packages</li>
    <li>Hot Deals</li>
</ul>

<img className="img2" src={img2} alt="img2"/>
<img className="img3" src={img3} alt = "img3"/>
<p className="login">Login/Sign Up</p>

</div>

<div>

<img className="img4" src={img4} alt="img4"/>

<div className="container-two"> 
    <img  className="img5" src={img5} alt="img5" /><p style={{position:"absolute", top:"40px",left:"5%",fontSize:"10px"}}>Flights</p>

    <img className="img6" src={img6} alt="img5" /><p style={{position:"absolute", top:"40px",left:"15%" ,fontSize:"10px"}}> Hotels</p>
    <img className="img7" src={img5} alt="img5" />

    <img className="img8" src={img6} alt="img5" /><p style={{position:"absolute", top:"40px",left:"27%", fontSize:"10px"}}>Flights + Hotels</p>
    <img className="img9" src={img7} alt="img5" /><p style={{position:"absolute", top:"40px",left:"45%", fontSize:"10px"}}></p>
    <img className="img10" src={img8} alt="img5" /><p style={{position:"absolute", top:"40px",left:"43%", fontSize:"10px"}}>Transfers</p>
    <img className="img11" src={img9} alt="img5" /><p style={{position:"absolute", top:"40px",left:"52%",fontSize:"10px"}}>Activities</p>
    <img className="img12" src={img10} alt="img5" /><p style={{position:"absolute", top:"40px",left:"62%",fontSize:"10px"}}>Insurance</p>

    <img  className="img13" src={img11} alt="img5" /><p style={{position:"absolute", top:"40px",left:"72%",fontSize:"10px"}}>Cruise</p>
    <img  className="img14"src={img12} alt="img5" /><p style={{position:"absolute", top:"40px",left:"81%",fontSize:"10px"}}>Sports</p>
    <img  className="img15" src={img13} alt="img5" /><p style={{position:"absolute", top:"40px",left:"90%",fontSize:"10px"}}>Car rental</p>
    <div className="container-three" >


        <button className="btn">ONE WAY</button>
        <button>ROUND TRIP</button>
        <button>MULTI DESTINAION</button>
        <div className="dest">
        <Dest className="dest1" id="from"
        name="KUWAIT" /><CompareArrowsIcon className="arrow"/>
        <Dest className="dest1" id="To"
        name="Bengaluru" />
        <Dest className="dest1" id="Departure"
        name="08,Feb,Tue" />
        <Dest className="dest1" id="Return"
        name="12,Feb,Sat" /> 
        <Dest className="dest1" id="class"
        name="Premium Ec..." />
 

        <Dest className="dest1" id="No Of Passenger"
        name="01 v" />
        </div>
        
      
<input type="checkbox" className="inp1"/><label for=""  className="inpt" >Non-stop Flight</label>
<div className='select'>
  
   
    <div class="dropdown">
  <button class="dropbtn">Select Airlines v</button>
  <div class="dropdown-content">
  <a href="#">Select Airlines</a>
  <a href="#">Emirates</a>
  <a href="#">Kuwait Airways</a>
  <a href="#">Qatar Airaway</a>
  <a href="#">Middle East Airlines</a>
  <a href="#">Royal Jordanian Airlines</a>

  </div>
  
<div className="check">
  <form action="">
    <input type="checkbox" className="check3" />
    <label for="chec" className="check4" >My dates are flexible(+/-2 days)</label>
  </form>
  <button className='searchbtn'>Search</button>
 
</div>

</div>

<ReactCalendar />
</div>


    </div>
   



</div>
<div>
    <div className="container-five">
        <h2>Top Flight Deals For You</h2>
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
  
  </div>

    </div>

    <div>
        <div className="container-six">

          <h2>  Inspire & explore</h2>

<img src={img14} alt="img14"/>


<p className="inspire">Interlaken is a traditional resort town in the mountainous Bernese Oberland region of central Switzerland. Built on a narrow stretch of valley, between the emerald-colored waters of Lake Thun and Lake Brienz, it has old timber houses and parkland on either side of the Aare River. Its surrounding mountains, with dense forests, alpine meadows and glaciers, has numerous hiking and skiing trails</p>


<div>
<div className="container-seven">
                <h2>Popular Destinations</h2>
                
                <img src={img15} style={{width:"292px",height:"297px",padding:"10px"}} alt="img15"/>
                <img src={img16} style={{width:"292px",height:"297px",padding:"10px"}} alt="img16"/>
                <img src={img17} style={{width:"292px",height:"297px",padding:"10px"}} alt="img17"/>
                <img src={img18} style={{width:"292px",height:"297px",padding:"10px"}} alt="img18"/>
                <img src={img19} style={{width:"292px",height:"297px",padding:"10px"}} alt="img19"/>
                <img src={img20} style={{width:"292px",height:"297px",padding:"10px"}} alt="img20"/>
                <img src={img21} style={{width:"292px",height:"297px",padding:"10px"}} alt="img21"/>
                <img src={img22} style={{width:"292px",height:"297px",padding:"10px"}} alt="img22"/>
                
               
       <button className="btn2">View All Destiations</button>
            </div>
        </div>

        <div>
            <div className="container-eight">
                <div className="grad">
            <h4>Enter Your Email Adress And Subscribe to get Latest Deals</h4>
        <input type="text" placeholder='Enter Email address' className='lastbtn2'/><button className='lastbtn1'>Subscribe</button>
           
            </div>
            <p className="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi turpis tincidunt pellentesque augue. Dui amet habitasse sit ridiculus tristique pellentesque lacus euismod nulla. Vel non a neque nisl, phasellus neque porta. Vivamus interdum egestas scelerisque amet. </p>
            <p className="small"> Aliquam malesuada dignissim amet, orci eu enim. Ut velit nibh ac sit lectus enim mauris. Turpis odio faucibus proin nec amet egestas. Sed fermentum lorem posuere pellentesque sit. Egestas mi fermentum sollicitudin felis ornare feugiat ultrices molestie dui. Duis aliquet pharetra elementum quisque etiam mattis viverra blandit. Nisi, rutrum condimentum quis quam quam eget amet. Diam sed elementum massa ut. Sed tortor elit phasellus venenatis, turpis pellentesque euismod. Eget ornare id sed auctor gravida viverra at. Et egestas elementum eu non sit at libero viverra molestie. Scelerisque nunc vel nec, amet. Pellentesque iaculis sed integer aliquet sit quis turpis eget. </p>
            <p className="small">Aliquam malesuada dignissim amet, orci eu enim. Ut velit nibh ac sit lectus enim mauris. Turpis odio faucibus proin nec amet egestas. Sed fermentum lorem posuere pellentesque sit. Egestas mi fermentum sollicitudin felis ornare feugiat ultrices molestie dui. Duis aliquet pharetra elementum quisque etiam mattis viverra blandit. Nisi, rutrum condimentum quis quam quam eget amet. Diam sed elementum massa ut. Sed tortor elit phasellus venenatis, turpis pellentesque euismod. Eget ornare id sed auctor gravida viverra at. Et egestas elementum eu non sit at libero viverra molestie. Scelerisque nunc vel nec, amet. Pellentesque iaculis sed integer aliquet sit quis turpis eget. </p>
            </div>
        </div>
        </div>

        
        
    </div>
    
    
</div>

    </div>
    


</>
     
    )
}
export default Header;