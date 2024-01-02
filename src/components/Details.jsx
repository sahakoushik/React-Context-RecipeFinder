import {useParams} from 'react-router-dom'
import {useEffect,useState,useContext} from 'react'
import { MainContext } from '../context';
import { Loading } from './Loading';

const Details = () => {
    const {id} = useParams();
    const [loading,setLoading] = useState(null);
    const {details,setDetails,handelFavorite,favList} = useContext(MainContext);
    
    useEffect(() => {
        setLoading(true)
        const getData = async () => {
            const res = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
            const data = await res.json();
            console.log("dd", data.recipe)
            setDetails(data.recipe);
            setLoading(false)
        }
        
        getData();
    }, []) 

    return (
        <div className='my-8 mx-auto p-16 border shadow-md w-3/4'>

            {
                loading ? 
                <Loading/> : 
                <>
                    <div className='flex flex-row'>
                        <div className='flex-1'>
                            <div className='text-slate-800 text-3xl font-bold'>{details?.title}</div>
                            <div className='text-slate-400 text-xl font-bold mb-8'>{'Publisher: '}{details?.publisher}</div>
                        </div>
                        <button type="button" 
                            onClick={()=>handelFavorite(details)}
                            className="text-white h-10 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                                {
                                    favList && favList.findIndex((item)=> item.recipe_id === details.recipe_id) !== -1 ? "Remove from favorites" : "Add to favorites"
                                }
                        </button>
                    </div>
                    <div className='flex flex-row gap-16'>
                    <div>
                        <img src={details?.image_url}/>
                    </div>
                    <div className='flex-1'>
                        <div className='text-slate-800 text-xl font-bold pb-4'>{"Ingredients"}</div>
                    
                            {
                                details?.ingredients?.map((data,index)=>(
                                    <ul className='list-disc text-slate-600 text-lg' key={index}>
                                        <li>{data}</li>
                                    </ul>
                                    // <div key={index}>{data}</div>
                                ))
                            }
                        </div>
                    </div>
                </>
            }
            
        </div>
    )
}

export default Details