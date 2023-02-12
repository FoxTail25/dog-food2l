import React from "react"
import Card from "./components/Card/card";

import data from './assets/data.json'
import Header from "./components/Header/header";

class App extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <Header/>
                <div className="cards-container">
                    {
                        data.map((el, i) => <Card 
                        key={i}
                        img={el.picture}
                        text={el.name}
                        price={el.price}

                        />)
                    }
                </div>
            </div>
        )
    }
}

export default App;