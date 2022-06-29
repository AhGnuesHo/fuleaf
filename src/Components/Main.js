import Search from "./Search";
import Filter from "./Filter";
import Nav from "./Nav";
import { useRef, useEffect } from "react";

export default function Main() {
  return (
    <div className="flex-1 h-screen flex flex-row row-nowrap">
      <div className="block f-screen">
        <div className="relative flex row-nowrap h-screen">
          <Nav/>
          <Search />
          <Filter />
        </div>
       
      </div>
    </div>
  );
}
