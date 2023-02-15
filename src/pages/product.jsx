import React, { useState } from 'react'
import { Col, Container, Row, Figure, Table, ButtonGroup, Button, Alert } from "react-bootstrap"
import { Truck } from 'react-bootstrap-icons'

import data from '../assets/data.json'

export const Product = () => {

    // {
    // 	"name": "Желудки утиные сушено-вяленые",
    // 	"price": 550,
    // 	"discount": 15,
    // 	"wight": "100 г",
    // 	"description": "Описание demo",
    // 	"isFavorite": false,
    // 	"isCart": false,
    // 	"available": true,
    // 	"stock": 10,
    // 	"picture": "https://react-learning.ru/image-compressed/1.jpg"
    // }

    let p = data[0]


    const [cnt, setCnt] = useState(0)

    return (
        <Container style={{ backgroundColor: 'white', marginTop: '10px', marginBottom: '10px' }}>
            <Row >
                <Col xs={12} >
                    <h1>{p.name}</h1>
                </Col>
                <Col xs={12} md={7} >
                    <Figure>
                        <Figure.Image src={p.picture} />
                    </Figure>
                </Col>
                <Col xs={12} md={5} >
                    {
                        p.discount && <small>
                            <del>
                                {p.price} p
                            </del>
                        </small>
                    }
                    <div>
                        <strong className={p.discount ? 'text-danger' : 'text-dark'}>
                            {
                                Math.ceil(p.price * ((100 - p.discount) / 100))
                            }p.
                        </strong>
                    </div>
                    {/* <Container> */}
                    <Row>
                        <Col md={4}>
                            <ButtonGroup>
                                <Button size='sm' variant='light' disabled={!cnt} onClick={() => setCnt(cnt - 1)}>-</Button>
                                <Button size='sm' variant='light' disabled>{cnt}</Button>
                                <Button size='sm' variant='light' onClick={() => setCnt(cnt + 1)}>+</Button>
                            </ButtonGroup>
                        </Col>
                        <Col md={6}>
                            <Button variant="warning" style={{ borderRadius: '20px', width: '150px' }}>В корзину</Button>
                        </Col>
                    </Row>
                    <Alert variant='secondary' className="mt-3">
                        <Row>
                            <Col md={1}>
                                <Truck />
                            </Col>
                            <Col>
                                <small> Доставка по всему миру!</small>
                            </Col>
                        </Row>
                    </Alert>
                     {/* </Container> */}
                </Col>
                <Col xs={12} >
                    <h2>{p.description}</h2>
                </Col>
                <Col xs={12} >
                    <h2>Характеристики</h2>
                    <Table hover>
                        <tbody>
                            <tr>
                                <th>Вес</th>
                                <td>{p.wight}</td>
                            </tr>
                            <tr>
                                <th>Цена</th>
                                <td>{p.price}p За 100 грамм</td>
                            </tr>
                            <tr>
                                <th>Польза</th>
                                <td>{p.description}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col xs={12} >
                    <h2>Отзывы</h2>
                </Col>
            </Row>
        </Container>
    )
}
