import React, { createContext, useReducer, useState } from "react";

export const StoreContext2 = createContext({});

const initialState = { Gulay: [] };

function reducer(state, action) {
	switch (action.type) {
		case "AddGulay":
			return { Gulay: [...state.Gulay, action.payload] };

		default:
			throw new Error("Action type must be defined");
	}
}

const TestReducer2 = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<StoreContext2.Provider value={[state, dispatch]}>
			{children}
		</StoreContext2.Provider>
	);
};

export default TestReducer2;
