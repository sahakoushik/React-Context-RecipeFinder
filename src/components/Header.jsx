import React, { useContext } from 'react'
import { MainContext } from '../context';
import NavBar from './NavBar';

const Header = () => {
    const {search, setSearch, handelSubmit, foodList} = useContext(MainContext)
    // console.log("search", search);
  return (
    <div>
        <div className='flex gap-4 my-4 items-center'>
            <div className='flex-1 justify-center align-center'>
            <form onSubmit={handelSubmit}>
                <input
                    className='mx-auto flex bg-slate-100 p-3 w-1/2 shadow-lg' 
                    value={search} 
                    onChange={(e)=> setSearch(e.target.value)} 
                    type="text" 
                    placeholder="search"
                />
                </form>  
            </div>
        </div>
        <div className='text-center text-lg p-4'>Found <span className='text-green-500 font-bold text-3xl'>{foodList?.count ? foodList.count : 0}</span> {search} dishes</div>
    </div>
  )
}

export default Header