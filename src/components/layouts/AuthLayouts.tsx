import { Col, Container, Row } from "react-bootstrap";

import { AuthLayoutsProps } from "../../interfaces";
import Navbar from "../compound/Navbar";

function AuthLayouts({ children }: AuthLayoutsProps) {
	return (
		<div className="auth-layout-container">
			<Navbar />
			<Container className="h-100 ">
				<Row className="h-100 flex-column justify-content-center align-items-center">
					<Col md={7}>{children}</Col>
				</Row>
			</Container>
		</div>
	);
}

export default AuthLayouts;
