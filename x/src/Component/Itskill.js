import { useState } from "react";
import { useNavigate } from 'react-router-dom';   
import Itdoc from "./Itdoc";
import Softdiscription from "./Softdiscription";




function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  const Itskill = () => {
    const [agreed, setAgreed] = useState(false)
  
    const navigate=useNavigate();
  return (
    <>
    <div className="bg-gradient-to-r from-yellow-500 to-red-500  overflow-hidden lg:px-8 lg:py-24">
        <div className="relative mx-auto">
            <div className="text-center">
                <h2 className="text-1xl font-bold tracking-tight text-white sm:text-7xl">IT SKILLS</h2>
            </div>
        </div>
    </div>


    <div className="bg-gray-200 py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
        <div className="relative max-w-xl mx-auto">
          <svg
            className="absolute left-full transform translate-x-1/2"
            width={404}
            height={404}
            fill="none"
            viewBox="0 0 404 404"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-350 " fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
          </svg>
          <svg
            className="absolute right-full bottom-0 transform -translate-x-1/2"
            width={404}
            height={404}
            fill="none"
            viewBox="0 0 404 404"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
          </svg>




          <div className="mt-1">
            <form action="#" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              


             <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  IT Skills
                </label>
                <div className="mt-1">
                  <input
                    id="Softskills"
                    name="Softskills"
                    type="text"
                    autoComplete="Softskills"
                    className=" py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="Career Objective" className="block text-sm font-medium text-gray-700">
                  IT Skill Discription
                </label>
                <div className="mt-1">
                  <textarea
                    id="Career Objective"
                    name="Career Objective"
                    rows={4}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                    defaultValue={''}
                  />
                </div>
              </div>


              <Itdoc/>

              <div className="sm:col-span-2">
                <button
                onClick={() => navigate("/informationForm")}
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

</>
  )
}
export default Itskill;
