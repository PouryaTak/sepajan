import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const items = [
  { id: 1, title: "Back End Developer", department: "Engineering", type: "Full-time", location: "Remote" },
  { id: 2, title: "Front End Developer", department: "Engineering", type: "Full-time", location: "Remote" },
  { id: 3, title: "User Interface Designer", department: "Design", type: "Full-time", location: "Remote" },
];

export default function Pagination() {
  return (
    <div className="flex items-center justify-between bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div className="flex gap-3 items-center">
          <select
            id="count"
            name="count"
            className="rounded-md border-0 h-12 pr-3 pl-3 text-gray-900 bg-gray-100 sm:text-sm sm:leading-6"
            defaultValue="Canada"
          >
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </select>

          <div>
            <p className="text-sm text-gray-700">
              نمایش <span className="font-medium">1</span> - <span className="font-medium">10</span> از{" "}
              <span className="font-medium">97</span>
            </p>
          </div>
        </div>

        <div className="flex gap-4"> 
          <input
            type="text"
            placeholder="جست و جو"
            className="bg-transparent border border-gray-300 rounded-[10px] h-12  w-32 indent-4"
          />
          <nav className="isolate flex flex-row-reverse gap-1 rounded-md" aria-label="Pagination">
            <a
              href="#"
              className="relative h-12 w-12 inline-flex items-center justify-center rounded-l-md px-2 py-2 text-gray-400  hover:bg-gray-50 rounded-md bg-gray-100 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900  hover:bg-gray-50 focus:outline-offset-0" */}
            <a
              href="#"
              aria-current="page"
              className="relative h-12 w-12 z-10 inline-flex items-center justify-center bg-black rounded-md px-4 py-2 text-xl  text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              1
            </a>
            <a
              href="#"
              className="relative h-12 w-12 inline-flex items-center justify-center px-4 py-2 text-xl  text-gray-900  hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              2
            </a>
            <a
              href="#"
              className="relative h-12 w-12 hidden items-center px-4 justify-center py-2 text-xl  text-gray-900  hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              3
            </a>
            <span className="relative h-12 w-12 inline-flex items-center justify-center px-4 py-2 text-xl  text-gray-700  focus:outline-offset-0">
              ...
            </span>
            <a
              href="#"
              className="relative h-12 w-12 hidden items-center px-4 justify-center py-2 text-xl  text-gray-900  hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              8
            </a>
            <a
              href="/"
              className="relative h-12 w-12 inline-flex items-center justify-center rounded-r-md px-2 py-2 text-gray-400  hover:bg-gray-50 rounded-md bg-gray-100 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
