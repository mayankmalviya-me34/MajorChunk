import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { Link, useNavigate} from "react-router-dom";
import app from '../firebase';
import {useState} from 'react';
import Logoes from "../Images/WhatsApp_Image_2022-09-06_at_16.46.43-removebg-preview.png";



console.log(Logoes);

function App({setLogin}) {


const auth = getAuth(app);
const navigate=useNavigate();
const provider = new GoogleAuthProvider()
const [email, setEmail] = useState("")
const [password, setpassword] = useState("");
const [currentUser,setCurrentUser] = useState(null);

//signout
const signot = () =>{
  signOut(auth).then(() => {
    // Sign-out successful.
    setLogin(false);
    // alert("Sign-Out Successfully")
  }).catch((error) => {
    // An error happened.
    console.log(error)
  });
}

const signUp = () =>{
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    setCurrentUser(userCredential.user);
   // alert("Successfully created account");
  })
  .catch((error) => {
    const errorCode = error.code;
    alert(errorCode);
  });
}

//google
const signInWithGoogle = () =>{
  signInWithPopup(auth, provider)
  .then((userCredential) =>{
    const googles = userCredential.googles;
    setLogin(true);
     console.log(googles);
     navigate("/")
      //alert("Google Sign-in successfully")
  }).catch((error)=>{
      console.log(error)
  });

};


const signin = () => {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    setLogin(true);
    console.log(user);
   // alert("Login Successfully");
    navigate("/")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    alert(errorCode)
  });
}
  return (
    <>
      {/*
        This example requires updating your template:

        
        <html class="h-full bg-gray-50">
        <body class="h-full">
        
      */}
      <div className="min-h-full flex flex-col justify-center sm:px-6 lg:px-8">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-4 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src={Logoes}
            alt="Workflow"
          />
          <h2 className="mt-2 mb-2 text-center text-2xl font-bold text-indigo-900">Sign In<br></br> Student Talent Portfolio</h2>
          
        </div>
          
              <div>
                <label htmlFor="email" className="mt-3 block text-sm font-medium text-gray-700">
                  Email address
                  <span className= 'text-red-700 pl-2'>*</span>
                </label>
                <div className="mt-1">
                <input type={"email"} placeholder="email"
                className="mt-3 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={(e) => setEmail(e.target.value)}/>
                </div>
              </div>

              <div>
                <label htmlFor="password" className="mt-3 block text-sm font-medium text-gray-700">
                  Password
                  <span className= 'text-red-700 pl-2'>*</span>
                </label>
                <div className="mt-3">
                 
                          <input type={"password"} placeholder="password"
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          onChange={(e) => setpassword(e.target.value)}/>
                </div>
              </div>           

              <div className='mt-2 flex'>
                <button
                  type="submit"
                  onClick={signUp}
                  className="w-1/2 m-2 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign Up
                </button>
                {console.log(currentUser)}
               {currentUser===null?(<button
                  type="submit"
                  onClick={signin}
                  className="w-1/2 m-2 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Login
                </button>):(<button>Sign Out</button>)}
              </div>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div>
                  
                {console.log(currentUser)}
               {currentUser===null?(<a
                    onClick={signInWithGoogle}
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Sign in with Google</span>
                     
                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"                        clipRule="evenodd"
                      />
                    </svg>
                  </a>):(<button>Sign Out</button>)}
                </div>

                <div>
                  <a
                    onClick={signot}
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Sign in with GitHub</span>
                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default App;