import Icon from "../../Icon/Icon"

import './verticalCard.scss'

const VerticalCard = ({title, date, location, thumbnail, priceFrom, likeClass, setLike}) => {
    return (
        <li className="card" style={{ backgroundImage: `url(${thumbnail})` }}>
            <a href="#">
                <div className="card__inner">
                    <div className="card__blur">
                        <h3 className="card__title">{title}</h3>
                        <p className="card__date">{ date }</p>
                        <p className="card__location">{location}</p>
                        <div className="card__price">{priceFrom}</div>
                    </div> 
                </div>
            </a>
            <Icon 
                id="like" 
                className={likeClass}
                onClick={setLike} />
            <div className="card__repostWrapper">
                <Icon 
                    id="repost" 
                    className="card__repost" />
            </div>
        </li>  
    )
}

export default VerticalCard