import { useState,useEffect} from 'react';
  import { BrowserRouter,Routes ,Route, Navigate } from 'react-router-dom';
  import Login from './components/Login';
  import NavBar from "./components/NavBar"
  import Signup from './components/Signup';
  import Home from "./components/Home";
import { getLocalStorageinfo } from './utils/getLocalStorageinfo';


  function App() {
    const [isAuth, setIsAuth] = useState(false);
    useEffect(() => {
      fetch('http://localhost:4000/user/auth' ,{
          method: "POST",
          headers: {
            authorization: getLocalStorageinfo(),
              "Content-Type": "application/json",
          }, 
      })
    .then ((response) => {
      console.log(response.status)
      if(response.status === 200){
        response.json()
      }
    })
    .then (data => setIsAuth(data.isAuthenticated))
    .catch((error)=>{})
    }, []);
    
    return (
      <BrowserRouter>
      <NavBar setIsAuth={setIsAuth}/>
    
      <Routes >
       <Route path="/home" element={ isAuth? <Home />:<Navigate to ="/login"/>} /> 
       <Route path="/login" element={ isAuth? <Navigate to ="/home"/>:<Login setIsAuth = {setIsAuth}/>}/> 
      <Route path="/signup" element={ isAuth? <Navigate to ="/home"/>:<Signup setIsAuth={setIsAuth}/>}/> 
      
      
      </Routes>
      </BrowserRouter>
      
    );
  }

  export default App;
