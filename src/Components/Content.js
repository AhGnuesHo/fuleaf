import Nav from "./Nav";
export default function Content() {
  return (
    <div className="flex-1 h-screen flex flex-row row-nowrap">
      <div className="h-full" >
        <p className="text-searchGreen font-Montserrat">plant search</p>
        <div className="font-bold flex text-[5.59524vw]">
          <span>나는</span>
          <span>
            <form>
              <input className="w-28" placeholder="" />를
            </form>
          </span>
        </div>
        <p className="font-bold text-[5.59524vw]">잘 키우는 방법이</p>
        <p className="font-bold text-[5.59524vw]">궁금하다.</p>
      </div>

    </div>
  );
}
