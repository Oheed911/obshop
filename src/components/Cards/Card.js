
import react from "react"

import "./Card.css"
import StarRatings from 'react-star-ratings';
const Card = ({ title, description, image, link, price, seller, delivery, rating }) => {
    return (
        <>
            <div className="card">
                <div className="leftSide">
                    <img className="cardImage" src={image} alt="card-image" />
                </div>
                <div className="Right-Side">
                        <div className="firstLayer">
                            <p className="cardTitle">{title}</p>
                            <button className="price">{price}</button>

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
                 
                    <div className="buy-button">
                

                        <a href={link} ><button className="card-link">
                            Buy</button></a>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Card;