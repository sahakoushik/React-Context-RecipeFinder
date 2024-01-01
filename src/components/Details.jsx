import {useParams} from 'react-router-dom'
import {useEffect,useState,useContext} from 'react'
import { MainContext } from '../context';
import { Loading } from './Loading';

const Details = () => {
    const {id} = useParams();
    const [loading,setLoading] = useState(null);
    const {details,setDetails,} = useContext(MainContext);
    
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
        <div className='m-8 p-16 border shadow-md'>

            {
                loading ? 
                <Loading/> : 
                <>
                    <div className='text-slate-800 text-3xl font-bold text-center'>{details?.title}</div>
                        <div className='text-slate-400 text-xl font-bold text-center mb-8'>{'Publisher: '}{details?.publisher}</div>
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