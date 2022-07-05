import { useRef, useState } from "react";
import links from "../Data/links.json";
import menu from "../Data/menu.json";
import { HashLink, NavHashLink } from 'react-router-hash-link';

export default function Nav() {
  const nowHref = useRef(window.location.pathname);
  console.log(nowHref.current);
  return (
    <div className="top-2/4 fixed mt-[-60px]">
      <ul className="pl-[8.92857vw]">
        {menu.map((item) =>
          nowHref.current === item.href ? (
            <li
              key={item.name}
              className="flex items-center my-3 mx-0 cursor-pointer"
            >
              
              <span className="h-[3px] w-[26px] z-10 bg-searchGreen block"></span>
              <div className="left-20 ml-4 font-black text-[0.83333vw] text-searchGreen">
                {item.name}
              </div>
          
            </li>
          ) : (
            <li
              key={item.name}
              className="flex items-center my-3 mx-0 cursor-pointer"
            >
              <span className="h-[3px] w-[14px] z-10 bg-navDefaultColor block"></span>

              <div className="left-20 ml-4 font-black text-[0.83333vw] text-navDefaultColor">
                {item.name}
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
