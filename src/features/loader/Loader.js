import Spinner from "../spinner/Spinner"

const Loader = ({children, isFetching}) => {
    return isFetching ? <Spinner /> : children()
}

export default Loader