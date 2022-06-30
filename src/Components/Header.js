import { useRef, useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

export default function Header() {

  const nowHref = useRef(window.location.pathname);

  const links = [
    {
      href: "/",
      text: "홈",
      defaultStyle: "",
    },
    {
      href: "/plants",
      text: "식물필터",
    },
    ,
    {
      href: "/magazine",
      text: "매거진",
    },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-5 lg:px-20 md:justify-start md:space-x-5 ">
          <div className="flex">
            <Link to="/">
              <img
                className="h-4 w-auto lg:px-10 md:px-5 sm:px-3"
                src="https://huga.s3.ap-northeast-2.amazonaws.com/v3.1/images/public/mobile-gnb-logo%403x.png"
                alt="logo"
              />
            </Link>
          </div>
         
          <div className="hidden md:flex space-x-10">
            {links.map((link) =>
              nowHref.current === link.href ? (
                <Link
                  key={`${link.text}+current`}
                  to={link.href}
                  className={"text-sm font-bold text-slate-900  "}
                >
                  {link.text}
                </Link>
              ) : (
                <Link
                  key={link.text}
                  to={link.href}
                  className={"text-sm font-bold text-slate-400 "}
                >
                  {link.text}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
