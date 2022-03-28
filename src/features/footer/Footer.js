import Icon from '../Icon/Icon';

import './footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__iconsGroup footer__iconsGroup_mobile">
                    <a href="#">
                        <Icon
                            className="footer__vk"
                            id="vk" />
                    </a>
                    <a href="#">
                        <Icon
                            className="footer__ok"
                            id="ok" />
                    </a>
                    <a href="#">
                        <Icon
                            className="footer__tg"
                            id="tg" />
                    </a>
                </div>    
                <div className="footer__grid">
                    <ul className="footer__list">
                        <li className="footer__item">
                            <a href="#" className="footer__link">
                                Политика конфидециальности    
                            </a>    
                        </li>
                        <li className="footer__item">
                            <a href="#" className="footer__link">
                                Главная
                            </a>    
                        </li>
                        <li className="footer__item">
                            <a href="#" className="footer__link">  
                                Преимущества
                            </a>    
                        </li>
                        <li className="footer__item">
                            <a href="#" className="footer__link"> 
                                Спонсоры
                            </a>    
                        </li>
                    </ul>
                    <ul className="footer__list">
                        <li className="footer__item">
                            <a href="#" className="footer__link">
                                Покупателям
                            </a>    
                        </li>
                        <li className="footer__item">
                            <a href="#" className="footer__link">
                                Организаторам
                            </a>    
                        </li>
                        <li className="footer__item">
                            <a href="#" className="footer__link">
                                Контакты
                            </a>    
                        </li>
                        <li className="footer__item">
                            <a href="#" className="footer__link">
                                Тарифы
                            </a>    
                        </li>
                    </ul>
                    <a className="footer__logoWrapper" href="#">
                        <Icon 
                            className="footer__logo"
                            id="logo" />
                    </a>  
                    <ul className="footer__list">
                        <li className="footer__item footer__item_bold">
                            Связаться
                        </li>
                        <li className="footer__item">
                            <a href="tel: +79037303483">
                                +7-903-730-34-83   
                            </a>
                        </li>
                        <li className="footer__item">
                            <a href="mailto: bleshunov5b@yandex.ru">
                                bleshunov5b@yandex.ru
                            </a>
                        </li>
                        <li className="footer__item">
                            <ul className="footer__iconsGroup footer__iconsGroup_desktop">
                                <li>
                                    <a href="#">
                                        <Icon
                                            className="footer__vk"
                                            id="vk" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <Icon
                                            className="footer__ok"
                                            id="ok" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <Icon
                                            className="footer__tg"
                                            id="tg" />
                                    </a>
                                </li>
                            </ul>    
                        </li>
                    </ul>
                    <ul className="footer__list">
                        <li className="footer__item footer__item_bold">
                            Адрес
                        </li>
                        
                        <li className="footer__item">
                            г. Рязань, <br />
                            Касимовское <br />
                            шоссе
                        </li>
                    </ul>    
                </div>
            </div>
        </footer>
    )
}

export default Footer