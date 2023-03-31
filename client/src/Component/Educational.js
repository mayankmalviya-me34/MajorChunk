import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Edudoc from "./Edudoc";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Educational = () => {
    const [agreed, setAgreed] = useState(false)
    const navigate = useNavigate();
    return (
        <>
            <div className="bg-gradient-to-r from-yellow-500 to-red-500  overflow-hidden lg:px-8 lg:py-24">
                <div className="relative mx-auto">
                    <div className="text-center">
                        <h2 className="text-1xl font-bold tracking-tight text-white sm:text-7xl">EDUCATIONAL DETAILS</h2>
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

                            <div className="mt-1">
                                <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                                    Degree
                                </label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <div className="absolute inset-y-0 left-0 flex items-center">

                                    </div>
                                    <select
                                        type="text"
                                        name="Degree"
                                        id="location"
                                        className="mt-1 block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                        placeholder="Degree"
                                        defaultValue="Degree"
                                    >
                                        <option>Degree</option>
                                        <option>10th</option>
                                        <option>12th</option>
                                        <option>Deploma</option>
                                        <option>Graduate</option>
                                        <option>Post Graduate</option>
                                    </select>
                                </div>
                            </div>


                            <div className="mt-1">
                                <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                                    Field
                                </label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <div className="absolute inset-y-0 left-0 flex items-center">

                                    </div>
                                    <select
                                        type="text"
                                        name="Area"
                                        id="Area"
                                        className="mt-1 block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                        placeholder="Area"
                                        defaultValue="Area"
                                    >
                                        <option>Area</option>
                                        <option>Mathematics</option>
                                        <option>Science</option>
                                        <option>Biology</option>
                                        <option>Arts</option>
                                        <option>Agriculture</option>
                                        <option>ITI</option>
                                        <option>Design</option>
                                        <option>B.EDUCATIONAL</option>
                                        <option>B.Tech</option>
                                        <option>BSE</option>
                                        <option>B.Com</option>
                                        <option>B.com honer</option>
                                        <option>B.Pharma</option>
                                        <option>Low</option>
                                        <option>BBA</option>
                                        <option>BCA</option>
                                        <option>DLAD</option>
                                        <option>BA</option>
                                        <option>MA</option>
                                        <option>MCA</option>
                                        <option>M.com</option>
                                        <option>M.Tech</option>
                                        <option>M.E</option>
                                        <option>MSC</option>
                                        <option>MBA</option>
                                        <option>M.Pharma</option>
                                        <option>MBBS</option>
                                    </select>
                                </div>
                            </div>


                            <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Educational Branch Name
                </label>
                <div className="mt-1">
                  <input
                    id="Branch"
                    name="Branch"
                    type="text"
                    autoComplete="Branch"
                    className=" py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>



              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  School/College Name
                </label>
                <div className="mt-1">
                  <input
                    id="school"
                    name="school"
                    type="text"
                    autoComplete="school"
                    className=" py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>


              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  University/Board Name
                </label>
                <div className="mt-1">
                  <input
                    id="school"
                    name="school"
                    type="text"
                    autoComplete="school"
                    className=" py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                  Education Start Year
                </label>
                <div className="mt-1">
                  <input
                    type="Starte"
                    name="Starte"
                    id="Starte"
                    autoComplete="Starte"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>


              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                Education End Year
                </label>
                <div className="mt-1">
                  <input
                    type="Eend"
                    name="Eend"
                    id="Eend"
                    autoComplete="Eend"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="mt-1">
                                <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                                    Educational Year
                                </label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <div className="absolute inset-y-0 left-0 flex items-center">

                                    </div>
                                    <select
                                        type="text"
                                        name="Year"
                                        id="Year"
                                        className="mt-1 block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                        placeholder="Year"
                                        defaultValue="Year"
                                    >
                                        <option>Year</option>
                                        <option>1st</option>
                                        <option>2nd</option>
                                        <option>3rd</option>
                                        <option>4th</option>
                                        <option>5th</option>
                                        <option>More</option>
                                      
                                    </select>
                                </div>
                            </div>


                            <div className="mt-1">
                                <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                                    Educational Semester
                                </label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <div className="absolute inset-y-0 left-0 flex items-center">

                                    </div>
                                    <select
                                        type="text"
                                        name="Sem"
                                        id="Sem"
                                        className="mt-1 block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                        placeholder="Sem"
                                        defaultValue="Sem"
                                    >
                                        <option>Semester</option>
                                        <option>1st</option>
                                        <option>2nd</option>
                                        <option>3rd</option>
                                        <option>4th</option>
                                        <option>5th</option>
                                        <option>6st</option>
                                        <option>7nd</option>
                                        <option>8rd</option>
                                        <option>More</option>
                                      
                                    </select>
                                </div>
                            </div>



              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                  CGPA
                </label>
                <div className="mt-1">
                  <input
                    type="float"
                    name="cgpa"
                    id="cgpa"
                    autoComplete="cgpa"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>


              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                  Percentage %
                </label>
                <div className="mt-1">
                  <input
                    type="float"
                    name="Per"
                    id="Per"
                    autoComplete="Per"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="Career Objective" className="block text-sm font-medium text-gray-700">
                                    Message
                                </label>
                                <div className="mt-1">
                                    <textarea
                                        id="Career Objective"
                                        name="Career Objective"
                                        rows={4}
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                                        defaultValue={''}
                                    />
                                    <Edudoc/>
                                    <button
        type="button"
        className=" items-center px-3 py-2 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Add New
      </button>
                                </div>
                            </div>

                          

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
    );

}
export default Educational;
