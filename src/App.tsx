// packages
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// pages
import Home from "./components/pages/customer/Home";
import LandingPage from "./components/pages/LandingPage";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";

// constants
import { pageLinks } from "./constants/index";

function App() {
	return (
		<div className="h-100 ">
			<Router>
				<Routes>
					<Route path={pageLinks.index} element={<LandingPage />} />
					<Route path={pageLinks.signUp} element={<SignUp />} />
					<Route path={pageLinks.signIn} element={<SignIn />} />
					<Route path={pageLinks.home} element={<Home />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
