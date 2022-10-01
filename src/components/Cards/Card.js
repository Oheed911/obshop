
import react from "react"

import "./Card.css"
import image1 from "../../assets/pic.jfif"
const Card = ({ title, description, image, link,price }) => {
    return (
        <>
            <div className="card">
                <div className="card-image">
                    <img src={image1} alt="card-image" />
                </div>
                <div className="card-content">
                    <h1 className="card-title">{title}</h1>
                    <buton className="price">{price}</buton>
                    <p className="card-description">{description}</p>
                    <a href={link} className="card-link">Read More</a>
                </div>
            </div>
        </>
    )
}
export default Card;