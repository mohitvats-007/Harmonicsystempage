import React, { useState } from 'react'
import './home.css';
import { Link } from 'react-router-dom';


const Home = () => {





    const [mobilenumber,setmobilenumber]= useState('');
    const [error, setError] = useState("");

    const  handleofferButtonClick = async (event) => {
        if (validatemobilenumber(mobilenumber)) {
            try {
                const response = await fetch('http://localhost:8081/org', {
                    method: 'POST',
                    headers: {
                        'Content-Type':'application/json' 
                    },
                    body: JSON.stringify({mobilenumber})
                });
                
                if (response.ok) {
                    alert('Registration successful!');
                } else {
                    throw new Error('Failed to register.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred. Please try again later.');
            }

        } else {
          event.preventDefault();
          setError("Please enter valid mobile number.");
        }
      };
      const handlemobilInputChange = (event) => {
        setmobilenumber(event.target.value);
      };
      const validatemobilenumber = (mobilenumber) => {
        const mobilregulexp = /^(?!.*(.)\1{9})\d{10}$/
        return mobilregulexp.test(mobilenumber);
      };
  return (
    <>
    <div className='homecontainer'>
      <div className='navigationbars menu'>        
        <ul>
      <li>

      <input type="checkbox" id="menu-toggle" />
  <label  htmlFor="menu-toggle"  className="menu-btn"/>
         
      </li>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
        
        </ul>
      </div>

      <div className="leftcontainer">
        <p>#HarmonicSystem</p>
      <h1>Elevate Your Earnings,<br/>Empower Your Business</h1>
    <p1>Impress your customers with the best Design <br/> Frames, while we do the rest to help them own their<br/> dream home.</p1>
    <li> <Link to="/">  <button className='Partnerbutton'>Contact</button></Link></li>
      </div>
      <div className="rightcontainer">
      <img width={'506px'}src=""alt=""/>
      </div>
    </div>
 <div>

 </div>
     
      






 <div>  
    <div className='bannercontainer'>
        <div className="leftbannercontainer">
            <div className='bannerheading'>
                <h1>Lighting can elevate a space and mood</h1>
                </div>
            <div className='bannerpara'>
                <p>
                Table lamp, Floor lamp, Chandelier, Ceiling lamp, Wall lamp...
                </p>
                </div>
            <div className='mobilebuttoncontainer'>
                <div className='bannermobileinput'>
                    <input type="number" placeholder='Enter Mobile Number' value={mobilenumber} onChange={handlemobilInputChange} />
                   {error && <p className="error-message">{error}</p>}
                </div>
                <div className='bannergetofferbutton'>
                   <Link className='active'  to=""> <button onClick={handleofferButtonClick} >Get Offers </button></Link>
                </div>
            </div>
        </div>
        <div className="rightbannercontainer">
            <div className='bannerimage'>
               
            </div>
        </div>
    </div>


    


    <div className="containerx">
        <div className="advantage">
                <div className="advantageheading">
                    <h1>LED outdoor lighting</h1>
                </div>
                <div className="advantagepara">
                    <p>LED Flood light, Tunnel light, Wall washer, Pixel module light, Flexible linear, Underground light, Underwater light…</p>
                </div>
        </div>
        <div className="innercontainer">
            <div className="b1" >
                <div className="b1data"> 
                        <div className="svglogo">

                            <img src="/src/images/Group 1321318490.svg" alt=""/>
                        </div>
                        <div className="headingindiv">

                            <h2>Dedicated Relationship Manager</h2>
                        </div>
                        <div className="paraindiv">
                            <p>Ypur Dedicated relationship manager Avilable 24/7 for you </p>
                        </div>
                </div>
            </div>
            <div className="b1" >
                <div className="b1data" >
                        <div className="svglogo">

                            <img src="/src/images/Group 1321318490 (3).svg" alt=""/>
                        </div>
                        <div className="headingindiv">

                            <h2>Dedicated Designs for You</h2>
                        </div>
                        <div className="paraindiv">

                            <p>Ypur Dedicated relationship manager Avilable 24/7 for you </p>
                        </div>
                </div>
            </div>
            
            
            <div className="b1" >
                <div className="b1data">
                        <div className="svglogo">

                            <img src="/src/images/Group 1321318490 (2).svg" alt=""/>
                        </div>
                        <div className="headingindiv">

                            <h2>Best Design Guarantee</h2>
                        </div>
                        <div className="paraindiv">

                            <p>Your Dedicated relationship manager Avilable 24/7 for you </p>
                        </div>
                </div>
            </div>
            
            
            <div className="b1" >
                <div className="b1data">
                        <div className="svglogo">
                            <img src="/src/images/Group 1321318490 (1).svg" alt=""/>
                        </div>
                        <div className="headingindiv">
                            <h2>Deisgn your Firm</h2>
                        </div>
                        <div className="paraindiv">
                            <p>Your Dedicated relationship manager Avilable 24/7 for you </p>
                        </div>
                </div>
            </div>
            
            
            
        </div>
    </div>
  

    </div>











    </>
    
  )
} 

export default Home
