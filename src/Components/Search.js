import { useTypewriter } from "react-simple-typewriter";
import { useState, useRef } from "react";
import "../../src/css/Search.css";
import arrow from "../imges/move-arrow.png";

const placeholder = [" 스투키", " 몬스테라", ""];
export default function Search() {
  const typer = useRef();

  const TypewriterHook = () => {
    const [isInputBorder, setIsInputBorder] = useState(false);

    const { text } = useTypewriter({
      words: placeholder,
      typeSpeed: 160,
      loop: 1,
      deleteSpeed: 50,
      delaySpeed: 1500,
      onType: () => {
        const lenght = typer.current.placeholder.length;
        typer.current.style.width = `${lenght * 7}%`;
      },
      onLoopDone: () => {
        typer.current.style.width = `29%`;
        typer.current.focus();
        setIsInputBorder(true);
      },
    });

    return (
      <>
        <input
          className={
            isInputBorder
              ? " inline caret-searchGreen border-b-4 h-4/5 border-b-black bold typer "
              : "inline caret-searchGreen typer"
          }
          placeholder={text}
          ref={typer}
        />
        <span className="blinkingCursor"></span>
      </>
    );
  };

  return (
    <>
      <div className="font-black text-[5.59524vw] m-auto inline">
        <p className="text-sm text-searchGreen font-Montserrat inline">
          plant search
        </p>

        <div className="lnline">
          <span>
            나는
            <TypewriterHook />를
          </span>
        </div>
        <p className="inline">잘 키우는 방법이</p>
        <p>궁금하다.</p>
      </div>
      <img src={arrow} className="move-arrow" />
    </>
  );
}
// absolute left-[31.25vw] mt-[-150px]"
