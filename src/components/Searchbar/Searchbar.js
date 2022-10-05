

import react from "react"
import "./Searchbar.css"
import searchIcon from "../../assets/search-icon.svg"

const Searchbar = (props) => {
    const [inputValue, setinputValue] = react.useState("")
    //create state value with json type
    const [searchResult, setSearchResult] = react.useState([])
    
    const handleInput = (e) => {
        setinputValue(e.target.value)
    }
    const handleSubmit = async (e) => {
        //send input value to the backend
        //make fetch await for the response
         const data=await fetch("https://google-shop-scrap.herokuapp.com/google-shopping", {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            
            body: JSON.stringify({
                query: inputValue
            })
        })


        let text=(await data.text())
        console.log(text)
        //set the state value with the response
        setSearchResult(JSON.parse(text));
        //console.log(searchResult);
        props.parentCallback(searchResult);
        
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