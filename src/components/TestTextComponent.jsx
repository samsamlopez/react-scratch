import React, { useContext } from "react";
import { StoreContext } from "reducers/TestReducer";

const TestTextComponent = props => {
	const [state, dispatch] = useContext(StoreContext);
	return (
		<div>
			<h1>Fruits</h1>
			<button
				onClick={() => {
					dispatch({ type: "addFruit", payload: "banana" });
				}}
			>
				{" "}
				Add Bananas
			</button>
			<button
				onClick={() => {
					dispatch({ type: "addFruit", payload: "apple" });
				}}
			>
				{" "}
				Add Apples
			</button>
			<ul>
				{state.fruits.map(fruit => {
					return <li>{fruit}</li>;
				})}
			</ul>
		</div>
	);
};

export default TestTextComponent;
