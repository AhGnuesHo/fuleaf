import { useParams } from "react-router-dom";
import styled from "styled-components";
import HowToRise from "../Components/HowToRise";
import Sos from "../Components/Sos";
import data from "../Data/Data.json";
export default function Detail() {
  const { detail } = useParams();
  const content = data.filter((i) => i.href === detail);
  console.log(content);

  return (
    <Layout>
      <div className="text-black">
        <Search>
          <SearchSection>
            <form
              action="/plants"
              method="get"
              style={{ opacity: "1", transform: "translateY(0px)" }}
            >
              <div className="relative">
                <input
                  className="w-full bg-[#f8f8f8] h-[60px] rounded-[43px] py-[16px] pr-[55px] pl-[32px] text-[20px] tracking-[-1px]"
                  type="text"
                  placeholder="식물 이름을 검색해 주세요."
                  name="term"
                  required
                ></input>
                <button
                  className="top-[5px] right-[5px] w-[50px] h-[50px] rounded-[50%] absolute bg-[#00b564] flex justify-center items-center cursor-pointer"
                  type="submit"
                >
                  <img
                    className="w-[26px] h-[26px]"
                    alt="search"
                    src="https://huga.s3.ap-northeast-2.amazonaws.com/v3.1/images/plants/search-white-ico%403x.png"
                  />
                </button>
              </div>
            </form>
          </SearchSection>
        </Search>
        <div className="flex flex-row mb-[80px] pt-[60px]">
          <div className="w-[50%] mr-[60px] my-0 ml-0 relative block">
            <img
              alt="img"
              className="h-[580px] w-[580px] relative"
              src={`${content[0].image}`}
            />
          </div>
          <div className="w-[50%] pt-[8px] ">
            <h1 className="text-[16px] font-[400] tracking-normal text-[#00b654] mb-[5px]">
              Caladium
            </h1>
            <h2 className="text-[30px] font-[800] tracking-[-0.9px] mb-[20px] leading-[1.53]">
              {content[0].name}
            </h2>
            <h3 className="text-[14px] font-[500] tracking-[-0.42px] mb-[50px] text-[#333] leading-[1.64]">
              전 세계 2,000종 이상, 다양한 색과 무늬를 가진 식물이에요. 잎이
              크고 화려한 무늬를 가졌어요. 꽃자체는 아름답지 않아서 잎을 보기
              위해 키우는 식물이랍니다. 알뿌리식물(구근식물)인 칼라디움의 잎의
              크기는 뿌리와 비슷하게 자라요. 다른 식물들과 다르게 월동을 하기
              위해서는 잎이 시들기 시작하는 가을철에는 줄기와 잎을 모두
              잘라주시고, 뿌리(구근)을 캐서 5~15 ℃에 4~5개월 정도 유지한 뒤
              모래나 톱밥에 파묻어야 해요.
            </h3>
            <Ul>
              <div className="flex border-b-[1.5px] border-[#eaeaea]">
                <LiLeft>
                  <TableImg
                    src="https://huga.s3.ap-northeast-2.amazonaws.com/fuleaf/v3.0/mobile/plants/ico-water-sprinkler%403x.png"
                    alt="img"
                  ></TableImg>
                  <TableH1>주 1~2회</TableH1>
                  <TableH2>흙 표면부터 3cm까지 마르면, 듬뿍 주세요.</TableH2>
                </LiLeft>
                <LiRight>
                  <TableImg
                    src="https://huga.s3.ap-northeast-2.amazonaws.com/fuleaf/v3.0/mobile/plants/ico-sun%403x.png"
                    alt="img"
                  ></TableImg>
                  <TableH1>반양지</TableH1>
                  <TableH2>햇빛을 좋아하지만, 그늘에서도 잘자라요</TableH2>
                </LiRight>
              </div>
              <div className="flex">
                <LiLeft>
                  <TableImg
                    src="https://huga.s3.ap-northeast-2.amazonaws.com/fuleaf/v3.0/mobile/plants/icon-water-drop%403x.png"
                    alt="img"
                  ></TableImg>
                  <TableH1>70%이상</TableH1>
                  <TableH2>습한 환경에 적합해요.</TableH2>
                </LiLeft>
                <LiRight>
                  <TableImg
                    src="https://huga.s3.ap-northeast-2.amazonaws.com/fuleaf/v3.0/mobile/plants/icon-pen%403x.png"
                    alt="img"
                  ></TableImg>
                  <TableH1>학명</TableH1>
                  <TableH2>Caladium spp.</TableH2>
                </LiRight>
              </div>
            </Ul>
          </div>
        </div>
      </div>
      <HowToRise />
      <Sos />
    </Layout>
  );
}

const Layout = styled.div`
  width: 79%;
  margin-left: auto;
  margin-right: auto;
`;

const Search = styled.div`
  transition: all 0.3s linear;
  position: relative;
  height: 260px;
  display: block;
`;

const SearchSection = styled.div`
  max-width: 1040px;
  width: 100%;
  top: 120px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;
const Ul = styled.ul`
  border-top: 1.5px solid #eaeaea;
  border-bottom: 1.5px solid #eaeaea;
`;

const LiLeft = styled.li`
  padding: 25px;
  padding-left: 0;
  border-right: 1.5px solid #eaeaea;
  width: 50%;
`;

const LiRight = styled.li`
  padding: 25px;
  padding-right: 0;
  width: 50%;
`;
const TableImg = styled.img`
  width: 26px;
  height: 26px;
  object-fit: cover;
  display: inline-block;
  margin-bottom: 13px;
`;

const TableH1 = styled.h1`
  font-size: 14px;
  font-weight: bold;
  letter-spacing: -0.42px;
  margin-bottom: 4px;
`;

const TableH2 = styled.h2`
  font-size: 14px;
  font-weight: normal;
  line-height: 1.64;
  letter-spacing: -0.42px;
  color: #333;
`;
