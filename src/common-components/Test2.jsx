import React, { useContext } from "react";
import { StoreContext2 } from "contexts/TestContext2";

const Test2 = props => {
	const [state, dispatch] = useContext(StoreContext2);
	return (
		<div>
			<hr />
			<h1>Gulay</h1>
			<button
				onClick={() => {
					dispatch({ type: "AddGulay", payload: "Repolyo" });
				}}
			>
				{" "}
				Add Replyo
			</button>
			<button
				onClick={() => {
					dispatch({ type: "AddGulay", payload: "Carrots" });
				}}
			>
				{" "}
				Add Carrots
			</button>
			<ul>
				{state.Gulay.map(arr => {
					return <li>{arr}</li>;
				})}
			</ul>
		</div>
	);
};

export default Test2;
