import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

const Background = ({ movies }) => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/w1280";
  const images = movies ? movies.map((movie) => `${imageBaseUrl}${movie.poster_path}`) : [];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    swipe: true,
    arrows: true
  };

  return (
    <div className="h-screen w-full overflow-hidden p-10">
      {images.length > 0 ? (
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <div
                style={{
                    objectFit: "contain", 
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "90vh",
                }}
                 className="w-full"
              />
            </div>
          ))}
        </Slider>
      ) : (
        <p className="text-center text-xl">No images available</p>
      )}
    </div>
  );
};

export default Background;
