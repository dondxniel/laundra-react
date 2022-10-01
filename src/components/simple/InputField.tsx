import { InputFieldProps } from "../../interfaces";

function InputField({
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

export default InputField;
