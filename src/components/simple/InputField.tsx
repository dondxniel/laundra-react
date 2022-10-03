import { InputFieldProps } from "../../interfaces";

export function InputField({
	type,
	value,
	name,
	placeholder,
	handleChange,
}: InputFieldProps) {
	return (
		<input
			className="custom-input px-3 d-block w-100 py-1"
			type={type}
			value={value}
			name={name}
			placeholder={placeholder}
			onChange={(e) => handleChange(e)}
		/>
	);
}
export function DryCleanerSearchField() {
	return (
		<div className="p-3 rounded-2xl w-full bg-light-grey">
			<input
				type="text"
				className="w-full bg-transparent text-slate-500 focus:outline-transparent"
				placeholder="Search Dry Cleaner By Business Name"
			/>
		</div>
	);
}
