import styled from "styled-components";
import tip from "../Data/tip.json";
export default function HowToRise() {
  return (
    <>
      <div className="mb-[50px] block">
        <h1 className="text-[16px] font-[400] tracking-normal text-[#00b654] mb-[5px]">
          how to rasie
        </h1>
        <h2 className="text-[30px] font-[800] tracking-[-0.9px] leading-[1.53] mb-[30px]">
          어떻게 키우나요?
        </h2>
      </div>
      <Ul>
        {tip.map((item, i) =>
          i === 2 || i === 5 ? (
            <Li className="!mr-0" key={i}>
              <RasieImg alt="howtoimg" src={item.image}></RasieImg>
              <RasieTitle>{item.name}</RasieTitle>
              <RasieDesc>
                {item.desc}
                <br />
                <br />
                <b>[관리제품]</b>
                <br />빛 관리의 도움이 필요하다면 식물 생장용 LED를
                추천드립니다.
              </RasieDesc>
            </Li>
          ) : (
            <Li key={i}>
              <RasieImg alt="howtoimg" src={item.image}></RasieImg>
              <RasieTitle> {item.name} </RasieTitle>
              <RasieDesc>
                {item.desc}
                <br />
                <br />
                <b>[관리제품]</b>
                <br />빛 관리의 도움이 필요하다면 식물 생장용 LED를
                추천드립니다.
              </RasieDesc>
            </Li>
          )
        )}
      </Ul>
    </>
  );
}
const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
const Li = styled.li`
  margin-bottom: 50px;
  width: calc(33.333333% - 40px);
  margin-right: 60px;
`;
const RasieImg = styled.img`
  display: inline-block;
  width: 100%;
  margin-bottom: 22px;
`;
const RasieTitle = styled.h1`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.19;
  letter-spacing: -0.48px;
  margin-bottom: 10px;
`;
const RasieDesc = styled.h2`
  font-size: 14px;
  font-weight: normal;
  line-height: 1.64;
  letter-spacing: -0.42px;
  color: #333;
`;
