import { UserSignUpTypeItemProps } from "../../interfaces";

function UserSignUpTypeItem({
	title,
	isSelected,
	handleSelect,
}: UserSignUpTypeItemProps) {
	return (
		<div
			onClick={() => {
				handleSelect();
			}}
			className={`sign-up-type-item px-3 py-1 ${
				isSelected && "sign-up-type-item-selected" // display class if item has been selected
			}`}
		>
			{title}
		</div>
	);
}

export default UserSignUpTypeItem;
