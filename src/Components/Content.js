import Nav from "./Nav";
export default function Content() {
  return (
    <div className="realtive w-full flex">
      <Nav />
      <div className="absolute top-2/4 left-2/4"  style={ {
          "transform":" translate(-50%,-50%)"
      }}>
        <p className="text-searchGreen font-Montserrat">plant search</p>
        <div className="text-3xl font-bold flex">
          <span>나는</span>
          <span>
            <form>
              <input className="w-28" placeholder="" />를
            </form>
          </span>
        </div>
        <p className="text-3xl font-bold">잘 키우는 방법이</p>
        <p className="text-3xl font-bold">궁금하다.</p>
      </div>

      <div className = "absolute top-2/4 left-2/4" style={ {
          "transform":" translate(-50%,-50%)"
      }}>

      </div>
    </div>
  );
}
