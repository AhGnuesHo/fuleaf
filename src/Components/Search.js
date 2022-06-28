import { useTypewriter } from "react-simple-typewriter";
import { useState, useRef } from "react";

const placeholder = [
  "스투키", "몬스테라", "    "
]
export default function Search() {
  
  const typer = useRef();
  
  const TypewriterHook = () => {
    const [isInputBorder, setIsInputBorder] =  useState(false);
    const { text } = useTypewriter({
      words: placeholder,
      typeSpeed: 160,
      loop: 1,
      deleteSpeed: 50,
      delaySpeed: 1500,
      onType : () => {
        const lenght = typer.current.placeholder.length;       
        typer.current.style.width=`${(lenght*7)}%`;
      },
      onLoopDone : () => {
        typer.current.style.width=`24%`;
        typer.current.focus();
        setIsInputBorder(true);
      }  
    });

    return (
      <input
        className= 
        {isInputBorder ? "inline-block caret-searchGreen border-b-4 border-b-black bold" : "inline-block caret-searchGreen "}
        placeholder={text}
        ref = {typer}
        />
      
    );
  };

  return (
    <>
      <div className="font-bold text-[5.59524vw] h-screen ml-[160px] mt-[160px]">
        <p className="text-sm text-searchGreen font-Montserrat">plant search</p>

        <div className="font-bold flex text-[5.59524vw]">
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
