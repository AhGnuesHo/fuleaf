import { Link } from "react-router-dom";
import links from "../Data/links.json";

export default function Header() {
  return (
    <div className="bg-white sticky top-0 z-[100]">
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-5 lg:px-20 md:justify-start md:space-x-5 ">
          <div className="flex">
            <Link to="/">
              <img
                className="h-4 w-auto lg:px-10 md:px-5 sm:px-3"
                src="https://huga.s3.ap-northeast-2.amazonaws.com/v3.1/images/public/mobile-gnb-logo%403x.png"
                alt="logo"
              />
            </Link>
          </div>
          <div className="flex space-x-10 text-[15px] font-black ">
            {links.header.map((link) => (
              <Link
                to={link.href}
                key={link.href}
                style={{ color: `${link.defaultStyle}` }}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
