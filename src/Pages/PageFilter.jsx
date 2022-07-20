import filterList from "../Data/filter.json";
import searchIcon from "../imges/search@3x.png";
import data from "../Data/Data.json";
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "../../src/css/pageFilter.css";
import { useLocation } from "react-router";
import qs from "query-string";

export default function PageFilter() {
  const location = useLocation().search;
  console.log(location);

  const query = qs.parse(location);
  console.log(query);

  const [searchParams, setUseSearchParams] = useSearchParams();
  const ff = searchParams.get("ff");
  const sf = searchParams.get("sf");
  const tf = searchParams.get("tf");

  console.log(ff);
  console.log(sf);
  console.log(tf);

  const [sort, setSort] = useState(true);
  const [search, setSearch] = useState("");
  const [dummy, setDummy] = useState(data);
  const [pageNum, setPageNum] = useState(1);
  const [detailfilter, setDetailfilter] = useState([]);
  const [thirddetailfilter, setThridDetailfilter] = useState([]);

  const changeColor = () => {
    setSort(!sort);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDummy = data.filter((item) => item.name.includes(search));
    setDummy(newDummy);
  };

  function ThirdFilter({ third }) {
    return (
      <>
        <div className="border-dashed border-[#eaeaea] border mt-[8px] mb-[16px] "></div>
        <ul className="flex flex-wrap">
          {third.map((item) => (
            <button
              key={item.id}
              className="inline-block border-solid border border-filterColor rounded-full text-filterColor text-[16px]
              px-[18px] py-[6px] mb-[8px] mr-[6px]"
              onClick={() => {
                setUseSearchParams({ tf: `${item.id}` });
              }}
            >
              {item.name}
            </button>
          ))}
        </ul>
      </>
    );
  }

  function DetailFilter({ second }) {
    return (
      <>
        <div className="border-dashed border-[#eaeaea] border mt-[8px] mb-[16px] "></div>
        <ul className="flex flex-wrap">
          {second.map((item) => (
            <button
              key={item.id}
              className="inline-block border-solid border border-filterColor rounded-full text-filterColor text-[16px]
              px-[18px] py-[6px] mb-[8px] mr-[6px]"
              onClick={() => {
                
                setThridDetailfilter(item.thirdFilters);
                setUseSearchParams({ sf: `${item.id}` });
              }}
            >
              {item.name}
            </button>
          ))}
        </ul>
        {console.log(thirddetailfilter.length)}
        {thirddetailfilter.length > 0 && (
          <ThirdFilter third={thirddetailfilter} />
        )}
      </>
    );
  }

  function Button({ filter }) {
    return (
      <>
        <ul className="p-0 w-[846px] cursor-pointer">
          {filter.map((item) => (
            <button
              key={item.id}
              className="inline-block border-solid border border-filterColor rounded-full text-filterColor text-[16px]
          px-[18px] py-[6px] mb-[8px] mr-[4px]"
              onClick={() => {
                setDetailfilter(item.secondFilters);
                setUseSearchParams({ ff: `${item.id}` });
              }}
            >
              {item.name}
            </button>
          ))}
        </ul>

        {detailfilter.length > 0 && <DetailFilter second={detailfilter} />}
      </>
    );
  }

  return (
    <>
      <div className="h-[100%] ml-[160px] mt-[42px] w-[79%] ">
        <div className="font-extrabold text-[32px] md:text-[46px]  mb-[36px]">
          <h1 className="flex">어떤 종류의</h1>
          <h1 className="flex">식물을 찾고있나요?</h1>
        </div>

        <Button filter={filterList}></Button>

        <div className="mt-[63px]">
          <div className="relative">
            <img
              alt="searchIcon"
              src={searchIcon}
              className="absolute top-[23px] w-[26px] h-[26px]"
            />
            <form className="block" onSubmit={(e) => handleSubmit(e)}>
              <input
                className="w-full mb-[18px] text-[20px] py-[17px] px-[30px] leading-[1.85] tracking-[-1px] border-b border-solid border-black"
                id="search__input"
                type="text"
                placeholder="식물 이름을 검색해 주세요."
                name="term"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              ></input>
            </form>
          </div>
        </div>
        <div className="w-full flex justify-between text-[14px] font-bold">
          <div>식물데이터 {dummy.length} 종</div>
          <div className="flex">
            <div className={`${!sort ? "" : "active"} `} onClick={changeColor}>
              인기순
            </div>
            <span className="mx-[17px] h-[18px]">|</span>
            <div className={`${sort ? "" : "active"}`} onClick={changeColor}>
              최신순
            </div>
          </div>
        </div>
        <div className="block">
          <div className="mt-[40px] h-[auto] overflow-hidden">
            <div className="flex flex-wrap">
              {dummy && dummy.length > 0 ? (
                dummy.slice(0, 25 * pageNum).map((item, index) => (
                  <div className="plants__list-item mr-[0px]" key={item.id}>
                    <Link to={item.href}>
                      <img
                        alt="logo"
                        className="h-[170px] w-[170px] rounded-[10px] bg-cover bg-center mb-[12px]"
                        src={item.image}
                      ></img>
                      <h3 className="text-[16px] mb-[60px] font-bold">
                        {item.name}
                      </h3>
                    </Link>
                  </div>
                ))
              ) : (
                <div className="mt-[97px] mb-[195px] mx-auto text-center text-[#999]">
                  <h1 className="text-[46px] mb-[12px] tracking-[-2.3px] font-black align-middle">
                    잘못된 검색어입니다 ㅠㅠ
                  </h1>
                  <h2 className="text-[20px] tracking-[-1px] align-middle">
                    식물이름을 검색해주세요.
                  </h2>
                </div>
              )}
            </div>

            {dummy.length > 25 && (
              <div className="mt-[20px] flex text-center justify-center ">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setPageNum(pageNum + 1);
                  }}
                  className="block mt-[40px] mb-[120px] w-full rounded-[30px] h-[60px] tracking-[-0.48px] text-[16px] font-bold bg-[#f5f5f5]"
                >
                  <span className="relative top-[-2px]"> 더보기 </span>
                  <img
                    alt="logo"
                    className="inline w-[24px] relative top-[3px] align-baseline"
                    src="https://huga.s3.ap-northeast-2.amazonaws.com/v3.1/images/plants/more_btn_ico%403x.png"
                  ></img>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
