import { useState } from "react";
import { Switch } from '@headlessui/react'
import Career from "./Career";
import { useNavigate } from 'react-router-dom';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



function Bdetails() {
  const [agreed, setAgreed] = useState(false)

  const [details, setDetails] = useState({
    fName:"", 
    lName:"",
    email:"", 
    phoneNo:"", 
    dob:"", 
    country:"", 
    state:"", 
    address:"", 
    zipCode:""
  });

  //let name, value;

  const navigate=useNavigate();

  const handleInput = (e) => {
   // name = e.target.name;
    //value = e.target.value;
    details[e.target.name]= e.target.value;
    setDetails({ ...details, details});
  };


  const handleSubmit =  async (e) =>{
    e.preventDefault();
    const {fName, lName, email, phoneNo, dob, country, state, address, zipCode} = details;
    const res = await fetch("/details", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fName, lName, email, phoneNo, dob, country, state, address, zipCode
      }),
    });
    const data = await res.json();
    if(!data|| data.status===422){
      console.log("Please fill all the fields");
    }
    else
    {
      if(fName && lName && email && phoneNo && dob && country && state && address && zipCode){
        alert("details Submit Successfully");
      }
    }
    setDetails({
      fName:"", 
      lName:"",
      email:"", 
      phoneNo:"", 
      dob:"", 
      country:"", 
      state:"", 
      address:"", 
      zipCode:""
    })
  };

  return (
    <>
    {console.log(details)}
      <div className="bg-gradient-to-r from-yellow-500 to-red-500  overflow-hidden lg:px-8 lg:py-24">
        <div className="relative mx-auto">
          <div className="text-center">
            <h2 className="text-1xl font-bold tracking-tight text-white sm:text-7xl">Basic Information</h2>
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
            <form action="" onSubmit={handleSubmit} encType="multipart/form-data" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                  First name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    defultValue="fname"
                    name="fName"
                    autoComplete="given-name"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    onChange={handleInput}
                  />

                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                  Last name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    defaultValue=""
                    name="lName"
                    autoComplete="family-name"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    onChange={handleInput}

                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="mt-1">
                  <input
                   
                    name="email"
                    type="email"
                    defaultValue={details.email}
                    autoComplete="email"
                    className=" py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    onChange={handleInput}

                  />
                </div>
              </div>
              
              <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <label htmlFor="country" className="sr-only">
                      Country
                    </label>
                    <select
                      //id="country"
                      name="countrycode"
                    //  onChange={handleInput}
                      className="h-full py-1  pl-4 pr-8 border-transparent bg-transparent text-gray-500 focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                    >
                      <option value = "ind">IND</option>
                      <option value = "ca">CA</option>
                      <option value = "eu">EU</option>
                      <option value = "us">US</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    defaultValue={details.phoneNo}
                    name="phoneNo"
                    autoComplete="tel"
                    className="py-3 px-30 block w-full pl-28 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    placeholder=    "+91 000-000-0000"
                    onChange={handleInput}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="date-of-barth" className="block text-sm font-medium text-gray-700">
                  DOB
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 flex items-center">

                  </div>
                  <input
                    type="text"
                    defaultValue={details.dob}
                    name="dob"
                    autoComplete="tel"
                    className="py-3 px-4 block w-full pl-25 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    placeholder="(yyyy)/(mm)/(dd)"
                    onChange={handleInput}
                  />
                </div>
              </div>

              <div className="mt-1">
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                  Country
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 flex items-center">

                  </div>
                  <select
                    type="Location"
                    //value={details.country}
                    name="country"
                    className="mt-1 block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    placeholder="location"
                    defaultValue="country"
                    onChange={handleInput}
                  >
                  <option >Select country</option>
                    <option value = "ind">India</option>
                    <option value = "us">United States</option>
                    <option value = "canada">Canada</option>
                    <option value = "mexico">Mexico</option>
                  </select>
                </div>
              </div>

              <div className="mt-1">
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                  States
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 flex items-center">

                  </div>
                  <select
                    type="Location"
                    value={details.state}
                    name="state"
                    className="mt-1 block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    placeholder="location"
                    defaultValue="State"
                    onChange={handleInput}
                  >
                    <option>States</option>
                    <option>Madhya Pradesh</option>
                    <option>Andhra Pradesh</option>
                    <option>Panjab</option>
                    <option>Assam</option>
                    <option>Uttar Pradesh</option>
                    <option>Karnataka</option>
                    <option>Tamil Nadu</option>
                    <option>Maharashtra</option>
                    <option>Keral</option>
                    <option>Himachal Pradesh</option>
                    <option>Gujarat</option>
                    <option>Arunachal Pradesh</option>
                    <option>Odisha</option>
                    <option>Manipur</option>
                    <option>Haryana</option>
                    <option>Chattiesgarh</option>
                    <option>Rajisthan</option>
                    <option>Goa</option>
                    <option>Tripura</option>
                    <option>Bihar</option>
                    <option>Mizoram</option>
                    <option>Sikkim</option>
                    <option>Nagaland</option>
                    <option>West Bengal</option>
                    <option>Jharkhand</option>
                    <option>Uttarakhand</option>
                    <option>Meghalaya</option>
                    <option>Telangana</option>
                    <option>J & K</option>
                  </select>
                </div>
              </div>

            
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <div className="mt-1">
                  <input
                  
                    name="address"
                    type="text"
                    defaultValue={details.address}
                    autoComplete="Adress"
                    className=" py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    onChange={handleInput}
                  />
                </div>
              </div>


              
              <div className="mt-1">
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                  Zipcode
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 flex items-center">
                  </div>
                  <input
                    type="text"
                    defaultValue={details.zipCode}
                    name="zipCode"
                    className="mt-1 block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    placeholder=" 0000-0000"
                    onChange={handleInput}
                  />
                </div>
              </div>


              <div className="sm:col-span-2">
                <button
                //onClick={() => navigate("/informationForm")}
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
export default Bdetails;