/* eslint-disable react/prop-types */
import React from 'react'
import { useNavigate } from "react-router-dom";
const Food = ({food}) => {
    const navigate = useNavigate();
    return (
        <div className='p-8 shadow-md bg-slate-100 m-4 w-96 cursor-pointer scale-100 hover:bg-amber-100 hover:shadow-lg hover:scale-105 hover:transition-all '>
            <img className='size-96 object-cover' src={food?.image_url}/>
            <div className='font-bold text-xl text-black pt-4'>{food?.title}</div>
            <div className='text-lg text-slate-600 pb-4'>{food?.publisher}</div>
            <button type="button" 
                onClick={()=>navigate(`/details/${food?.recipe_id}`)}
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Details</button>
        </div>
    )
}

export default Food