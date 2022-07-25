import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Magazin() {
  return (
    <div className="flex h-full w-full align-middle items-center justify-center ">
      <div className="w-full mx-[19.04762vw] align-middle mt-[-90px]">
        <div className="flex align-middle justify-center ">
          <div className="flex-1 w-[50%] mr-[4.7619vw] align-middle">
            <h2>
              <Link
                to="/story"
                className="whitespace-pre-wrap tracking-[-2.3px] leading-[1.43] font-black text-[2.7381vw]"
              >
                물 주기, <br />
                내가 뭘 잘못한 거지?
              </Link>
            </h2>

            <div>
              <dl className="mt-[4.7619vw] text-[1.19048vw] tracking-[-1px] ">
                <dt className=" font-black leading-[1.45] text-left">
                  우리 집 식물이 죽은 이유
                </dt>
                <dd className="font-medium mt-[0.71429vw] leading-[1.6] ">
                  사실, 처음에는 화분을 받으며, 약간은 난감함이 교차했다. 집에
                  들여놓는 식물은 들이는 족족 죽이는 ‘킬러의 손’인 내가 과연 이
                  식물들을 죽이지 않고 잘 키울 수 있을까? 현재는 우리는 30가지가
                  넘는 식물들을 키우고 있고 주변에서 부탁하는 아픈 식물들..
                </dd>
              </dl>
            </div>
            <div className="flex mt-[2.02381vw] font-black tracking-[-0.8px] text-[0.95238vw] text-[#333]">
              <p className="text-[#666] flex items-center">
                <Em>copy.</Em>
                <span>김파카</span>
              </p>
              <P>
                <Em>date.</Em>
                <span>2020.12.04</span>
              </P>
            </div>
          </div>

          <div
            style={{
              backgroundSize: "100% auto",
              backgroundImage:
                " url(https://huga.s3.ap-northeast-2.amazonaws.com/storyThumbnailPics/1607080363651thumbnail_700x700px%20%E2%80%93%206.jpg)",
            }}
            className="h-[28.57143vw] w-[28.57143vw]"
          ></div>
        </div>
      </div>
    </div>
  );
}

const Em = styled.em`
  font-family: Montserrat;
  font-style: italic;
  margin-right: 0.35714vw;
  font-size: 0.95238vw;
  font-weight: 500;
  line-height: 1.19;
  letter-spacing: normal;
  color: #00b564;
  vertical-align: middle;
`;

const P = styled.p`
  font-family: Montserrat;
  color: #666;
  ::before {
    content: "";
    display: inline-block;
    height: 0.83333vw;
    width: 1px;
    background: #999999;
    margin: 0 0.95238vw;
    vertical-align: middle;
  }
`;
