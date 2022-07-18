import { useTypewriter } from "react-simple-typewriter";
import { useState, useRef } from "react";
import "../../src/css/Search.css";

import arrow from "../imges/move-arrow.png";

const placeholder = [" 스투키", " 몬스테라", ""];
export default function Search() {
  const typer = useRef();
  const [search, setSearch] = useState(false);

  const TypewriterHook = () => {
    const [isInputFocus, setIsInputFocus] = useState(false);

    const { text } = useTypewriter({
      words: placeholder,
      typeSpeed: 160,
      loop: 1,
      deleteSpeed: 50,
      delaySpeed: 1500,
      onType: () => {
        const lenght = typer.current.placeholder.length;
        typer.current.style.width = `${lenght * 6}%`;
      },
      onLoopDone: () => {
        typer.current.style.width = `25%`;
        setIsInputFocus(true);
      },
    });

    return (
      <>
        <input
          className={
            isInputFocus
              ? " inline caret-searchGreen border-b-4 h-4/5 border-b-black typer "
              : "inline caret-searchGreen typer"
          }
          placeholder={text}
          ref={typer}
          onFocus={() => {
            console.log("T");
            setSearch(true);
          }}
        />
        <span className="blinkingCursor"></span>
      </>
    );
  };

  return (
    <>
      <div className="ml-[450px] mt-[20px] font-black text-[5.59524vw] ">
        <p className="text-sm text-searchGreen font-Montserrat inline">
          plant search
        </p>

        <>
          <div className="lnline">
            {search ? "" : <span> 나는</span>}
            <TypewriterHook />를
          </div>
          {search ? (
            <>
              <p>잘 키우는 방법</p>
              <button className="searchLink">보러가기</button>
            </>
          ) : (
            <>
              <p className="inline">잘 키우는 방법이</p>
              <p>궁금하다.</p>
            </>
          )}
        </>

        <img src={arrow} className="move-arrow" alt="arrow" />
      </div>
    </>
  );
}
