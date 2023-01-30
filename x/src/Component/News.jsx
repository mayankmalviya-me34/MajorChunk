import React from "react";
 function News(){
    const currdate = new Date();
    return(
        <>
            <p>{`Date of information is = ${currdate}`}</p>
        </>
    );
 }
 export default News;