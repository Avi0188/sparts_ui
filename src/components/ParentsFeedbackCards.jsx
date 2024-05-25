import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./feedback.css"
const ParentsFeedbackCards = () => {
  const feedbacks = [
    {
      id: 1,
      name: 'John Doe',
      feedback: 'Lorem ipsum dolor sit amet.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLQbbDQnJCBtJdtMFu5mi45u6Stea6EhR1sOSgjYDl0eco1Ico45VLxdGlcA&s',
    },
    {
      id: 2,
      name: 'Jane',
      feedback: 'Lorem ipsum dolor sit amet.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLQbbDQnJCBtJdtMFu5mi45u6Stea6EhR1sOSgjYDl0eco1Ico45VLxdGlcA&s',
    },
    {
      id: 3,
      name: 'Jane',
      feedback: 'Lorem ipsum dolor sit amet. ',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLQbbDQnJCBtJdtMFu5mi45u6Stea6EhR1sOSgjYDl0eco1Ico45VLxdGlcA&s',
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='mt-[2%]' style={{boxSizing:"border-box"}}>
      <div style={{  textAlign:"right", marginBottom:"10px", width:"91%" }}>
        <h3 style={{fontFamily:"sans-serif", fontSize:"20px", color:"#D69E0C"}}> Happy Kids,</h3>
        <h3 style={{fontFamily:"sans-serif", fontSize:"20px",  color:"#D69E0C"}}>Satisfied Parents!</h3>
      </div>
      <div style={{marginLeft:"5%",}}>
        <Slider {...settings} className="cards gap-5  " >
          {feedbacks.map((feedback) => (
            <div key={feedback.id} className=" sub-card !w-[80%] " style={{ boxSizing:"border-box" }}>
              <h3 style={{ fontFamily: "sans-serif", fontSize: "bold" }}>{feedback.name}</h3>
              <p style={{ wordWrap: "break-word" }}>{feedback.feedback}</p>
              <img style={{ 
                width: "50px", 
                
          height: "50px", 
          borderRadius: "50%", 
          marginLeft: "80%", 
          marginTop: "15px",
        
           }} src={feedback.image} alt={feedback.name} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ParentsFeedbackCards;
