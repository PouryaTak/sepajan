import React from 'react'
import { BellIcon, GlobeAltIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import UserInfo from "./UserInfo";


function Header() {
  return (
    <header className="shrink-0 py-[26px]  bg-gray-100">
<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
  {/* user actions */}
  <div className="flex items-center gap-x-7">
    <UserInfo />
    <button type="button" className="-m-2.5 p-2.5 text-gray-800 hover:text-gray-500">
      <span className="sr-only">Info</span>
      <GlobeAltIcon className="h-6 w-6" aria-hidden="true" />
    </button>
    <button type="button" className="-m-2.5 p-2.5 text-gray-800 hover:text-gray-500">
      <span className="sr-only">View notifications</span>
      <BellIcon className="h-6 w-6" aria-hidden="true" />
    </button>
  </div>
  {/* searchBar */}
  <form className="relative w-2/4 h-max">
    <input type="text" placeholder="کجا میخوای بری؟" className="bg-transparent border border-gray-300 rounded-full h-[54px] w-full indent-3 pl-14" />
    <button className="absolute inset-y-[10px] left-[10px] bg-black hover:bg-gray-500 text-white aspect-square rounded-full flex items-center justify-center">
      <MagnifyingGlassIcon className="w-4 h-4"/>
    </button>
  </form>

  {/* logo */}
  <a href="/">
  <img className="h-8 w-auto" src="/images/logo.svg" alt="Company" />
  </a>
</div>
</header>
  )
}

export default Header