import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} block bg-yellow-600 rounded-full z-10 absolute right-[34px] top-1/2 transform -translate-y-1/2`}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} block bg-yellow-600 rounded-full z-10 absolute left-7 top-1/2 transform -translate-y-1/2`}
      onClick={onClick}
    />
  );
};

const TopAcademiesCard = () => {
  const topacd = [
    {
      id: 1,
      name: 'BrainArt',
      image: 'https://media.istockphoto.com/id/1072473650/photo/students-learning-computer-programming-stock-image.jpg?s=612x612&w=0&k=20&c=wy5LrD8RZsjeq3HOiuSjpe7YYPhmaxl2mNoQXCDWN24=',
      location: 'HSR',
    },
    {
      id: 2,
      name: 'BrainArt',
      image: 'https://media.istockphoto.com/id/1186708201/photo/indian-little-girl-writing-in-paper.jpg?s=612x612&w=0&k=20&c=vpRq_nW9WpMWAuePXWcwFgYg4_rahklj5erP_NNK-4Y=',
      location: 'HSR',
    },
    {
      id: 3,
      name: 'BrainArt',
      image: 'https://media.istockphoto.com/id/2149773953/photo/happy-teacher-and-schoolboy-giving-each-other-high-five-on-a-class.jpg?s=612x612&w=0&k=20&c=775mRwj3XO4NWTVqb94C2DktX2HO_MuhQ-A13qjAXU8=',
      location: 'HSR',
    },
    {
      id: 4,
      name: 'BrainArt',
      image: 'https://media.istockphoto.com/id/1461631505/photo/group-of-indian-young-student-using-social-media-or-watching-entertainment-on-mobile-phone.jpg?s=612x612&w=0&k=20&c=QPWACfuRwfVeMuN_usY6lMUk6B-NKkg8AZd4hLq9UIE=',
      location: 'HSR',
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
    <div className="relative bg-blue-500">
      <div className="mb-[1%] !w-[15%] ml-[3%]">
        <span className=" text-white">Explore Our Top Academies</span>
      </div>
      <Slider {...settings} >
        {topacd.map((el, index) => (
          <div className="carousel-cards w-[90%]  ml-[7%] rounded-lg" key={el.id}>
         <img
  className="w-[85%] rounded-[5px] h-[50%] transform transition-transform duration-300 hover:scale-110"
  src={el.image}
  alt={el.name}
/>
            <h3 style={{color:"#FFFFF"}}>{el.name}</h3>
            <p style={{color:"#FFFFF"}}>{el.location}</p>
            {index === topacd.length - 1 && (
              <>
                <NextArrow className="next-arrow" />
                <PrevArrow className="prev-arrow" />
              </>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TopAcademiesCard;
