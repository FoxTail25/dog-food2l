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

    // стейт попАпа
    const [popupActive, setPopupActive] = useState(false)

    // стейт API
    const [api, setApi] = useState(new Api(token))


    useEffect(() => {
        console.log('user is changed')
        setApi(new Api(token))
    }, [token])

    useEffect(async () => {

        let data = await api.getProducts();

        setGoods(data.products);
        setData(data.products);
    }, [])


    return (
        <>
            <div className="wrapper">

                <Header products={data} setGoods={setGoods} openPopup={setPopupActive} />
                <div className="inner">
                <Home/>
                {/* <Catalog goods={goods} /> */}
                </div>
                <Footer />

            </div>

            <Modal isActive={popupActive} closePopup={setPopupActive} />
        </>
    )
}
