
import { useTypewriter} from 'react-simple-typewriter'
import { useRef } from "react";
export default function Search() {

const TypewriterHook = () => {
  const { text, count } = useTypewriter({
    words: ["몬스테라", "스투키", ""],
    typeSpeed : 90,
    loop :1,
    deleteSpeed : 50,
    delaySpeed : 1500,
  });

  return (
    
      <input className="w-1/3 bold caret-searchGreen" placeholder={text} />
    
  );
};
  


  return (
    <>
      <div className="font-bold text-[5.59524vw] h-screen ml-[160px] mt-[160px]">
        <p className="text-sm text-searchGreen font-Montserrat">plant search</p>

        <div className="font-bold flex text-[5.59524vw]">
          <span className="flex">
            나는
            <TypewriterHook/>
            를
          </span>
          <span></span>
        </div>
        <p>잘 키우는 방법이</p>
        <p>궁금하다.</p>
      </div>
    </>
  );
}
