import Hero from "../compound/Hero";
import Navbar from "../compound/Navbar";
import WhatWeDo from "../compound/WhatWeDo";

function LandingPage() {
	return (
		<div>
			<Navbar />
			<Hero />
			<WhatWeDo />
		</div>
	);
}

export default LandingPage;
