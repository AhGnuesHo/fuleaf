import filterList from "../Data/filterList";

export default function PageFilter() {
  return (
    <>
      <div className="h-screen ml-[160px] mt-[42px] ">
        <div className ="font-extrabold text-[32px] md:text-[46px]  mb-[36px]">
        <h1 className="flex">어떤 종류의</h1>
        <h1 className="flex">식물을 찾고있나요?</h1>
        </div>

        <ul className="p-0 w-[846px] cursor-pointer">
          {filterList.map((item) => (
            <li
              key={item.name}
              className="inline-block border-solid border border-filterColor rounded-full text-filterColor text-[16px]
              px-[18px] py-[6px] mb-[8px] mr-[4px]"
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
