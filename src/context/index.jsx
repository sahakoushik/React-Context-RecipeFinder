/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

export const MainContext = createContext(null);

import React from 'react'

const MainState = ({children}) => {

    const [search, setSearch] = useState("");
    const [foodList, setFoodList] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [details, setDetails] = useState("");
    const [favList, setFavList] = useState([]);

    const handelSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        
        const res= await fetch(`https://forkify-api.herokuapp.com/api/search?q=${search}`);
        const data = await res.json();
        console.log("data", data);
        
        if(data.error){ 
            setLoading(false);
            setError(data.error)
        }
        setFoodList(data);
        setLoading(false);
    }

    // const handelFavorite = (favObject) => {
    //     console.log("favobj", favObject);
    //     let copyFavList = [...favList];
    //     copyFavList.push()
    //     // copyFavList.includes((item) =>{
    //     //     if(item.id === favObject.id){
    //     //         copyFavList.splice(favObject.id , 1)
    //     //     }else{
    //     //         copyFavList.push(favObject)
    //     //     }
    //     // })
    //     setFavList(copyFavList);
        
    //     console.log("favlist", favList)
    // }

    function handelFavorite(favObject){
        console.log(favObject);
        let cpyFavoritesList = [...favList];
        const index = cpyFavoritesList.findIndex(item=> item.recipe_id === favObject.recipe_id)
        console.log("index", index);
    
        if(index === -1) {
          cpyFavoritesList.push(favObject)
        } else {
          cpyFavoritesList.splice(index)
        }
        console.log("cpl", cpyFavoritesList);
        setFavList(cpyFavoritesList)
      }
    
  return (
    <MainContext.Provider 
        value={{
            search,
            setSearch, 
            foodList, 
            loading,
            error, 
            handelSubmit, 
            details, 
            setDetails,
            handelFavorite,
            favList
        }}
    >
        {children}
    </MainContext.Provider>
    )
}

export default MainState