import Search from "../Components/Search";
import Filter from "../Components/Filter";
import Magazin from "../Components/Magazin";
import menu from "../Data/links.json";
import "../css/Main.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel } from "swiper";

export default function Main() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<div class="menuWrap"><div class="' +
        className +
        '"></div><div class="menu">' +
        menu.nav[index].text +
        "</div> </div>"
      );
    },
  };

  return (
    <div className="h-screen top-[10px]">
      <div className="h-full flex flex-col justify-evenly top-[20px]">
        <Swiper
          spaceBetween={90}
          direction={"vertical"}
          pagination={pagination}
          slidesPerView={1}
          mousewheel={true}
          modules={[Mousewheel, Pagination, Navigation]}
          className="mySwiper"
          hashNavigation={{
            watchState: true,
          }}
        >
          <SwiperSlide data-hash="">
            <Search />
          </SwiperSlide>
          <SwiperSlide data-hash="#filter">
            <Filter />
          </SwiperSlide>
          <SwiperSlide data-hash="#magazin">
            <Magazin />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
