import filterList from "../Data/filter.json";
import searchIcon from "../imges/search@3x.png";
import data from "../Data/Data.json";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../src/css/pageFilter.css";
import styled from "styled-components";
import queryString from "query-string";
import { useRecoilState } from "recoil";
import { itemState } from "../recoil/searchText";
import Footer from "../Components/Footer";
export default function PageFilter() {
  const location = useLocation();
  const decodeUri = decodeURI(location?.search);
  const keword = queryString.parse(decodeUri);

  useEffect(() => {
    if (keword.term !== undefined) {
      const newDummy = data.filter((item) => item.name.includes(keword.term));
      setDummy(newDummy);
    }
  }, [keword.term]);

  const [pageNum, setPageNum] = useRecoilState(itemState);
  const [sort, setSort] = useState(true);
  const [search, setSearch] = useState("");
  const [dummy, setDummy] = useState(data);
  // const [pageNum, setPageNum] = useState(1);
  const [detailfilter, setDetailfilter] = useState([]);
  const [thirddetailfilter, setThridDetailfilter] = useState([]);
  const [isClick, setIsClick] = useState([false, false, false, false]);
  const [isDetailClick, setIsDetailClick] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [isThirdFilter, setIsThirdFilter] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleSort = () => {
    setSort(!sort);
    sort
      ? setDummy(dummy.sort((a, b) => a.counting - b.counting))
      : setDummy(dummy.sort((a, b) => a.index - b.index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDummy = data.filter((item) => item.name.includes(search));
    setDummy(newDummy);
  };

  const handleFilter = (id) => {
    setDummy(data.filter((f) => f.filter.first === id));
  };

  const handleFilterButton = (arr, setArr, index) => {
    var copyClick = arr.map((i) => (i = false));
    copyClick[index] = !arr[index];
    setArr(copyClick);
  };

  function ThirdFilter({ third }) {
    return (
      <>
        <Dash />
        <ul className="flex flex-wrap">
          {third.map((item, i) => (
            <FilterButton
              active={isThirdFilter[i]}
              key={item.id}
              onClick={() => {
                handleFilterButton(isThirdFilter, setIsThirdFilter, i);
              }}
            >
              {item.name}
            </FilterButton>
          ))}
        </ul>
      </>
    );
  }

  function DetailFilter({ second }) {
    return (
      <>
        <Dash />
        <ul className="flex flex-wrap">
          {second.map((item, i) => (
            <FilterButton
              active={isDetailClick[i]}
              key={item.id}
              onClick={() => {
                setThridDetailfilter(item.thirdFilters);
                handleFilterButton(isDetailClick, setIsDetailClick, i);
              }}
            >
              {item.name}
            </FilterButton>
          ))}
        </ul>
        {console.log(thirddetailfilter.length)}
        {thirddetailfilter.length > 0 && (
          <ThirdFilter third={thirddetailfilter} />
        )}
      </>
    );
  }

  function FirstFilter({ filter }) {
    return (
      <>
        <ul className="p-0 w-[846px] cursor-pointer">
          {filter.map((item, i) => (
            <FilterButton
              active={isClick[i]}
              key={item.id}
              onClick={() => {
                handleFilter(item.id);
                setDetailfilter(item.secondFilters);
                handleFilterButton(isClick, setIsClick, i);
              }}
            >
              {item.name}
            </FilterButton>
          ))}
        </ul>

        {detailfilter.length > 0 && <DetailFilter second={detailfilter} />}
      </>
    );
  }

  return (
    <>
      <div className="h-[100%] mx-[auto] mt-[42px] md:w-[79%] w-[87.2%]">
        <div className="font-extrabold text-[32px] md:text-[46px]  mb-[36px]">
          {search.length > 0 || keword.term ? (
            <h1 className="flex">
              ???????????? <br /> ????????? ??????????
            </h1>
          ) : (
            <h1 className="flex">
              ?????? ????????? <br /> ????????? ????????????????
            </h1>
          )}
        </div>

        <FirstFilter filter={filterList}></FirstFilter>

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
                placeholder="?????? ????????? ????????? ?????????."
                name="term"
                onKeyPress={(e) => {
                  e.key === "Enter" && setSearch(e.target.value);
                }}
              ></input>
            </form>
          </div>
        </div>
        <div className="w-full flex justify-between text-[14px] font-bold">
          <div>??????????????? {dummy.length} ???</div>
          <div className="flex">
            <div className={`${!sort ? "" : "active"} `} onClick={handleSort}>
              ?????????
            </div>
            <span className="mx-[17px] h-[18px]">|</span>
            <div className={`${sort ? "" : "active"}`} onClick={handleSort}>
              ?????????
            </div>
          </div>
        </div>
        <div className="block">
          <div className="mt-[40px] h-[auto] overflow-hidden">
            <div className="flex flex-wrap">
              {dummy && dummy.length > 0 ? (
                dummy.slice(0, 25 * pageNum).map((item, index) => (
                  <div className="plants__list-item mr-[0px]" key={item.id}>
                    <Link to={`/plants/${item.href}`}>
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
                    ????????? ?????????????????? ??????
                  </h1>
                  <h2 className="text-[20px] tracking-[-1px] align-middle">
                    ??????????????? ??????????????????.
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
                  <span className="relative top-[-2px]"> ????????? </span>
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
      <Footer />
    </>
  );
}

const FilterButton = styled.button`
  color: ${(props) => (props.active ? "#00b564" : "#666")};
  border: ${(props) => (props.active ? "1px solid #00b564" : "1px solid #aaa")};

  display: inline-block;
  --tw-border-opacity: 1;
  border-radius: 9999px;
  font-size: 16px;
  font-weight: 500;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 6px;
  padding-bottom: 6px;
  margin-bottom: 8px;
  margin-right: 4px;
`;

const Dash = styled.div`
  border-style: dashed;
  border-color: "#666";
  border-width: 1px;
  margin-bottom: 16px;
  margin-top: 8px;
`;
