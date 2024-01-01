
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
        <div className='flex gap-4 m-8 items-center'>
            <div className='text-green-600 font-bold text-3xl flex-1'>FoodFare</div>
            <Link to='/' className='font-semibold text-lg cursor-pointer'>Home</Link>
            <div className='font-semibold text-lg cursor-pointer'>Favorites</div>
        </div>

     </div>
  )
}

export default NavBar