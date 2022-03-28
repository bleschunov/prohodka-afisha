const DefaultCardLayout = ({title, date, location, thumbnail, priceFrom, cardClasses, likeClasses}) => {
    return (
        <li className={cardClasses} style={{ backgroundImage: `url(${thumbnail})` }}>
            <a href="#">
                <div className="card__inner">
                    <div className="card__blur">
                        <h3 className="card__title">{title}</h3>
                        <p className="card__date">{ formatDate(date) }</p>
                        <p className="card__location">{location}</p>
                        <div className="card__price">{priceFrom}</div>
                    </div> 
                </div>
            </a>
            <Icon 
                id="like" 
                className={likeClasses}
                onClick={onLike} />
            <div className="card__repostWrapper">
                <Icon 
                    id="repost" 
                    className="card__repost" />
            </div>
        </li>  
    )
}