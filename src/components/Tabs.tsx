
const tabs = [
  { name: "همه", href: "#", current: true },
  { name: "مهمان", href: "#", current: false },
  { name: "میزبان", href: "#", current: false },
  { name: "پرسنل", href: "#", current: false },
];

function classNames(...classes : string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Tabs() {
  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md py-2 pr-3 pl-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          defaultValue={tabs.find((tab: any) => tab.current)!.name}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="">
          <nav className="-mb-px grid grid-flow-col w-max" aria-label="Tabs">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                className={classNames(
                  tab.current
                    ? "border-gray-600 text-gray-600 font-bold"
                    : "border-transparent text-gray-400 hover:border-gray-300 hover:text-gray-700",
                  "whitespace-nowrap border-b-2 p-3 px-7 text-sm font-medium text-center"
                )}
                aria-current={tab.current ? "page" : undefined}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
