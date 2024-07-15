import React, {useContext} from "react";
import Slider from "react-slick";
import AnimatedBackground from "../component/backGround.jsx";
import NavBar from "./navBar.jsx";
import CharacterCard from "../component/CharacterCard.jsx";
import StarshipsCard from "../component/StarshipsCard.jsx";
import PlanetCard from "../component/planetCard.jsx";
import "../../styles/views/Home.css"
import {Context} from "../store/appContext.jsx"


const Home = () =>{
    const {store , actions} = useContext(Context) 


    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    };

    return(
        <>
        <AnimatedBackground/>
        <NavBar/>
        <div className="container-fluid d-flex flex-column justify-content-center p-5">
            <div className="container-fluid">
                <h1 className="text-white d-flex justify-content-center align-items-center">
                    Characters
                </h1>
                <div className="custom-underline pb-5"></div>
                <div className="slider-container">
                <Slider {...settings}>
                {
                 store.people.map((item) => (
                    <div key={item}>
                    <CharacterCard
                    people={item}
                    moreInfoPeople={item._id}
                    favorites={() => actions.addFavorites(item)}
                    />
                    </div>
                 ))
                }
                </Slider>
                </div>
            </div>
            <div className="container-fluid pt-5">
                <h1 className="text-white d-flex justify-content-center align-items-center">
                    Starships
                </h1>
                <div className="custom-underline pb-5"></div>
                <div className="slider-container">
                  <Slider {...settings}>
                  {
                  store.starships.map((item) => (
                      <div key={item}>
                      <StarshipsCard
                      starships={item}
                      moreStarshipsInfo={item._id}
                      favorites={() => actions.addFavorites(item)}
                      />
                      </div>
                  ))
                  }
                  </Slider>
                </div>
             </div>
             <div className="container-fluid pt-5">
                <h1 className="text-white d-flex justify-content-center align-items-center">
                    Planets
                </h1>
                <div className="custom-underline pb-5"></div>
                <div className="slider-container">
                  <Slider {...settings}>
                  {
                  store.planets.map((item) => (
                      <div key={item}>
                      <PlanetCard
                      planets={item}
                      moreInfoPlanets={item._id}
                      favorites={() => actions.addFavorites(item)}
                      />
                      </div>
                  ))
                  }
                  </Slider>
                </div>
              </div>
        </div>
        </>
    )
}


export default Home;