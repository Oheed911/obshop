

import react, { useEffect } from "react"
import "./Searchbar.css"
import searchIcon from "../../assets/search-icon.svg"
import { useCallback } from "react"
import { useState } from "react"
import SyncLoader from "react-spinners/SyncLoader";
const Searchbar = (props) => {
    const [inputValue, setinputValue] = react.useState("")
    //create state value with json type
    const [searchResult, setSearchResult] = react.useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [ip, setIP] = useState('');


    const handleInput = (e) => {
        setinputValue(e.target.value)
    }
    //get user's location country
    const getIP = async () => {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        setIP(data.ip);
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        getIP();
        console.log(props.source_list);
        setIsLoading(true);
        fetch(`https://google-shop-scrap.herokuapp.com/google-shopping`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, /',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                query: inputValue,
                price_low: props.min,
                price_high: props.max,
                ip: ip,
                selected_source: props.source_list
            })
        })
            .then(response => response.json())
            .then(data => {
                setIsLoading(false);
                //set the state value with the data fetched
                setSearchResult(data)
                props.parenttocallback({ isLoading })
                props.parentCallback({ data })
            })

    }
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e)
        }
    }
    useEffect(() => {
        getIP();
    }, []);

    //get price value from multiRangeSlider using context API

    return (
        <div className="sl-container">

            <div className="searchbar-container">
                <input type="text" value={inputValue} onChange={handleInput} placeholder="Search" onKeyPress={handleKeyPress} className="searchbar" />
    
                <div className="searchbar-box" onClick={handleSubmit}>
                    <img src={searchIcon} alt="search-icon" className="search-icon" />
                </div>
              
            </div>
            {isLoading &&<div className="load-search">
            <SyncLoader color="#23a6f0" />
                     </div>
                     }
       
        </div>

    )
}
export default Searchbar;