import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Card extends React.Component {

	render() {

		return (
			<div className="card">
				<div className="like">&lt;3</div>
				{this.props.smile}
				<h6>{this.props.text}</h6>
			</div>
		)
	}
}

const emotion = [
	{smile: "=)", description:"Ы."},
	{smile: "O_o", description:"Oooo"},
	{smile: "=(", description:"уф"},
	{smile: "^_^", description:"Ммм ня"},
]

ReactDOM.render(
	<div className="wrapper">

		{/* v1 */}
		{/* <div className="card">=)</div>
		<div className="card">O_o</div>
		<div className="card">^_^</div>
		<div className="card">=(</div> */}

		{/* v2 */}
		{/* <Card smile="=)" text="Ы."/>
		<Card smile="O_o" text="Oooo"/>
		<Card smile="=(" text="уф"/>
		<Card smile="^_^" text="Ммм ня"/> */}

		{/* v3 */}
		{
			emotion.map(el => <Card smile = {el.smile} text={el.description} key={el.smile}/>)
		}

	</div>,
	document.querySelector("#root")
)