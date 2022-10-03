import { ReactNode } from "react";

export interface TitleContentCardProps {
	title: string;
	content: string;
}
export interface AuthLayoutsProps {
	children: JSX.Element;
}
export interface UserSignUpTypeItemProps {
	title: string;
	isSelected: boolean;
	handleSelect: Function;
}
export interface InputFieldProps {
	type: string;
	value: string;
	name: string;
	placeholder: string;
	handleChange: Function;
}
export interface DDButtonProps {
	link?: string;
	label: string;
}
export interface NormalButtonProps {
	label: string;
	link?: string;
	handleClick?: () => void;
}
export interface LinkProps {
	path: string;
	label: string;
}
export interface CustomerLayoutProps {
	children: ReactNode;
}
export interface SteppersProps {
	activeStep: number;
	numberOfSteps: number;
}
export interface OnboardingStepLayoutProps {
	children: ReactNode;
	title: string;
	subtitle?: string;
	whyTitle: string;
	whyDetails: string;
	canSkip?: boolean;
	activeStep: number;
	numberOfSteps: number;
	next: () => void;
	prev: () => void;
}
export interface SetupCustomerProfileFormProps {
	handleInputChange: (e: any) => void;
	formData: {
		fullName: string;
		email: string;
		mobileNumber: string;
		altMobileNumber1: string;
		altMobileNumber2: string;
		country: string;
		state: string;
		city_town: string;
		streetAddress: string;
		apartment_suite_unit: string;
	};
}
export interface WalletCardProps {
	label: string;
	amount: string;
	comment?: string;
	highlight?: boolean;
}
export interface RatingProps {
	max: number;
	score: number;
}
export interface TinyGreyBtnProps {
	handleClick?: () => void;
	label: string;
}
