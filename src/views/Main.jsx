import React, { Fragment, useState } from "react";
import TestTextComponent from "common-components/TestTextComponent";
import TestReducer from "contexts/TestContext";
import Test2 from "common-components/Test2";
import TestReducer2 from "contexts/TestContext2";

const camelCaseVarible = "team";

const MainView = () => {
	return (
		<>
			<TestReducer>
				<TestTextComponent />
			</TestReducer>
			<TestReducer2>
				<Test2 />
			</TestReducer2>
		</>
	);
};

export default MainView;
