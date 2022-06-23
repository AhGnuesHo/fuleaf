const menu = [
  {
    name: "식물검색",
  },
  {
    name: "식물필터",
  },
  {
    name: "매거진",
  },
];

export default function Nav() {
  return (
<div className="h-screen w-[200px] flex items-center -mt-[84.5px]">
      <ul className="pl-[100px]">
        {menu.map((item) => (
          <li key={item.name} className="flex items-center my-3 mx-0 cursor-pointer">
              <a>
                  <span className="h-1 w-3.5 z-10 bg-searchGreen block" >

                  </span>
              </a>
              <div className="left-20 ml-4 text-xs">{item.name}</div>
          </li>
        ))}
      </ul>
      </div>
  );
}
