import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import Tabs from "@/components/Tabs";
import { FunnelIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div>
      <h1 className="font-bold text-lg mb-7">مدیریت کاربران</h1>
      <div className="flex gap-x-5">
        {/* searchBar */}
        <form className="relative w-3/4 h-max shrink-0">
          <input
            type="text"
            placeholder="جست و جو"
            className="bg-transparent border border-gray-300 rounded-[10px] h-12 w-full indent-4 pl-14"
          />
          <button className="absolute inset-y-[10px] left-[10px] bg-transparent text-gray-400 aspect-square rounded-full flex items-center justify-center">
            <FunnelIcon className="w-5 h-5" />
          </button>
        </form>
        <button className="bg-black hover:bg-gray-700 active:bg-gray-700 text-white rounded-full h-12 w-full">
          ایجاد کاربر جدید
        </button>
      </div>
      <Tabs/>
      <div className="border border-gray-300 rounded-lg mt-4">

      <Table/>
      <div>
        <Pagination/>
      </div>
      </div>
    </div>
  );
}
