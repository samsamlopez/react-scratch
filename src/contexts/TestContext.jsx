import React, { createContext, useReducer, useState } from "react";

export const StoreContext = createContext({});

const initialState = { fruits: [] };

function reducer(state, action) {
	switch (action.type) {
		case "addFruit":
			return { fruits: [...state.fruits, action.payload] };
		case "AddVegetable":
			return { vegetables: [...state.vegetables, action.payload] };

		default:
			throw new Error("Action type must be defined");
	}
}

const TestReducer = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<StoreContext.Provider value={[state, dispatch]}>
			{children}
		</StoreContext.Provider>
	);
};

export default TestReducer;
