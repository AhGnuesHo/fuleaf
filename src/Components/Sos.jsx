import { useState } from "react";
import styled from "styled-components";

export default function Sos() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pb-[140px]">
      <h1 className="text-[16px] font-[400] tracking-normal text-[#00b654] mb-[5px]">
        sos solution
      </h1>
      <h2 className="text-[30px] font-[800] tracking-[-0.9px] leading-[1.53] mb-[30px]">
        혹시 식물이 아파요?
      </h2>
      <div className=" border-t-[1px] border-black">
        <ul>
          <li className="py-[25px] px-0 border-b-[1px] border-[#d4d4d4]">
            <SosTitle>
              <div className="w-[26px] font-[600] relative top-[-1px]">Q.</div>
              <H3>잎이 점점 떨어져요</H3>
              <button
                className="ml-auto relative top-[2px]"
                onClick={() => setIsOpen(!isOpen)}
              >
                <img
                  alt="arrow"
                  className="w-[15px] h-[15px]"
                  src={
                    isOpen
                      ? "https://huga.s3.ap-northeast-2.amazonaws.com/plantDetail/search_detail_sos_dropdown_arrow_down%402x.png"
                      : "https://huga.s3.ap-northeast-2.amazonaws.com/plantDetail/search_detail_sos_dropdown_arrow_up%402x.png"
                  }
                />
              </button>
            </SosTitle>
            <SosDesc>
              <DescContent active={isOpen}>
                15℃ 이상의 따뜻한 온도에서 잎이 나와요. 온도가 춥다면 구근이
                잠을 자는 시기가 됬을거에요. 통풍이 잘되고 따뜻한 실내에서
                화분에 심긴채로 보관하거나 구근을 신문지로 싸서 보관해주세요.
              </DescContent>
            </SosDesc>
          </li>
        </ul>
      </div>
    </div>
  );
}

const SosTitle = styled.div`
  display: flex;
  align-items: center;
  color: #666;
  transition: all 0.2s ease-in-out;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.42px;
`;

const H3 = styled.h3`
  font-size: 14px;
  line-height: 1.57;
  letter-spacing: -0.42px;
  font-weight: 600;
`;

const SosDesc = styled.div`
  font-size: 14px;
  font-weight: normal;
  line-height: 1.64;
  letter-spacing: -0.42px;
  margin: 0 37px 0 26px;
`;

const DescContent = styled.h3`
  line-height: 1.64;
  height: ${(props) => (props.active ? "22.9531px" : "0px")};
  margin-top: ${(props) => (props.active ? "15px" : "0px")};
  overflow: hidden;
  transition: all 0.2s ease-in-out;
`;
