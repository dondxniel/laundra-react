import { SetupCustomerProfileFormProps } from "../../../interfaces";
import { InputField } from "../../simple/InputField";
function SetupCustomerProfileForm({
	formData,
	handleInputChange,
}: SetupCustomerProfileFormProps) {
	return (
		<div className="grid md:grid-cols-2 grid-cols-1 mt-3">
			<div className="pr-5">
				<InputField
					type="text"
					value={formData.fullName}
					name="fullName"
					placeholder="Enter full name"
					handleChange={handleInputChange}
				/>
				<InputField
					type="email"
					value={formData.email}
					name="email"
					placeholder="Enter email address"
					handleChange={handleInputChange}
				/>
				<InputField
					type="text"
					value={formData.mobileNumber}
					name="mobileNumber"
					placeholder="Enter mobile number"
					handleChange={handleInputChange}
				/>
				<InputField
					type="text"
					value={formData.altMobileNumber1}
					name="altMobileNumber1"
					placeholder="Enter first alternative mobile number (optional)"
					handleChange={handleInputChange}
				/>
				<InputField
					type="text"
					value={formData.altMobileNumber2}
					name="altMobileNumber2"
					placeholder="Enter second alternative mobile number (optional)"
					handleChange={handleInputChange}
				/>
			</div>
			<div className="pr-5">
				<InputField
					type="text"
					value={formData.country}
					name="country"
					placeholder="Enter country name"
					handleChange={handleInputChange}
				/>
				<InputField
					type="text"
					value={formData.state}
					name="state"
					placeholder="Enter state name"
					handleChange={handleInputChange}
				/>
				<InputField
					type="text"
					value={formData.city_town}
					name="city_town"
					placeholder="Enter city or town"
					handleChange={handleInputChange}
				/>
				<InputField
					type="text"
					value={formData.streetAddress}
					name="streetAddress"
					placeholder="Enter your street address"
					handleChange={handleInputChange}
				/>
				<InputField
					type="text"
					value={formData.apartment_suite_unit}
					name="apartment_suite_unit"
					placeholder="Enter your apartment/suite/unit (optional)"
					handleChange={handleInputChange}
				/>
			</div>
		</div>
	);
}

export default SetupCustomerProfileForm;
