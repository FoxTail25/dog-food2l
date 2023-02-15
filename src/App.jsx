import React, { useState } from "react"
import { Footer } from "./components/Footer/footer"
import { Header } from "./components/Header/header"
import { Product } from "./pages/product"
// import { Catalog } from "./pages/Catalog"



export const App = () => {

    return (
        <>
        <Header/>
        <Product />
        <Footer/>
        </>
    )



}
