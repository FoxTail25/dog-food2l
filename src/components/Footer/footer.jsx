import React from 'react'
import Logo from '../Logo/logo'

import './footer.css'


export const Footer = () => {
    return (
        <footer>
            <Logo />
            <span className='copy'>&copy;2022 DogFood</span>
            <a href="">Lorem.</a>
            <a href="">Maiores?</a>
            <a href="">Perferendis.</a>
            <a href="">Unde!</a>
            <a href="">Exercitationem?</a>
            <a href="">Incidunt.</a>
            <a href="">Incidunt.</a>
            <a href="">Quod!</a>
            <div className='contacts'>
                <p>Мы на связи</p>
                <a href='tel:+71234567890'>+7(123)456-78-90</a>
                <nav>
                    <a><i className="fa-brands fa-vk"></i></a>
                    <a><i className="fa-brands fa-odnoklassniki"></i></a>
                    <a><i className="fa-brands fa-telegram"></i></a>
                </nav>
            </div>
        </footer>
    )
}
