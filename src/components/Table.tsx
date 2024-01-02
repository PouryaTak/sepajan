import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import SwitchToggler from "./Switch";

const people = [
  { name: "کتایون رسولی راد", title: "۰۰۱۴۰۱۰۴۲۱", email: "۰۹۱۲۸۷۶۴۳۲۱", role: "مهمان، میزبان، پرسنل" },
  { name: "کتایون رسولی راد", title: "۰۰۱۴۰۱۰۴۲۱", email: "۰۹۱۲۸۷۶۴۳۲۱", role: "مهمان، میزبان، پرسنل" },
  { name: "کتایون رسولی راد", title: "۰۰۱۴۰۱۰۴۲۱", email: "۰۹۱۲۸۷۶۴۳۲۱", role: "مهمان، میزبان، پرسنل" },
  { name: "کتایون رسولی راد", title: "۰۰۱۴۰۱۰۴۲۱", email: "۰۹۱۲۸۷۶۴۳۲۱", role: "مهمان، میزبان، پرسنل" },
  { name: "کتایون رسولی راد", title: "۰۰۱۴۰۱۰۴۲۱", email: "۰۹۱۲۸۷۶۴۳۲۱", role: "مهمان، میزبان، پرسنل" },
  { name: "کتایون رسولی راد", title: "۰۰۱۴۰۱۰۴۲۱", email: "۰۹۱۲۸۷۶۴۳۲۱", role: "مهمان، میزبان، پرسنل" },
  { name: "کتایون رسولی راد", title: "۰۰۱۴۰۱۰۴۲۱", email: "۰۹۱۲۸۷۶۴۳۲۱", role: "مهمان، میزبان، پرسنل" },
  { name: "کتایون رسولی راد", title: "۰۰۱۴۰۱۰۴۲۱", email: "۰۹۱۲۸۷۶۴۳۲۱", role: "مهمان، میزبان، پرسنل" },
  { name: "کتایون رسولی راد", title: "۰۰۱۴۰۱۰۴۲۱", email: "۰۹۱۲۸۷۶۴۳۲۱", role: "مهمان، میزبان، پرسنل" },
  { name: "کتایون رسولی راد", title: "۰۰۱۴۰۱۰۴۲۱", email: "۰۹۱۲۸۷۶۴۳۲۱", role: "مهمان، میزبان، پرسنل" },
  // More people...
];

export default function Table() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full pb-2 align-middle">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-right text-sm font-semibold text-gray-900 sm:pl-3">
                    نام و نام خانوادگی
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">
                    کد ملی
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">
                    شماره موبایل
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">
                    نوع کاربر
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">
                    انتخاب نقش
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">
                    فعال/غیرفعال
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">
                    <span className="sr-only">see more</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {people.map((person) => (
                  <tr key={person.email} className="odd:bg-gray-100">
                    <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                      {person.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">{person.title}</td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">{person.email}</td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">{person.role}</td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      <select className="h-9 w-full border border-gray-300 rounded-[10px] px-1">
                        <option value="1" key="">
                          مهمان
                        </option>
                        <option value="2" key="">
                          مهمان
                        </option>
                        <option value="3" key="">
                          مهمان
                        </option>
                      </select>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      <SwitchToggler />
                    </td>
                    <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                      <button>
                        <EllipsisVerticalIcon className="w-6" />
                        <span className="sr-only">Edit, {person.name}</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
