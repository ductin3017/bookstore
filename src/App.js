import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header/Header";
import { createContext, useEffect, useState } from "react";
import data from "./Data/json/provinces.json";

const MyContext = createContext();

function App() {
	const [locationList, setLocationList] = useState([]);
	const [selectedLocation, setSelectedLocation] = useState("");

	useEffect(() => {
		const provinceNames = data.provinces.map((province) => province.name);
		setLocationList(provinceNames);
	}, []);

	const values = {
		locationList,
		setSelectedLocation,
		selectedLocation,
	};

	return (
		<BrowserRouter>
			<MyContext.Provider value={values}>
				<Header />
				<Routes>
					<Route path="/" exact="true" element={<Home />} />
				</Routes>
			</MyContext.Provider>
		</BrowserRouter>
	);
}

export default App;

export { MyContext };
