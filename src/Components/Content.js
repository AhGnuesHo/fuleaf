import Search from "./Search";
import Filter from "./Filter";
export default function Content() {
  return (
    <div className="flex-1 h-screen flex flex-row row-nowrap">
      <div className="font-bold text-[5.59524vw] h-full ml-[160px] mt-[160px]">
        <p className="text-sm text-searchGreen font-Montserrat">plant search</p>

        {/* <Search /> */}
        <Filter/>
      </div>
    </div>
  );
}
