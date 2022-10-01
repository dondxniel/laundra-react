import { Col, Container, Row } from "react-bootstrap";
// import Lottie from "react-lottie";

import { DoubleDeckButton } from "../simple/Buttons";

function Hero() {
	return (
		<Container className="hero-container d-flex flex-column">
			<Row className="my-auto">
				<Col md={6}>
					<div className="d-flex flex-column justify-content-center">
						<h1 className="display-1 text-bold">
							Hi, this
							<br />
							is Laundra.
						</h1>
						<DoubleDeckButton link="/sign-up" label="Get Started" />
					</div>
				</Col>
				<Col md={6}>
					<div className="d-flex flex-column justify-content-center">
						{/* <Lottie  /> */}
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default Hero;
