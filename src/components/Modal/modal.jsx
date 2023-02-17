import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { XCircle } from 'react-bootstrap-icons'
import 'bootstrap/dist/css/bootstrap.min.css'
import "../../style/modal.css"


export const Modal = ({ isActive, closePopup, api, setApi, setUserData, setToken }) => {

    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')

    const handler = (e) => {
        e.preventDefault();
        console.log(email, pwd)
        api.logIn({ 'email': email, 'password': pwd }).then(res => {
            localStorage.setItem('shopUser', res.token)
            setToken(res.token);
            // console.log(res.token)
            setUserData(res.data);
            closePopup(!true);
        })
    }

    return (
        <div className={isActive ? 'popup-box popup-active' : 'popup-box'}>
            <div className='popup'>
                <XCircle className='popup-close' onClick={e => { closePopup(!true) }} />
                <Form onSubmit={handler}>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type='email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type='password'
                            value={pwd}
                            onChange={e => setPwd(e.target.value)}
                        />
                    </Form.Group>
                    <Button variant='warning' type='submit'>Войти</Button>
                </Form>

            </div>
        </div>
    )
}
