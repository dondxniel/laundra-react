import { Link } from "react-router-dom";
import { DDButtonProps, NormalPrimaryButtonProps } from "../../interfaces";

export const DoubleDeckButton = ({ link, label }: DDButtonProps) => {
	if (link)
		return (
			<div>
				<Link className="dd-button" to={link}>
					{label}
				</Link>
			</div>
		);
	return (
		<div>
			<button className="dd-button">{label}</button>
		</div>
	);
};
export const NormalPrimaryButton = ({
	label,
	link,
}: NormalPrimaryButtonProps) => {
	if (link)
		return (
			<Link to={link}>
				{" "}
				<button className="normal-primary-button px-4 py-1">
					{label}
				</button>
			</Link>
		);
	return <button className="normal-primary-button px-4 py-1">{label}</button>;
};
