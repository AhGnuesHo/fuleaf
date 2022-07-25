import styled from "styled-components";
export default function Modal() {
  return (
    <ModalWrap>
      <ModalSection>
        <div className="block">
          <div className="mb-[6px] text-[19px] tracking-[-1.44px]">
            MBTI를 결합한 식물 추천 큐레이션
          </div>
          <div className="mb-[31x] text-[37px] tracking-[-2.22px] text-[900]">
            곧 출시될 예정이에요!
          </div>
          <p className="mb-[50px] text-[16px] tracking-[-0.96px] leading-[1.63]">
            번호를 남겨주시면 출시일과 함께 <br /> 가장 먼저 혜택과 소식을
            받아볼 수 있어요.
          </p>
        </div>
      </ModalSection>
    </ModalWrap>
  );
}

const ModalWrap = styled.div`
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalSection = styled.div`
  background-color: #fff;
  max-width: 906px;
  padding: 110px 0 60px 0;
  text-align: center;
  width: 79%;
  margin-left: auto;
  margin-right: auto;
`;
