import React, { useState, useEffect } from 'react';

import './Banner.css'; 
import { FaGreaterThan,  FaLessThan } from 'react-icons/fa';

const banners = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZkXvtmLNj-pLJl0EPTrLogAMGejX5esw5lg&s",
  "https://thumbs.dreamstime.com/b/creative-kids-creative-arts-crafts-classes-school-activities-creative-kids-creative-arts-crafts-classes-155721267.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5wFyB49D1y8tNHJNjoYdUEyZyCXyt3Lmnng&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBzMhTM0bC6_bm11JXzacnZRi-F02vCeB7yQ&s",
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [banners]);


  

  return (
    <div className="banner-container relative">
      {banners.map((imageUrl, i) => (
        <img
          key={i}
          src={imageUrl}
          alt=""
          className={`banner-image ${i === currentIndex ? 'active' : ''}`}
        />
      ))}

      <div className="banner-overlay absolute  justify-center  text-center text-black ">
      <h1 className="text-l font-bold mb-6  w-[25%] overflow-wrap break-word">
          Find the Best Activity for your Child!
            
        </h1>
       
       <span style={{}}>
          <FaGreaterThan className=" w-5" style={{border:"1px solid #3B82F6", borderRadius:"50%", backgroundColor:"##3B82F6", color:"#3B82F6", position:"absolute",
            left:"220px",
          bottom:"205px"
          }}/>

       </span>
      </div>
    </div>
  );
};

export default Banner;
 