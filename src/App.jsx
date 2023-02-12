import React from "react"
import Card from "./components/Card";

import data from './assets/data.json'

class App extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <div className="cards-container">
                    {/* <Card /> */}
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