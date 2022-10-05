

import react from "react"
import "./Searchbar.css"
import searchIcon from "../../assets/search-icon.svg"

const Searchbar = () => {
    const [inputValue, setinputValue] = react.useState("")
    //create state value with json type
    const [searchResult, setSearchResult] = react.useState({})
    console.log("herherhe",searchResult)
    const handleInput = (e) => {
        setinputValue(e.target.value)
    }
    const handleSubmit = async (e) => {
        //send input value to the backend
        //make fetch await for the response
         await fetch("https://google-shop-scrap.herokuapp.com/google-shopping", {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: inputValue
            })
        })
        .then(response => {        
            if (response.ok) {
                //set response result to the state setSearchResult
                setSearchResult(response.json())
              } else {
                 throw new Error('Something went wrong ...');
              }
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