import Search from "./Search";
import Filter from "./Filter";
import Nav from "./Nav";
import { Switch, Route, Redirect } from 'react-router-dom';
import { useRef, useEffect } from "react";

export default function Main() {
  return (
    <div className="h-screen">
      <Nav />

      <div className="ml-48 h-full flex flex-col justify-evenly ">
     
        <Search />
        {/* <Filter /> */}
        {/* <HashLink smooth to="/"> */}
        {/* </HashLink> */}
        {/* <HashLink smooth to="/#filter">
        </HashLink> */}
      </div>
    </div>
  );
}
