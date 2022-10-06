

import react, { useEffect } from "react"
import "./Searchbar.css"
import searchIcon from "../../assets/search-icon.svg"
import { useCallback } from "react"
import { useState } from "react"
import LoadingSpinner from "../Loadingspinner/LoadingSpinner"
const Searchbar = (props) => {
    const [inputValue, setinputValue] = react.useState("")
    //create state value with json type
    const [searchResult, setSearchResult] = react.useState([])
    const [isLoading, setIsLoading] = useState(false);
    
    const handleInput = (e) => {
        setinputValue(e.target.value)
    }
    const handleSubmit = (e) => {

        e.preventDefault()
        setIsLoading(true);
        props.parenttoCallback(isLoading)
        //props.parentCallback({dd,isLoading})
        //fetch the data from the api
        fetch(`https://google-shop-scrap.herokuapp.com/google-shopping`,{
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, /',
                'Content-Type': 'application/json'
            },
            
            body: JSON.stringify({
                query: inputValue
            })
        })
        .then(response => response.json())
        .then(data => {
            setIsLoading(false);
            //set the state value with the data fetched
            setSearchResult(data)
            //send the data and isLoading status to the parent component using parentCallback
            //make json object of data and is loading
            props.parentCallback({data})
            props.parenttoCallback(isLoading)
        })

    }



    //get price value from multiRangeSlider using context API

    return (
        <>
            <div className="searchbar-container">
                <input type="text" value={inputValue} onChange={handleInput} placeholder="Search" className="searchbar" />
                <div className="searchbar-box" onClick={handleSubmit}>
                    <img src={searchIcon} alt="search-icon" className="search-icon" />
                </div>
            </div>
        </>

    )
}
export default Searchbar;