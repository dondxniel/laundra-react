import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import AuthLayouts from "../layouts/AuthLayouts";
import { NormalPrimaryButton as Button } from "../simple/Buttons";
import InputField from "../simple/InputField";
import Link from "../simple/Link";

function SignIn() {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const handleChange = ({ target }: any) => {
		setFormData((prev) => ({ ...prev, [target.name]: target.value }));
	};
	const handleSubmit = (e: any) => {
		e.preventDefault();
		console.log("submitted");
	};
	return (
		<AuthLayouts>
			<>
				<Row className="justify-content-center">
					<Col md={5}>
						<div className="small-heading px-3">Sign in</div>
						<form onSubmit={(e) => handleSubmit(e)}>
							<InputField
								type="email"
								value={formData.email}
								name="email"
								handleChange={(e: any) => {
									handleChange(e);
								}}
								placeholder="Email Address"
							/>
							<InputField
								type="password"
								value={formData.password}
								name="password"
								handleChange={(e: any) => {
									handleChange(e);
								}}
								placeholder="Password"
							/>
							<div className="text-center my-1">
								<Button link="/home" label="Sign in" />
							</div>
							<div className="my-2">
								Don't have an account?{" "}
								<Link path="/sign-up" label="Sign up." />
							</div>
						</form>
					</Col>
				</Row>
			</>
		</AuthLayouts>
	);
}

export default SignIn;
