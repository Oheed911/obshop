/*react component for color filter for products*/
import React, { useState } from "react";


const ColorFilter = () => {
    //make an Array of colors to be displayed

    //save the selected color in state
    const [selectedColor, setSelectedColor] = useState("");

    //handle the click event of the color
    const handleColorClick = (event,color) => {
        event.preventDefault();
        //set the selected color
        setSelectedColor(color);
        console.log(color);
    };
    //click on radio button
    return (
        <div>
            
            <div className="color-filter">
                <input type="radio" name="color" id="red" value="red" onClick={handleColorClick}/>
                <label for="red">Red</label>
                <input type="radio" name="color" id="blue" value="blue" onClick={handleColorClick}/>
                <label for="blue">Blue</label>
                <input type="radio" name="color" id="green" value="green" onClick={handleColorClick}/>
                <label for="green">Green</label>
                <input type="radio" name="color" id="yellow" value="yellow" onClick={handleColorClick}/>
                <label for="yellow">Yellow</label>
                <input type="radio" name="color" id="orange" value="orange" onClick={handleColorClick}/>
                <label for="orange">Orange</label>
            </div>
        </div>
    );
};


export default ColorFilter;

