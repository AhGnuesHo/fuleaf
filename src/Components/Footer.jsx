import instagram from "../imges/insta_icon@2x.png";
export default function Footer() {
  return (
    <div className="bg-black h-[1000px] bottom-0 text-white block pt-[83px]">
      <div className="w-[79%] my-0 mx-auto">
        <div className="flex pb-[63px] border-b-[0.75px] border-solid border-[#333]">
          <div className="pb-0 w-[50%] border-b-[0]">
            <img
              className="w-[77.9px] inline-block mb-[62.6px] cursor-pointer"
              src="https://huga.s3.ap-northeast-2.amazonaws.com/fuleaf/v3.0/mobile/home/fuleaf-logo-white.png"
              alt="logo"
            />
            <div className="text-[86px] font-bold leading-[1.]4] ">
              <h3>누구나</h3>
              <h1>
                식물을
                <br />
                쉽게
              </h1>
            </div>
          </div>

          <div className="pt-[68px] pb-0 px-0 py-[54px] w-[50%] border-b-0">
            <h1 className="text-[86px] font-bold leading-[1.4] ">
              fullen corp.
            </h1>
            <h2 className="mb-[109px] text-[14px] leading-[1.33] font-medium ">
              Ⓒ 2020. fullen Corp. all rights resrved.
            </h2>
            <div className="mb-[5px] text-[13px] leading-[-0.78px] text-[#999]">
              <p>(주)풀른 대표이사 : 김성훈</p>
              <p>소재지 : 경기도 부천시 옥길동 794-3 골든아이티타워 510호</p>
              <p>사업자 등록번호 : 679-87-01596</p>
              <p>통신판매업신고번호 : 제 2020-서울강서-2530</p>
              <h6 className="mt-[42px] leading-[1.2] text-white">
                *이 사이트에서 제공하는 식물 관련 데이터 및 콘텐츠는(주)풀른의
                자산입니다.
              </h6>
            </div>
          </div>
        </div>
        <div className="pt-[60px] block font-bold">
          <h1 className="mb-[60px] text-[86px] leading-[1.28] font-black ">
            contact
          </h1>

          <ul className="mb-[14px] text-[13px]">
            <li className="mb-[14px]">070-8112-9563</li>
            <li className="mb-[14px]">
              (11:00 am - 18:00 pm) / 토,일,공휴일 휴무
            </li>
          </ul>
          <ul className="felx justify-between align-center">
            <div className="flex felx-wrap">
              <li className="text-[13px] mr-[26px] mb-[20px]">
                <a href="https://fuleafstore.imweb.me/30">입점하기(판매자용)</a>
              </li>
              <li className="text-[13px] mr-[26px] mb-[20px]">
                <a href="https://fuleafstore.imweb.me/78">
                  판매 요청하기(소비자용)
                </a>
              </li>
              <li className="text-[13px] mr-[26px] mb-[20px]">
                <a>이용약관</a>
              </li>
              <li className="text-[13px] mr-[26px] mb-[20px]">
                <a>개인정보처리방침</a>
              </li>
            </div>

            <div className="flex flex-wrap">
              <a
                className="w-full flex justify-end"
                href="https://www.instagram.com/fuleaf.me/"
                target="_blank"
              ></a>
              <img className="block ml-auto w-[17px]" src={instagram} />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
