import Search from "./Search";
import Filter from "./Filter";
import Nav from "./Nav";
import { HashLink } from "react-router-hash-link";
import { useRef, useEffect } from "react";

export default function Main() {
  return (
    <div className="h-screen">
      <Nav />

      <div className="ml-48 h-full flex flex-col justify-evenly ">
     
        <Filter />
        {/* <HashLink smooth to="/"> */}
        {/* <Search /> */}
        {/* </HashLink> */}
        {/* <HashLink smooth to="/#filter">
        </HashLink> */}
      </div>
    </div>
  );
}
