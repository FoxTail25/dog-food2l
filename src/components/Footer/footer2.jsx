import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Display } from 'react-bootstrap-icons'
import Logo from '../Logo/logo'
import 'bootstrap/dist/css/bootstrap.min.css'

import '../../style/footer.css'


export const Footer = () => {
    return (
        <footer>
            <Container style={{maxWidth: '1440px'}}>
                <Row>
                    <Col md={4} xs={12}>
                        <div className='flex__column'>
                            <Logo />
                            <span className='copy'>&copy; «Интернет-магазин DogFood.ru»</span>
                        </div>
                    </Col>
                    <Col md={2} xs={12}>
                        <div className='flex__column'>
                            <a href="">Каталог</a>
                            <a href="">Акции</a>
                            <a href="">Новости</a>
                            <a href="">Отзывы</a>
                        </div>
                    </Col>
                    <Col md={3} xs={12}>
                        <div className='flex__column'>
                            <a href="">Оплата и доставка</a>
                            <a href="">Часто спрашивают</a>
                            <a href="">Обратная связь</a>
                            <a href="">Контакты</a>
                        </div>
                    </Col>
                    <Col md={3} xs={12}>
                        <div className='flex__column mobile'>
                            <div className='contacts'>
                                <p>Мы <span>всегда</span> на связи</p>
                                <a href='tel:+71234567890'>+7(123)456-78-90</a>
                                <nav>
                                    <a style={{fontSize: '20px'}}><i className="fa-brands fa-vk"></i></a>
                                    <a style={{fontSize: '20px'}}><i className="fa-brands fa-instagram"></i></a>
                                    <a style={{fontSize: '20px'}}><i className="fa-brands fa-telegram"></i></a>
                                    <a style={{fontSize: '20px'}}><i className="fa-brands fa-whatsapp"></i></a>
                                    <a style={{fontSize: '20px'}}><i className="fa-brands fa-viber"></i></a>
                                </nav>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer >
    )
}
