import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import {Routes,Route, BrowserRouter} from "react-router-dom";
import SignIn from './Component/SignIn';
import About from './Component/About';
import InformationForm from './Component/InformationForm';
import DocView from './Component/DocView';
import Profile from './Component/Profile';
import Bdetails from './Component/Bdetails';
import Career from './Component/Career';
import  Educational  from './Component/Educational';
import  Softskill  from './Component/Softskill';
import  Itskill  from './Component/Itskill';
import  Traning  from './Component/Traning';
import  Intrianship  from './Component/Intrianship';
import  Project  from './Component/Project';
import  Achivment  from './Component/Achivment';
import  Activites  from './Component/Activites';
import  Strength  from './Component/Strength';
import  Hobbies  from './Component/Hobbies';
import  Improvement  from './Component/Improvement';
import  Certification  from './Component/Certification';
import  Goverment  from './Component/Goverment';
import  Social  from './Component/Social';








function App() {

  const [login, setLogin] = React.useState(false);

  return (
    <>
      <BrowserRouter>
      <Navbar login={login} setLogin={setLogin} />
      <Routes>
      <Route path='/' element={<Home/>} />

      
      
      <Route path='/signin' element={<SignIn setLogin={setLogin} />} />
      <Route  path='/about' element={<About />} />
      <Route exact path='/informationForm' element={<InformationForm/>} />
      <Route  path='/docview' element={<DocView/>} />
      <Route  path='/profile' element={<Profile/>} />
      <Route path='/details' element={<Bdetails/>} />
      <Route path='/career' element={<Career/>} />
      <Route path='/educationdetils' element={<Educational/>} />
      <Route path='/softskills' element={<Softskill/>} />
      <Route path='/itskills' element={<Itskill/>} />
      <Route path='/industrialtraining' element={<Traning/>} />
      <Route path='/internshipdetails' element={<Intrianship/>} />
      <Route path='/projectdetails' element={<Project/>} />
      <Route path='/achievement' element={<Achivment/>} />
      <Route path='/extraactivity' element={<Activites/>} />
      <Route path='/yourstrenghth' element={<Strength/>} />
      <Route path='/hobbies' element={<Hobbies/>} />
      <Route path='/improvement' element={<Improvement/>} />
      <Route path='/certificates' element={<Certification/>} />
      <Route path='/govtid' element={<Goverment/>} />
      <Route path='/socialmedia' element={<Social/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


