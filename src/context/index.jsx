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
            setDetails
        }}
    >
        {children}
    </MainContext.Provider>
    )
}

export default MainState