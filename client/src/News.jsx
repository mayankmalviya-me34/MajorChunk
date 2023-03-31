import React from "react";
import N1 from "./NewsImage/news1.PNG";
import N2 from "./NewsImage/news2.PNG";
import N3 from "./NewsImage/news3.PNG";
import N4 from "./NewsImage/news4.PNG";
import N5 from "./NewsImage/news5.PNG";

console.log(N1);
console.log(N2);
console.log(N3);
console.log(N4);
console.log(N5);

function News() {
    return (
        <>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={N1} alt="First slide" />
                    </div>
                </div>
            </div>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={N2} alt="First slide" />
                    </div>
                
                </div>
            </div>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={N3} alt="First slide" />
                    </div>
                </div>
            </div>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={N4} alt="First slide" />
                    </div>
                </div>
            </div>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={N5} alt="First slide" />
                    </div>
                </div>
            </div>

        </>
    );
}
export default News;