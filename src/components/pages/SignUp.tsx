import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { userSignUpTypes } from "../../constants";
import AuthLayouts from "../layouts/AuthLayouts";
import { NormalPrimaryButton as Button } from "../simple/Buttons";
import InputField from "../simple/InputField";
import Link from "../simple/Link";
import UserSignUpTypeItem from "../simple/UserSignUpTypeItem";

function SignUp() {
	const [userType, setUserType] = useState(userSignUpTypes[0]);

	const [formData, setFormData] = useState({
		fullName: "",
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
				<div className="small-heading px-3">Sign up as</div>
				<Row className="justify-content-between">
					<Col md={5}>
						{userSignUpTypes.map((item) => (
							<UserSignUpTypeItem
								key={item}
								title={item}
								isSelected={userType === item}
								handleSelect={() => setUserType(item)}
							/>
						))}
					</Col>
					<Col md={5}>
						<form onSubmit={(e) => handleSubmit(e)}>
							<InputField
								type="text"
								value={formData.fullName}
								name="fullName"
								handleChange={(e: any) => {
									handleChange(e);
								}}
								placeholder="Full name"
							/>
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
								<Button link="/home" label="Sign up" />
							</div>
							<div className="my-2">
								Already have an account?{" "}
								<Link path="/sign-in" label="Sign in." />
							</div>
						</form>
					</Col>
				</Row>
			</>
		</AuthLayouts>
	);
}

export default SignUp;
