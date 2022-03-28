import './searchCard.scss';

import Icon from '../../Icon/Icon';

const SearchCard = ({title, date, location, thumbnail, priceFrom, likeClass, setLike}) => {
    return (
        <li className="searchCard">
            <a href="#">
                <div className="searchCard__inner">
                    <img className="searchCard__image" src={thumbnail} />
                    <div className="searchCard__info">
                        <h3 className="searchCard__title">{title}</h3>
                        <p className="searchCard__date">{ date }</p>
                        <p className="searchCard__location">{location}</p>
                        <div className="searchCard__price">{priceFrom}</div>
                    </div>
                </div>
            </a>
        </li>
    )
}

export default SearchCard