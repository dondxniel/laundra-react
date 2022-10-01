import { Col, Container, Row } from "react-bootstrap";

import { BottomCurve, TopCurve } from "../simple/Curve";
import TitleContentCard from "../simple/TitleContentCard";

function WhatWeDo() {
	return (
		<div className="what-we-do-container d-flex flex-column mb-5">
			<TopCurve />
			<Container className="my-5 pb-5">
				<h1 className="display-1 text-center text-bold">What we do</h1>
				<Row>
					<Col md={6} className="d-flex flex-row justify-content-end">
						<TitleContentCard
							title="for the customer"
							content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Optio officia a non enim consequuntur error iure
                            deserunt maxime veritatis odio explicabo, laudantium,
                            doloremque quae aspernatur distinctio, veniam libero
                            mollitia reiciendis."
						/>
					</Col>
					<Col
						md={6}
						className="d-flex flex-row  justify-content-start"
					>
						<TitleContentCard
							title="for the dry cleaner"
							content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Optio officia a non enim consequuntur error iure
                            deserunt maxime veritatis odio explicabo, laudantium,
                            doloremque quae aspernatur distinctio, veniam libero
                            mollitia reiciendis."
						/>
					</Col>
				</Row>
			</Container>
			<BottomCurve />
		</div>
	);
}

export default WhatWeDo;
