import React, { useEffect, useState } from "react";

//this custom hook will serve similar to useState hook but store the information into local storage, this way we can store information when the user leaves the page and comes back

// we are using this hook to take into account two different types of data which will be stored in local storage. the key which is a string literal of expense or budget and the second is the default value which is an array of budgets or expenses that were previously stored in local storage

export default function useLocalStorage<Type>(key:string, defaultValue: Type): [Type, React.Dispatch<React.SetStateAction<Type>>]
{
    //get value from local storage otherwise, fall back to the original value which is the initial data
    const [value, setValue] = useState(() => {
        //get the values from local storage using the key
        const jsonValue = localStorage.getItem(key)
      
        // if there are values, return a parsed version and set to value in our state
        if (jsonValue !== null) return JSON.parse(jsonValue) as Type

        // if there is no values, set default value to value in useState 
        return defaultValue
    });

    //now that our value state has changed, update the new value into local storage
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))

    }, [key, value])

    return [value, setValue]
};