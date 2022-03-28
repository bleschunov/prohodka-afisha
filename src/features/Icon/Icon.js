import sprite from './sprite.svg'

const Icon = ({id, height, width, className = '', ...args}) => {
    return (
        <svg 
            height={height}
            width={width}
            className={`${className}`}
            {...args} >
            <use href={`${sprite}#${id}`}></use>
        </svg>
    )
}

export default Icon