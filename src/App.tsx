// packages
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// pages
import Home from "./components/pages/customer/Home";
import LandingPage from "./components/pages/LandingPage";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";

function App() {
	return (
		<div className="h-100 ">
			<Router>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/sign-up" element={<SignUp />} />
					<Route path="/sign-in" element={<SignIn />} />
					<Route path="/home" element={<Home />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
