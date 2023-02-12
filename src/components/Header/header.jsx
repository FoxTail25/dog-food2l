import React, { useState } from "react";
import Logo from "../Logo/logo";
import './header.css'
import { ReactComponent as FavIcon } from "./img/favorites.svg"
import { ReactComponent as Cart } from "./img/cart.svg"
import { ReactComponent as Prof } from "./img/profile.svg"

export const Header = ({products, update}) => {

    
    const [text, setSearch] = useState('')
    const [cnt, setCnt] = useState(0)

    function handler(e) {

        setSearch(e.target.value)
        const result = products.filter((el => el.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1 ))
        setCnt(result.length)
        if (!text) {
            update(products)
        } else (
            update(result)
        )
    }


    return (
        <>
            <header>

                <Logo />
                <input type="search" value={text} onChange={handler} />
                <nav>
                    <a href=""><FavIcon /></a>
                    <a href=""><Cart /></a>
                    <a href=""><Prof /></a>
                </nav>

            </header>

            <div>
                {text
                    ? `По запросу ${text} найдено ${cnt} позиций`
                    : ''
                }

            </div>
        </>
    )

}