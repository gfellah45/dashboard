import React, { useState, useEffect } from "react";
// import { ThemeProvider, createGlobalStyle } from "styled-components";
import "./scss/app.scss";
import "./css/style.css";
import FirstDashboard from "./componets/FirstDashboard";
import SeconfDashBoard from "./componets/SecondDashBoard";

function App() {
	const [toggle, setToggle] = useState(getItemFromStorage());

	useEffect(() => {
		localStorage.setItem("dark", JSON.stringify(toggle));
	}, [toggle]);

	function getItemFromStorage() {
		const saveItem = JSON.parse(localStorage.getItem("dark"));
		return saveItem || false;
	}

	return (
		<main>
			<div className={toggle ? "dark-mode" : "light-mode"}>
				<section className="px-4 md:px-8 lg:px-32 ">
					<div className="flex flex-col md:flex-row justify-between">
						<div className="mb-2 py-2 border-b-2 border-gray-900 md:border-none  lg:border-none  ">
							<h1 className=" text-lg font-bold  md:text-2xl lg:text-4xl">
								Social Media Dashboard{" "}
							</h1>
							<h3 className=" text-sm  md:text-lg">Total Followers: 23,004 </h3>
						</div>
						<div className="flex justify-between  md:self-center lg:justify-start">
							{" "}
							<p className="text-sm font-bold text-lg lg:mx-2 p-2">
								{toggle ? "Light Mode" : "Dark Mode"}
							</p>{" "}
							<p className="toggle-container">
								<button
									style={{ outline: "none" }}
									className="p-2"
									onClick={() => setToggle((prevState) => !prevState)}
								>
									{toggle ? (
										<i className="fas fa-toggle-off fa-2x"></i>
									) : (
										<i className="fas fa-toggle-on fa-2x"></i>
									)}
								</button>
							</p>{" "}
						</div>
					</div>
					<FirstDashboard />
					<div>
						<SeconfDashBoard />
					</div>
				</section>
			</div>
		</main>
	);
}

export default App;
