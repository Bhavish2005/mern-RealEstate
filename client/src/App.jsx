import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import SignIn from './pages/SignIn.jsx';
import About from './pages/About.jsx';
import Profile from './pages/Profile.jsx';
import Signup from './pages/Signup.jsx';
import Header from './Components/Header.jsx';
export default function App() {
  return (
    <BrowserRouter>
     <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/sign-up' element={<Signup/>}/>
        <Route path='/Profile' element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  )
}
