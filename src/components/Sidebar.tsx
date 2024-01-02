"use client";
import { Disclosure } from "@headlessui/react";
import {
  CalendarIcon,
  FaceSmileIcon,
  HomeModernIcon,
  ReceiptRefundIcon,
  UsersIcon,
  Cog6ToothIcon,
  ChatBubbleBottomCenterIcon,
  StarIcon,
  ChevronDownIcon,
  ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  {
    name: "مدیریت کاربران",
    icon: UsersIcon,
    current: true,
    children: [{ name: "آمار کاربران", href: "#", current: false }],
  },
  { name: "مدیریت نقش‌ها", href: "#", icon: FaceSmileIcon, current: false },
  {
    name: "مدیریت اقامتگاه",
    icon: HomeModernIcon,
    current: false,
    children: [
      { name: "درخواست اقامتگاه‌ها", href: "#", current: false },
      { name: "درخواست‌ها", href: "#", current: false },
      { name: "تاریخچه تغییرات", href: "#", current: false },
    ],
  },
  {
    name: "مدیریت رزرو‌ها",
    icon: ReceiptRefundIcon,
    current: false,
    children: [
      { name: "لیست رزرو‌ها", href: "#", current: false },
      { name: "لیست سفرها", href: "#", current: false },
    ],
  },
  { name: "مدیریت مالی", href: "#", icon: ReceiptRefundIcon, current: false },
  {
    name: "تنظیمات",
    icon: Cog6ToothIcon,
    current: false,
    children: [{ name: "نوع ساختمان", href: "#", current: false }],
  },
  { name: "تقویم", href: "#", icon: CalendarIcon, current: false },
  { name: "مدیریت شکایات", href: "#", icon: ChatBubbleBottomCenterIcon, current: false },
  { name: "مدیریت نظرات", href: "#", icon: StarIcon, current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function Sidebar() {
  return (
    <div className="flex flex-col gap-y-5 overflow-y-auto border-r no-scrollbar border-gray-200 bg-white px-6 shadow-xl shadow-black/5 flex-grow-0 w-[291px] rounded-lg h-[calc(100vh-180px)]">
      <div className="flex shrink-0 items-center py-4">
        <a
          href="#"
          className="flex items-center gap-x-4 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
        >
          <img
            className="h-[60px] w-[60px] rounded-full bg-gray-100"
            src="https://i.pravatar.cc/300"
            alt=""
          />
          <span className="sr-only">Your profile</span>
          <div className="flex flex-col">
            <span>گلناز فراهانی</span>
            <span className="text-cyan-300 text-sm font">ویرایش حساب کاربری</span>
          </div>
        </a>
      </div>
      <nav className="flex flex-1 flex-col pb-4">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  {!item.children ? (
                    <a
                      href={item.href}
                      className={classNames(
                        item.current ? "bg-gray-100" : "hover:bg-gray-100",
                        "group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold text-gray-700"
                      )}
                    >
                      <item.icon className="h-6 w-6 shrink-0 text-gray-400" aria-hidden="true" />
                      {item.name}
                    </a>
                  ) : (
                    <Disclosure as="div">
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            className={classNames(
                              item.current ? "bg-gray-100" : "hover:bg-gray-100",
                              "flex items-center w-full text-left rounded-md p-3 gap-x-3 text-sm leading-6 font-semibold text-gray-700"
                            )}
                          >
                            <item.icon className="h-6 w-6 shrink-0 text-gray-400" aria-hidden="true" />
                            {item.name}
                            <ChevronDownIcon
                              className={classNames(open ? "rotate-180 " : "", "mr-auto h-5 w-5 shrink-0")}
                              aria-hidden="true"
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel as="ul" className="mt-1 px-">
                            {item.children.map((subItem) => (
                              <li key={subItem.name}>
                                {/* 44px */}
                                <Disclosure.Button
                                  as="a"
                                  href={subItem.href}
                                  className={classNames(
                                    subItem.current ? "bg-gray-50" : "hover:bg-gray-50",
                                    "block rounded-md py-3 pr-9 text-sm leading-6 text-gray-700"
                                  )}
                                >
                                  {subItem.name}
                                </Disclosure.Button>
                              </li>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  )}
                </li>
              ))}
              <li>
                <button className="flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-gray-700">
                  <ArrowRightStartOnRectangleIcon className="h-6 w-6 text-red-400 rotate-180" aria-hidden="true" />
                  <span>............</span>
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
