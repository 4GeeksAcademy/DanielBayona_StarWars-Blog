import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop.jsx";
import Home from "./views/Home.jsx";
import ItemDetail from "./component/ItemDetail.jsx"; 
import injectContext from "./store/appContext.jsx";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
			
					<Routes>
						<Route path="/" element={<Home/>} />
						<Route path="/:nature/:id" element={<ItemDetail/>}/>
					</Routes>
				
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
