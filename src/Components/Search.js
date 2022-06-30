import { useTypewriter } from "react-simple-typewriter";
import { useState, useRef } from "react";
import "../../src/css/Cursor.css";

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
              ? " inline-block caret-searchGreen border-b-4 h-4/5 border-b-black bold typer "
              : "inline-block caret-searchGreen typer"
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
      <div className="font-bold text-[5.59524vw] absolute top-2/4 left-[31.25vw] mt-[-150px]" >
        <p className="text-sm text-searchGreen font-Montserrat">plant search</p>

        <div className="font-bold flex">
          <span className="flex">
            나는
            <TypewriterHook />를
          </span>
          <span></span>
        </div>
        <p>잘 키우는 방법이</p>
        <p>궁금하다.</p>
      </div>
    </>
  );
}
