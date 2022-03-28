import './rowOfCards.scss'

const TitleWithLink = ({link, children}) => {
    return (
        <div className="row__header titleWithLink">
            <div className="titleWithLink__left">
                {children}
            </div>
            <a href={link}>
                <div className="titleWithLink__right">
                    Посмотреть всё
                </div>
            </a>
        </div>
    )
}

export default TitleWithLink