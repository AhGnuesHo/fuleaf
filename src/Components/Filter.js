const filterList = [
  {
    name: "잎을 감상하는",
  },
  {
    name: "꽃을 감상하는",
  },
  {
    name: "열매를 감상하는",
  },
  {
    name: "다육/선인장",
  },
];

export default function Filter() {
  return (
    <>
      <div className="font-bold text-[5.59524vw]">
        <span className="block"> 어떤 식물을 찾고 있나요?</span>
        <ul className="p-0 w-[846px]">
            {filterList.map((item) => (
                <li key = {item.name} 
                className="inline-block border-solid border-2 border-filterColor rounded-full text-filterColor text-[1.78571vw] px-[1.78571vw] mr-[0.47619vw]">
                    {item.name}
                </li>
            ))}
        </ul>
      </div>
    </>
  );
}
