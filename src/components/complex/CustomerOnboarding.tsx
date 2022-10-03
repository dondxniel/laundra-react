import { useState } from "react";
import { customerOnboardingSteps } from "../../constants/index";
import FundWallet from "../compound/customer-onboarding-steps/FundWallet";
import SetupCustomerProfileForm from "../compound/customer-onboarding-steps/SetupCustomerProfileForm";
import SubscribeToDryCleaner from "../compound/customer-onboarding-steps/SubscribeToDryCleaner";
import Steppers from "../compound/Steppers";
import OnboardingStepLayout from "../layouts/OnboardingStepLayout";

function CustomerOnboarding() {
	const [activeStep, setActiveStep] = useState(1);
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		mobileNumber: "",
		altMobileNumber1: "",
		altMobileNumber2: "",
		country: "",
		state: "",
		city_town: "",
		streetAddress: "",
		apartment_suite_unit: "",
	});
	const handleInputChange = (e: any) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};
	const nextStep = () => {
		if (activeStep < customerOnboardingSteps) setActiveStep(activeStep + 1);
	};
	const previousStep = () => {
		if (activeStep > 1) setActiveStep(activeStep - 1);
	};
	return (
		<div>
			<div className="my-20 mx-7">
				<Steppers
					activeStep={activeStep}
					numberOfSteps={customerOnboardingSteps}
				/>
				{activeStep === 1 && (
					<OnboardingStepLayout
						title="Setup customer profile."
						whyTitle="Why we need you to finish setting up your profile."
						whyDetails="We’re setting up your account for immediate use, and Dry Cleaners need to know your name to help them identify your package. The delivery person also needs to know your address and contact information to deliver your package."
						next={nextStep}
						prev={previousStep}
						activeStep={activeStep}
						numberOfSteps={customerOnboardingSteps}
					>
						<SetupCustomerProfileForm
							formData={formData}
							handleInputChange={handleInputChange}
						/>
					</OnboardingStepLayout>
				)}
				{activeStep === 2 && (
					<OnboardingStepLayout
						title="Fund wallet."
						whyTitle="Why we need you to fund your wallet."
						whyDetails="Like we said, we’re setting up your account for immediate use, and the Dry Cleaner you choose would need to get paid for their service, likewise the delivery man."
						next={nextStep}
						prev={previousStep}
						activeStep={activeStep}
						numberOfSteps={customerOnboardingSteps}
						canSkip={true}
					>
						<FundWallet />
					</OnboardingStepLayout>
				)}
				{activeStep === 3 && (
					<OnboardingStepLayout
						title="Subscribe to a dry cleaner."
						subtitle="Select a Dry Cleaner and a date and time you want the delivery service to pick up your laundry."
						whyTitle="Why we need you to select dry cleaner and pickup date and time."
						whyDetails="You have the fidelity to select who handles your laundry. And note, you can always decide to change this company if you don’t enjoy their services and rate them if you want other people to know about how good or bad their services are."
						next={nextStep}
						prev={previousStep}
						activeStep={activeStep}
						numberOfSteps={customerOnboardingSteps}
						canSkip={true}
					>
						<SubscribeToDryCleaner />
					</OnboardingStepLayout>
				)}
			</div>
		</div>
	);
}

export default CustomerOnboarding;
