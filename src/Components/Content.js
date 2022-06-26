import Search from "./Search";
import Filter from "./Filter";
import { useRef, useEffect } from "react";

export default function Content() {
  // const outerDivRef = useRef();
  // useEffect(() => {
  //   const wheelHandler = (e) => {
  //     e.preventDefault();
  //     // 스크롤 이벤트
  //   };
  //   const outerDivRefCurrent = outerDivRef.current;
  //   outerDivRefCurrent.addEventHandler("wheel", wheelHandler);
  //   return () => {
  //     outerDivRefCurrent.remonveEventHandler("wheel", wheelHandler);
  //   };
  // }, []);

  return (
    <div 
    // ref={outerDivRef} 
    className="flex-1 h-screen flex flex-row row-nowrap">
      <div className = "block f-screen">
      <Search />
      <Filter/>
      </div>
      
    </div>
  );
}
