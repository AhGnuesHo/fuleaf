/* This example requires Tailwind CSS v2.0+ */
import { Popover } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/outline";

export default function Header() {
  return (
    <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-5 lg:px-20 md:justify-start md:space-x-5 ">
          <div className="flex">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <img
                className="h-4 w-auto lg:px-10 md:px-5 sm:px-3"
                src="https://huga.s3.ap-northeast-2.amazonaws.com/v3.1/images/public/mobile-gnb-logo%403x.png"
                alt="logo"
              />
            </a>
          </div>
{/*  todo : 메뉴 아이콘 선택기능 */}
          <div className="-mr-2 -my-2 md:hidden">
            <MenuIcon className="mx-5 h-6 w-6"/>
          </div>

          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <a href="#" className="text-sm font-bold text-slate-900 ">
              홈
            </a>
            <a href="#" className="text-sm font-bold text-slate-500 ">
              식물찾기
            </a>
            <a href="#" className="text-sm font-bold text-slate-400 ">
              매거진
            </a>
          </Popover.Group>
        </div>
      </div>
    </Popover>
  );
}
