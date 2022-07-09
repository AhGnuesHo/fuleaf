import Search from "./Search";
import Filter from "./Filter";
import Nav from "./Nav";

import { Switch, Route, Redirect } from 'react-router-dom';
import { useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SwiperCore, { Navigation, Pagination, Mousewheel } from "swiper";


export default function Main() {
  
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="h-screen">
      <Nav />

      <div className="ml-48 h-full flex flex-col justify-evenly ">
      
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        mousewheel={true}
        modules={[Mousewheel, Pagination, Navigation]}
        className="mySwiper"
        hashNavigation={{
          watchState: true,
        }}
        onSlideChange={() => { AOS.init(); }}
      >
        
        <SwiperSlide  data-hash =""><Search/></SwiperSlide>
        <SwiperSlide  data-hash ="#filter"> <Filter /></SwiperSlide>
   
      </Swiper>
    

     
      </div>
    </div>
  );
}
