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
export interface NormalPrimaryButtonProps {
	label: string;
	link?: string;
	handleClick?: Function;
}
export interface LinkProps {
	path: string;
	label: string;
}
export interface CustomerLayoutProps {
	children: ReactNode;
}
