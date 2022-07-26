import filterList from "../Data/filter.json";
import styled from "styled-components";
import { useState } from "react";
import "animate.css";
export default function Filter() {
  const [isActive, setIsActive] = useState([false, false, false, false]);
  const [filterName, setFilterName] = useState("");
  return (
    <>
      <div id="filter" className=" mt-[200px] ml-[250px] ">
        <span className="font-black text-[3.21429vw] px-[19.04762vw] ">
          어떤 식물을 찾고 있나요?
        </span>
        <ul className="pt-[2.97619vw] ml-[80px] py-[1.19048vw] w-[900px] cursor-pointer ">
          {filterList.map((item, index) => (
            <Li
              active={isActive[index]}
              key={item.id}
              onClick={() => {
                const newArr = isActive.map((activeArr) => (activeArr = false));
                newArr[index] = !isActive[index];
                setIsActive(newArr);
                setFilterName(item.id);
              }}
            >
              {item.name}
            </Li>
          ))}
          {isActive.find((item) => item) && (
            <button className="animate__animated animate__fadeInLeft rounded-[50%] absolute  w-[40px] h-[40px] bg-[#00b564] justify-center items-center cursor-pointer">
              <img
                onClick={() => (window.location.href = "/plants")}
                className="w-[26px] h-[26px] m-[auto]"
                alt="search"
                src="https://huga.s3.ap-northeast-2.amazonaws.com/v3.1/images/plants/search-white-ico%403x.png"
              />
            </button>
          )}
        </ul>
      </div>
    </>
  );
}
const Li = styled.button`
  color: ${(props) => (props.active ? "#00b564" : "#666")};
  border: ${(props) => (props.active ? "1px solid #00b564" : "1px solid #aaa")};
  display: inline-block;
  border-radius: 9999px;
  font-size: 1.78571vw;
  padding-left: 1.78571vw;
  padding-right: 1.78571vw;
  margin-right: 0.47619vw;
`;
