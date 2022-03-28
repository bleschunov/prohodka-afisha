import classNames from "classnames"
import { useState, createRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useGetCitiesQuery } from '../../app/api'
import { setCity } from "../../app/citySlice"

import Icon from "../Icon/Icon"
import Spinner from "../spinner/Spinner"
import { CSSTransition } from "react-transition-group"

import './dropdown.scss'

const Dropdown = ({className}) => {
    const [open, setOpen] = useState(false);

    const { data, isFetching } = useGetCitiesQuery();

    const selectedCity = useSelector(state => state.city.city.nameRu)
    const dispatch = useDispatch();

    const classes = classNames('dropdown', className)

    const dropdown = createRef();

    const getCities = () => {
        if (isFetching) {
            return <Spinner />
        }

        return data.map((city, index) => {
            return (
                <li 
                    className={ classNames('dropdown__item', {
                        'dropdown__item_selected': city.nameRu === selectedCity
                    }) }
                    key={index} 
                    onClick={() => dispatch(setCity(city))}> 
                    {city.nameRu}
                 </li>
            )
        })
    }
    
    const onDropdownClick = (event) => {
        if (event.target.dataset.city) {
            setOpen(false)
            return
        }

        setOpen(open => !open)
    }

    return (
        <button
            open={open} 
            className={classes}
            onClick={onDropdownClick}
            onBlur={() => setOpen(false)} >
            <Icon 
                className="dropdown__location"
                id="location" />
            <p className="dropdown__city">{selectedCity}</p>
            <div className="dropdown__arrowWrapper">
                <Icon 
                    className="dropdown__arrow"
                    id="arrow" />
            </div>
            <CSSTransition
                in={open}
                timeout={300}
                classNames='dropdown__window'>
                <ul className="dropdown__window">
                    { getCities() }
                </ul>
            </CSSTransition>
        </button>
    )
}

export default Dropdown