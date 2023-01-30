import React from "react";
import Csitf from '../Achiments/csit4.PNG'
import Csits from '../Achiments/csit1.PNG'
import Csitt from '../Achiments/csit2.PNG'
import Csitfo from '../Achiments/csit5.PNG'




console.log(Csitf);
console.log(Csits);
console.log(Csitt);
console.log(Csitfo);
/* This example requires Tailwind CSS v2.0+ */
function Containers() {
    return <div className="max-w-7xl  w-full  flex border-b ">
    {/* Content goes here */}
        <img style={{ height:325, width:340}} src={Csitf}/>
        <img style={{ height:325, width:340}} src={Csits}/>
        <img style={{ height:325, width:340}} src={Csitt}/>
        <img style={{ height:325, width:340}} src={Csitfo}/>
        
     
    </div>
  }
  export default Containers;
  