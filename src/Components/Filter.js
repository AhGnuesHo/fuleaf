import filterList from '../Data/filterList';

export default function Filter() {
  return (


    <>
    <div id = "filter"   className='mt-[200px]'>
    <span className="font-black text-[3.21429vw] px-[19.04762vw] "> 어떤 식물을 찾고 있나요?</span>
        <ul className="pt-[2.97619vw] ml-[80px] py-[1.19048vw] w-[846px] cursor-pointer ">
            {filterList.map((item) => (
                <li key = {item.name} 
                className="inline-block border-solid border-[1px] border-filterColor 
                rounded-full text-filterColor text-[1.78571vw] px-[1.78571vw] mr-[0.47619vw]">
                    {item.name}
                </li>
            ))}
        </ul>
    </div>
  </>

  );
}
