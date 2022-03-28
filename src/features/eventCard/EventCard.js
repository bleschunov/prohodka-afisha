import classNames from 'classnames'
import PropeTypes from 'prop-types'
import { useState } from 'react'

const EventCard = ({children, date, ...data}) => {
    const [like, setLike]= useState(false)

    const likeClass = classNames('card__like', {
        card__like_active: like
    })

    const formatDate = ({year, month, day}) => {
        const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 
        'июня', 'июля', 'августа', 'сентября', 'октября', 
        'ноября', 'декабря']

        return `${day} ${months[month - 1]} ${year}`
    }


    return children({likeClass, setLike, date: formatDate(date), ...data})
}

EventCard.propTypes = {
    children: PropeTypes.func.isRequired
}

export default EventCard