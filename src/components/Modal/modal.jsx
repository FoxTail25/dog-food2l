import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { XCircle } from 'react-bootstrap-icons'
import 'bootstrap/dist/css/bootstrap.min.css'
import "../../style/modal.css"


export const Modal = ({isActive, closePopup}) => {

    return (
        <div className={isActive? 'popup-box popup-active': 'popup-box'}>
            <div className='popup'>
                <XCircle className='popup-close' onClick={e => {closePopup(!true)}}/>
                <Form>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' />
                    </Form.Group>
                    <Button variant='warning' type='submit'>Войти</Button>
                </Form>

            </div>
        </div>
    )
}
