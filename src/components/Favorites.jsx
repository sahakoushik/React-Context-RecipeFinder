import { MainContext } from "../context"
import { useContext } from "react"
import Food from "./Food"
const Favorites = () => {
 const {favList} = useContext(MainContext)
 console.log("favlist",favList)
  return (
    <div className='flex flex-wrap justify-evenly'>
      {
        favList.map((food,index)=>(<Food key={index} food={food} count={food.count}/>))
      }
     </div>
  )
}

export default Favorites