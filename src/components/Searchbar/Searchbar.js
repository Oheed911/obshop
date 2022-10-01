

import react from "react"
import "./Searchbar.css"
import searchIcon from "../../assets/search-icon.svg"

const Searchbar = () => {
    const [inputValue,setinputValue]=react.useState("")
    const handleInput=(e)=>{
        setinputValue(e.target.value)
    }

    return (
        <>
            <div className="searchbar-container">
                <input type="text" value={inputValue} onChange={handleInput} placeholder="Search" className="searchbar" />
                <div className="searchbar-box">
                    <img src={searchIcon} alt="search-icon" className="search-icon" />
                </div>
            </div>
        </>

    )
}
export default Searchbar;