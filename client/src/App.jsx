import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import About from './pages/About';
import Profile from './pages/Profile';
import SignUp from './pages/Signup';
import Header from './Components/Header';
export default function App() {
  return (
    <BrowserRouter>
     <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/Profile' element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  )
}
