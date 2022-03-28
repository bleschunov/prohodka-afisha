import classNames from "classnames"
import { useEffect, useRef, useState } from 'react'
import { useSelector } from "react-redux"
import Icon from '../Icon/Icon'
import Spinner from "../spinner/Spinner"
import { useGetEventsQuery } from "../../app/api"
import EventCard from "../eventCard/EventCard"
import VerticalCard from "../eventCard/verticalCard/VerticalCard"

import './rowOfCards.scss'

export const Title = ({children}) => {
    return <h3 className="row__header title">{children}</h3>
}

const RowOfCards = ({type, header, className}) => {
    const 
        [scroll, setScroll] = useState(0),
        [leftButton, setLeftButton] = useState(false),
        [rightButton, setRightButton] = useState(true)
    
    const rowClass = classNames('row', className)

    const ref = useRef()
    
    useEffect(() => {
        ref.current.scrollTo({
            left: scroll,
            behavior: 'smooth'
        })
        setLeftButton(scroll !== 0)
        setRightButton(ref.current.scrollWidth !== ref.current.clientWidth + scroll)
    }, [scroll])

    

    const getScrollStep = () => {
        const 
            row = ref.current,
            gap = parseInt(window.getComputedStyle(row).gap),
            rowWidth = parseInt(window.getComputedStyle(row).width),
            cardWidth = parseInt(window.getComputedStyle(row.children[0]).width),
            cardNumber = Math.floor(rowWidth / (cardWidth + gap))

        return cardNumber * (cardWidth + gap)
    }

    const onRightButton = () => {
        setScroll(scroll => {
            const scrollStep = getScrollStep()
            if (scroll + ref.current.clientWidth + scrollStep > ref.current.scrollWidth) {
                console.log('1')
                return ref.current.scrollWidth - ref.current.clientWidth
            }
            console.log('2')
            return scroll + scrollStep
        })
    }

    const onLeftButton = () => {
        setScroll(scroll => {
            const scrollStep = getScrollStep()
            if (scroll - scrollStep < 0) {
                return 0
            }

            return scroll - scrollStep
        })
    }

    const city = useSelector(state => state.city.city.nameEn)
    const { data, isFetching } = useGetEventsQuery({ city, params: { type } })

    const renderCard = ({id, ...event}) => {
        return (
            <EventCard key={id} {...event} >
                { VerticalCard }
            </EventCard>
        )
    }

    if (data && data.length === 0) return null
    
    return (
        <section className={rowClass}>
            
            {header}
           
            <div className="row__wrapper"> 
                <div ref={ref} className="row__flex">
                    { isFetching ? <Spinner /> : data.map(renderCard) }
                </div>
                <button 
                    className={
                        classNames(
                            'row__button',
                            'row__button_left',
                            { 'row__button_none': !leftButton }
                        )
                    }
                    onClick={onLeftButton} >
                    <Icon 
                        className="row__arrow"
                        id="arrow"
                        width="24"
                        height="36" />
                </button>
                <button 
                    className={
                        classNames(
                            'row__button',
                            'row__button_right',
                            { 'row__button_none': !rightButton }
                        )
                    }
                    onClick={onRightButton} >
                    <Icon 
                        className="row__arrow"
                        id="arrow"
                        width="24"
                        height="36" />
                </button>
            </div>
        </section>

    )
}

export default RowOfCards