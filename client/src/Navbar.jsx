import {Link} from "react-router-dom";
import app from "./firebase";
//import SignIn from "./Component/SignIn";
import Logo from "./Images/WhatsApp_Image_2022-09-06_at_16.46.43-removebg-preview.png";
import { getAuth, signOut } from "firebase/auth";


  console.log(Logo);



/* This example requires Tailwind CSS v2.0+ */
const navigation = [
    { name: 'Home' },
    {name: 'Information-form'},
    { name: 'Show' },
    { name: 'About'},
  ]
  
  
  export default function Navbar({ login, setLogin }) {
    const auth = getAuth(app);
    const signot = () =>{
      signOut(auth).then(() => {
        // Sign-out successful.
        setLogin(false);
        alert("Sign-Out Successfully")
        //navigate("/")
      }).catch((error) => {
        // An error happened.
        console.log(error)
      });
    }
    return (
      <header className="bg-white shadow-black">
        <nav className=" max-w-7x4 mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="w-full py-6 flex items-center justify-between border-b border-black lg:border-none  ">
            <div className=" flex items-center justify-center " style={{"display": "flex", "align-content": "center","flex-direction": "row"}}>
              <Link to="/">
                <span className="sr-only">Acropolis</span>
                <img
                  className="h-10 w-auto"
                  src={Logo}
                  alt=""
                />
              </Link>
{login &&
              
              <div className="  flex ml-10 space-x-8 ">
              <Link to="/">
                <div className="text-base font-medium text-black-400 hover:text-gray-500 hover:bg-gray-100">HOME</div>
              </Link>
              <Link to="/informationForm">
                <div className="text-base font-medium text-black-400 hover:text-gray-500 hover:bg-gray-100">INFORMATION-FORM</div>
              </Link>
              <Link to="/docview">
                <div className="text-base font-medium text-black-400 hover:text-gray-500 hover:bg-gray-100">SHOW</div>
              </Link>
              <Link to="/about">
                <div className="text-base font-medium text-black-400 hover:text-gray-500 hover:bg-gray-100 ">ABOUT</div>
              </Link>
              </div>
}
            </div>

            

              
 { !login ?
               (<Link to ='/signin' >
              <div className="inline-block bg-gradient-to-r from-fuchsia-500 to-violet-500 py-2 px-10 border border-transparent rounded-md text-base font-medium cursor-pointer text-white hover:bg-opacity-75" >
               Sign Up
              </div>
              <div className="inline-block bg-gradient-to-r ml-2 from-violet-500 to-fuchsia-500 py-2 px-10 border border-transparent rounded-md text-base font-medium cursor-pointer text-white hover:bg-opacity-75" >
               Sign In
              </div>
              </Link>):( <div className="inline-block bg-gradient-to-r from-fuchsia-500 to-violet-500 py-2 px-10 border border-transparent rounded-md text-base font-medium cursor-pointer text-white hover:bg-opacity-75" onClick={signot} >Sign Out</div>)
 }
             

              
              
            </div>
         
          

          

          <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
            {navigation.map((link) => (
              <div key={link.name}  className="text-base font-medium text-white hover:text-indigo-50">
                {link.name}
              </div>
            ))}
          </div>
        </nav>
      </header>
    );
  }
  