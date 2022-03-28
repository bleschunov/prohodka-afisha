import classNames from "classnames"
import EventCard from "../eventCard/EventCard"
import SearchCard from "../eventCard/searchCard/SearchCard"
import { CSSTransition } from "react-transition-group"

import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useGetEventsQuery } from "../../app/api"

import Icon from "../Icon/Icon"
import Spinner from "../spinner/Spinner"

import './search.scss'


const Search = ({className}) => {
    const classes = classNames('search', className)

    const [value, setValue] = useState('')
    const [open, setOpen] = useState(false)

    const city = useSelector(state => state.city.city.nameEn)

    const { data, isFetching } = useGetEventsQuery({ city, params: { q: value } })

    
    const renderCard = (props) => {
        return (
            <EventCard key={props.id} {...props}>
                { SearchCard }
            </EventCard> 
        )
    }
    

    return (
        <div className={classes}>
            <div className="search__search">
                <label className="search__inputLabel">
                    <input 
                        className="search__input" 
                        type="text" 
                        placeholder="Поиск"
                        onFocus={() => setOpen(true)}
                        onBlur={() => setOpen(false)}
                        onChange={event => setValue(event.target.value)} />
                </label>
                <Icon 
                    className="search__icon"
                    id="search" />
            </div> 
            <CSSTransition
                in={open}
                timeout={300}
                classNames="search__window">
                <ul className="search__window">
                    { isFetching ? <Spinner /> : data.map(renderCard)}
                </ul>
            </CSSTransition>
        </div>
    )
}

export default Search