import React, { Fragment, useState } from "react";
import TestTextComponent from "components/TestTextComponent";
import TestReducer from "reducers/TestReducer";

const camelCaseVarible = "team";

const MainView = () => {
	const [name, setName] = useState("React");
	return (
		<TestReducer>
			<TestTextComponent />
		</TestReducer>
	);
};

export default MainView;
