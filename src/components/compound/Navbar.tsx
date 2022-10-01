import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<div className="m-4">
			<Container>
				<Link to="/">
					<img
						src="./assets/images/blue-logo.svg"
						alt="Logo"
						className="logo"
					/>
				</Link>
			</Container>
		</div>
	);
}

export default Navbar;
