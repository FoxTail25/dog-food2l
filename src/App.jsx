import React, { useEffect, useState } from "react"
import Api from "./api/Api"
import { Footer } from "./components/Footer/footer2"
import { Header } from "./components/Header/header"
import { Modal } from "./components/Modal/modal"
import { Catalog } from "./pages/Catalog"
import { Home } from "./pages/home"



export const App = () => {

    // cтейты для товаров и поиска товаров
    const [goods, setGoods] = useState([])
    const [data, setData] = useState([])

    // стейт токена
    const [token, setToken] = useState(localStorage.getItem('shopUser'))

    console.log("токен сейчас", token)

    // стейт попАпа
    const [popupActive, setPopupActive] = useState(false)

    // стейт API
    const [api, setApi] = useState(new Api(token))

    // стейт пользователя
    const [userData, setUserData] = useState('')

    console.log('данные пользователя', userData)

    useEffect(() => {
        setApi(new Api(token))
        console.log('получено новое АПИ с токеном', token)
    }, [token])
    
    useEffect( () => {
        // console.log('user is changed')
        if (token) {
            api.getProducts().then(data => {
            setGoods(data.products);
            setData(data.products);
            console.log("отработал useEffect data = ", data)
            })
            // api.userInfo().then(info => console.log(info))
        } else { 
            setGoods([]);
            setData([]);
        }
    }, [api])


    return (
        <>
            <div className="wrapper">

                <Header products={data}
                 setGoods={setGoods}
                 openPopup={setPopupActive} 
                 token={!!token} 
                 setToken={setToken} />
                <div className="inner">
                    {/* <Home/> */}
                    <Catalog goods={goods} />
                </div>
                <Footer />

            </div>

            {
                !token && <Modal
                    isActive={popupActive}
                    closePopup={setPopupActive}
                    api={api}
                    setApi={setApi}
                    setToken={setToken}
                    setUserData={setUserData}
                />
            }
        </>
    )
}
