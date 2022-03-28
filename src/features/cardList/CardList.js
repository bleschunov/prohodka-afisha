import classNames from "classnames"
import { useGetTypesQuery } from "../../app/api"

import RowOfCards from "../rowOfCards/RowOfCards"
import TitleWithLink from "../rowOfCards/TitleWithLink"
import Spinner from "../spinner/Spinner"

import './cardList.scss'

const CardList = ({className}) => {
    const classes = classNames(className, 'cardList')

    const { data, isFetching } = useGetTypesQuery()

    const renderRow = ({ titleRu, titleEn }) => {
        return (
            <RowOfCards 
                className="cardList__rowOfCards"
                key={titleEn}
                header={ <TitleWithLink link={titleEn}> {titleRu} </TitleWithLink> }
                type={titleEn} />
        )
    }

    return (
        <ul className={classes}>
            { isFetching ? <Spinner /> : data.map(renderRow) }
        </ul>
    )
}

export default CardList