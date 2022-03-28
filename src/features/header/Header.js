import classNames from "classnames"
import CyrillicToTranslit from 'cyrillic-to-translit-js'

import Icon from "../Icon/Icon"
import Dropdown from "./Dropdown"
import Search from "./Search"

import './header.scss'


const Header = ({className}) => {
    const headerClass = classNames('header', className)

    return (
        <header className={headerClass}> 
            <div className="header__header">
                <div className="container">
                    <div className="header__headerWrapper">
                        <a href="#">
                            <Icon 
                                className="header__logo"
                                id="logo" />        
                        </a>
            
                        <Search className="header__searchHeader" />

                        <Dropdown className="header__dropdown" />  

                        <div className="header__iconsGroup desktop">
                            <div className="header__cartGroup">
                                <Icon 
                                    className="header__cart"
                                    id="cart" />
                                {/* <div className="header__sticker">2</div>     */}
                            </div>
                            <Icon 
                                className="header__account"
                                id="account" />
                        </div> 
                    </div>    
                </div>    
            </div>  

            <div className="header__subheader">
                <div className="container">
                    <div className="header__subheaderWrapper">
                        <Search className="header__searchSubheader" />
                        {/* <div className="header__iconsGroup">
                            <div className="header__cartGroup">
                                <Icon 
                                    className="header__cart"
                                    id="cart"  />
                                <div className="header__sticker">2</div>    
                            </div>
                            <Icon 
                                className="header__account"
                                id="account" />
                        </div> */}
                    </div>
                </div>
            </div>
            
        </header>
    )
}

export default Header


