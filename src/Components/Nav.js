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
    <div className="top-2/4 fixed mt-[-60px]">
      <ul className="pl-[80px]">
        {menu.map((item) => (
          <li
            key={item.name}
            className="flex items-center my-3 mx-0 cursor-pointer"
          >
            <a>
              <span className="h-1 w-3.5 z-10 bg-searchGreen block"></span>
            </a>
            <div className="left-20 ml-4 text-xs">{item.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
