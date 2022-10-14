
import react from "react"

import "./Card.css"
import StarRatings from 'react-star-ratings';
const Card = ({ title, description, image, link, price, seller, delivery, rating }) => {
    return (
        <>
            <div className="card">
                <div className="leftSide" id ="col">
                    <img className="cardImage" src={image} alt="card-image" />
                </div>
                <div className="Right-Side" id ="col">
                        <div className="firstLayer">
                            <p className="cardTitle">{title}</p>
                        </div>
                        <StarRatings
                                rating={rating}
                                starRatedColor="#192024"
                                numberOfStars={6}
                                starDimension="20px"
                                name='rating'
                                starSpacing="2px"
                            />
                       
                        <p className="card-description">{description}</p>
                        <p className="seller">{seller}</p>
                        <p className="delivery">{delivery}</p>
                       
                   
                </div>
               
                <div className="Right-most-side" id ="col">
                    <button className="price">{price}</button>
                    <div className="buy-button">
                        <a href={link} ><button className="card-link">
                        acheter</button></a>
                    </div>
                </div>
              

            </div>
        </>
    )
}
export default Card;