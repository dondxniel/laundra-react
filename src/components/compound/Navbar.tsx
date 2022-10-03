import { Link } from "react-router-dom";

function Navbar() {
	return (
		<div className="my-4 mx-12">
			{/* <Container> */}
			<Link to="/">
				<img
					src="./assets/images/blue-logo.svg"
					alt="Logo"
					className="logo"
				/>
			</Link>
			{/* </Container> */}
		</div>
	);
}

export default Navbar;
