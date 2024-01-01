import {useState, useContext} from 'react'
import Food from './Food'
import { MainContext } from '../context';
import Header from './Header';
import { Loading } from './Loading';
const FoodList = () => {
    // const [foodList, setFoodList] = useState();
    const {error,loading,foodList} = useContext(MainContext)
    
    return(
        <div>
            <Header/>
            {
                loading ? 
                <Loading/> : 
                
                error ? 
                <div className='text-red-500 font-bold text-lg text-center'>{error}</div>:
                
                foodList ?
                <div className='flex flex-wrap justify-evenly'>
                    {

                        foodList.recipes.map((food,index)=>(<Food key={index} food={food} count={food.count}/>))
                    }
                </div>
                :
                <div> Search To find food recipe</div>
            }
            {/* <div className='flex flex-wrap justify-evenly'>
                
                {
                    foodList ?
                    foodList.recipes.map((food,index)=>(<Food key={index} food={food} count={food.count}/>))
                    :
                    <div> Search To find food recipe</div>
                }
            </div> */}
        </div>
    )
}

export default FoodList