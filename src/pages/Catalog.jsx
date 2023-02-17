import React, { useEffect } from 'react'
import Card from "../components/Card/card";
// import data from '../assets/data.json'

export const Catalog = ({goods}) => {
    

  return (
    <div className="cards-container">
        {
            goods.map((el, i) => <Card
                key={i}
                img={el.pictures}
                text={el.name}
                price={el.price}

            />)
        }
    </div>
  )
}
