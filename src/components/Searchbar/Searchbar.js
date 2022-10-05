

import react from "react"
import "./Searchbar.css"
import searchIcon from "../../assets/search-icon.svg"

const Searchbar = () => {
    const [inputValue, setinputValue] = react.useState("")
    const handleInput = (e) => {
        setinputValue(e.target.value)
    }
    const handleSubmit = (e) => {
        //send input value to the backend
        fetch("https://google-shop-scrap.herokuapp.com/google-shopping", {
            method: 'post',
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
                console.log(response.json());
              } else {
                 throw new Error('Something went wrong ...');
              }
        })
        .then(data => {
            console.log(data)
        })
        .catch(error => console.log(error));
        e.preventDefault()
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