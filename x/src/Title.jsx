import React from "react";
import './index.css';
function Title(){
    return(
        <>
        
           <section className='main-peragraph'>
           <img  src="data:image/jpeg;base64,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TbSW3nI8tp9vLE8ntRpgveFnFWUBsNbigF2rVQbcbR+lTJzj53PwtiaeD0GoVd0ndhXQKMhQtmd6gDoDkzGOBafdu7sFgUbJZm8VZRkfmfnA1p4up2DJOIEHS9sdJbjunZ2YAqi1OXbcqOuFxnmtin2Bv3TjJ+VWl2d4HZkwzHbTYWColdjuy7cqqram4kci2OvKZU7N6VQAtCrhQoKllYAbcBWByuNi4IPo9Zg9m9Jgr3C7TgbQWCYCBNuwHG0oqqVxhgoyDgQMbdptOG25f5+xSKXKs29kARsYOXRlB6E7cfOGbuV9XB6EdnWtQzMHJ5/ODlwQM4XxktgYBJJPOWEBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBET5iB9iIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiB//2Q=="/>
            <p>Welcome to</p>
            <h1>Student Talent Portfolio</h1>
        </section> 
        </>
    );
}
export default Title;