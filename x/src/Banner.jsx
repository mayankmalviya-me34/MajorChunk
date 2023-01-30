import React from "react";
import logo from "./Images/banner1.jpg";
import B3 from "./Images/B3.jpg";
import Im from "./Images/B2.jpg";

console.log(logo);
console.log(B3);
console.log(Im);

function Banner(){
    return (
        <>
             <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={logo} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={B3} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 " src={Im} alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
        </>
    );
}
export default Banner;