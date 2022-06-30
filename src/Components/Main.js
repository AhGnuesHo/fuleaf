import Search from "./Search";
import Filter from "./Filter";
import Nav from "./Nav";
import { useRef, useEffect } from "react";

export default function Main() {
  return (
    <div className="h-screen">
      <Nav />

      <div className="ml-48  h-screen flex flex-col">
        <Search />
        <Filter />
      </div>
    </div>
  );
}
