import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './feedback.css';
import axios from 'axios';

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: '#D69E0C', borderRadius: '50%', position: 'absolute', right: '10px' }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: '#D69E0C', borderRadius: '50%', position: 'absolute', left: '19px' }}
      onClick={onClick}
    />
  );
};

const ParentsFeedbackCards = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setFeedbacks(response.data.slice(0, 3)); // Limit to 3 feedbacks for simplicity
      } catch (error) {
        console.error('Error fetching feedbacks:', error);
      }
    };

    fetchFeedbacks();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
    <div className='main-cont mt-8 w-full'>
      <div className='cont text-right mb-2 px-2'>
        <h3 className='font-sans text-lg text-yellow-700'>Happy Kids,</h3>
        <h3 className='font-sans text-lg text-yellow-700'>Satisfied Parents!</h3>
      </div>
      <div style={{ width: '100%' }}>
        <Slider {...settings} className='bg-white'>
          {feedbacks.map((feedback) => (
            <div
              key={feedback.id}
              className='sub-card !w-[95%] transition-transform duration-300 ease-in-out transform hover:scale-105 border-b border-gray-300 pb-4 relative h-full flex flex-col justify-between !min-h-[180px]' 
              
            >
              <div>
                <h3 className='font-sans font-bold ml-4 mt-2 mb-1'>{feedback.title}</h3>
                <p className='break-words ml-4'>{feedback.body}</p>
              </div>
              <img
                className='w-8 h-8  rounded-full ml-[90%] mb-2 sm:mb-1 sm:mr-1 md:mb-2 md:mr-2 lg:mb-3 lg:mr-3 xl:mb-4 xl:mr-4'
                src='https://via.placeholder.com/150'
                alt={feedback.title}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ParentsFeedbackCards;
