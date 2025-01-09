import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import {useSelector} from  'react-redux'

export default function Header() {
  const { currentUser}= useSelector(state=>state.user)
  return (

    <header className='bg-green-200 shadow-md'> 
    <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
    <Link to='/'>
    <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
    <span className='text-green-500'>Dreamspace</span>
    <span className='text-green-700'>Estates</span> 
    </h1>
    </Link>
    <form className='bg-green-100 p-3 rounded-lg flex items-center'> 
    <input type='text' placeholder='Search..' className='bg-transparent focus:outline-none w-24 sm:w-64'/>
    <FaSearch className=' text-green-600'/>
    </form>
    <ul className=' flex gap-4'>
    
      <li className='hidden sm:inline text-green-700 hover:underline '>Home</li>
      <Link to='/about'>
      <li className='hidden sm:inline text-green-700 hover:underline' >About</li>
      </Link>
     
      <Link to='/Profile'>
      {currentUser?(<img src={currentUser.avatar} alt='profileimg' className='w-9 h-9 rounded-full'/>):(<li className=' text-green-700 hover:underline' >Sign In</li>)}
      {/* <li className=' text-green-700 hover:underline' >Sign In</li> */}
      </Link>
    </ul>
    </div>
   
    
  </header>)
}
