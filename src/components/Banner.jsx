import React, { useState, useEffect } from 'react';

import './Banner.css'; 
import { FaGreaterThan,  FaLessThan } from 'react-icons/fa';

const banners = [
  "https://media.istockphoto.com/id/1067120108/photo/family-making-handmade-ornaments.jpg?s=612x612&w=0&k=20&c=rG7KGeQAJ-Fs8-aLQgpJNngSMwpBC5xE93poekiB3Qw=",
  "https://media.istockphoto.com/id/1256855138/photo/little-child-swim-underwater-in-pool.jpg?s=612x612&w=0&k=20&c=EDE1aWLV3kN1evWLuleVYe-S2TC6ATpQHoFdAF3LCD0=",
  "https://media.istockphoto.com/id/1142171010/photo/group-of-sporty-caucasian-children-in-doboks-having-taekwondo-class-in-white-gym.webp?b=1&s=170667a&w=0&k=20&c=LSMNpYmW1ry8T2ehVjqc0O2LCj436GksYtqkpE9XI1o=",
  "https://media.istockphoto.com/id/1172681503/photo/creative-kids-creative-arts-and-crafts-classes-in-after-school-activities.webp?b=1&s=170667a&w=0&k=20&c=c-IcvF9C4vjCr9_NCd3MrI6-H4MmDBEhsfXzYVx_-Bc=",
  "https://media.istockphoto.com/id/1192745805/photo/basketball-team-practicing-on-basketball-court.jpg?s=612x612&w=0&k=20&c=exI9nF65sdkniPzpcBuUuy6QBfqTCkuDIeVWoD82Zgw="
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

      <div className="banner-overlay absolute  text-black  ">
      <h1 className="text-l font-bold mb-6 ml-[3%] w-[25%] overflow-wrap break-word">
          Find the Best Activity for your Child!
            
        </h1>
       
       <span style={{}}>
       <FaGreaterThan className="w-8 h-8 border border-blue-500 rounded-full bg-blue-500 text-[#FFFF] absolute left-[220px] bottom-[195px] cursor-pointer transform transition-transform duration-300 hover:scale-110 hover:bg-blue-600 hover:border-blue-600"/>

       </span>
      </div>
    </div>
  );
};

export default Banner;
 