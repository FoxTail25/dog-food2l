import React, { useState } from "react";
import Logo from "../Logo/logo";
import { BoxArrowInRight } from "react-bootstrap-icons"
import { BoxArrowRight } from "react-bootstrap-icons"
import { ReactComponent as FavIcon } from "./img/favorites.svg"
import { ReactComponent as Cart } from "./img/cart.svg"
import { ReactComponent as Prof } from "./img/profile.svg"
import { Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../style/header.css'

export const Header = ({ products, setGoods, openPopup, token, setToken }) => {

    console.log(token)
    const [text, setSearch] = useState('')
    const [cnt, setCnt] = useState(0)

    function handler(e) {

        setSearch(e.target.value)
        const result = products.filter((el => el.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1))
        setCnt(result.length)
        if (!text) {
            setGoods(products)
        } else (
            setGoods(result)
        )
    }
    function logout(e) {
        e.preventDefault();
        localStorage.removeItem('shopUser');
        setToken(false)
    }


    return (
        <>
            <header>
                <Container>

                    <Row>

                        <Col md={2} xs={12}>
                            <Logo />
                        </Col>

                        <Col md={8}>
                            <input type="search" value={text} onChange={handler} />
                        </Col>

                        <Col md={2}>
                            <nav>
                                {token && <a href=""><FavIcon /></a>}
                                {token && <a href=""><Cart /></a>}
                                {token && <a href=""><Prof /></a>}
                                {token && <a href="" onClick={logout}><BoxArrowRight /></a>}
                                {!token && <a href="" onClick={(e) => { e.preventDefault(); openPopup(true) }}><BoxArrowInRight style={{fontSize: '2rem'}}/></a>}
                            </nav>
                        </Col>

                    </Row>

                </Container>
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