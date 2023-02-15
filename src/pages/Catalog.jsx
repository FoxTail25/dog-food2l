import React, { useState } from 'react'
// import Card from "./components/Card/card";
import Card from "../components/Card/card";
import { Header } from "../components/Header/header";
import { Footer } from "../components/Footer/footer";

import data from '../assets/data.json'

export const Catalog = () => {
    
    const [goods, setGoods] = useState(data)

  return (
    <div className="wrapper">
    <Header products={data} update={setGoods}/>
    <div className="cards-container">
        {
            goods.map((el, i) => <Card
                key={i}
                img={el.picture}
                text={el.name}
                price={el.price}

            />)
        }
    </div>
    <Footer/>
</div>
  )
}
