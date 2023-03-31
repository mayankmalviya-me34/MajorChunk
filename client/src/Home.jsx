import React from 'react'
import Containers from './Component/Containers';
import Title from './Title';
import News from "./News";
import './index.css';
import Hfooter from './Hfooter';
import Banner from './Banner';

 function Home() {
  return (
   <>
    <Banner/>
    

    <Title/>

    <div className=" bg-gradient-to-r from-orange-500 to-violet-500  overflow-hidden lg:px-2 lg:py-16 my-6">
      <div className="relative mx-auto">
        <div className="text-center">
          <h2 className="text-1xl  tracking-tight text-white sm:text-7xl">ACRO NEWS</h2>
        </div>
      </div>
    </div>

    <News/>

    <div className=" bg-gradient-to-r from-violet-500 to-red-500  overflow-hidden lg:px-2 lg:py-16 my-4">
      <div className="relative mx-auto">
        <div className="text-center">
          <h2 className="text-1xl  tracking-tight text-white sm:text-7xl">ACROPOLIS ACHIVEMENT</h2>
        </div>
      </div>
    </div>

    <Containers/>



   
    <Hfooter/>

   </>
  );
}
export default Home;
