import { Link } from "react-router-dom";
import {
	DDButtonProps,
	NormalButtonProps,
	TinyGreyBtnProps,
} from "../../interfaces";

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
	handleClick = () => null,
}: NormalButtonProps) => {
	if (link)
		return (
			<Link to={link}>
				<button className="normal-primary-button px-4 py-1">
					{label}
				</button>
			</Link>
		);
	return (
		<button
			onClick={handleClick}
			className="normal-primary-button px-4 py-1"
		>
			{label}
		</button>
	);
};

export const NormalGreyButton = ({
	label,
	link,
	handleClick = () => null,
}: NormalButtonProps) => {
	if (link)
		return (
			<Link to={link}>
				<button className="normal-grey-button px-4 py-1">
					{label}
				</button>
			</Link>
		);
	return (
		<button onClick={handleClick} className="normal-grey-button px-4 py-1">
			{label}
		</button>
	);
};

export const TinyGreyBtn = ({ handleClick, label }: TinyGreyBtnProps) => (
	<button
		onClick={handleClick}
		className="text-xs bg-dark-grey rounded-lg px-2"
	>
		{label}
	</button>
);

export const TinyGreenBtn = ({
	handleClick = () => null,
	label,
}: TinyGreyBtnProps) => (
	<button
		onClick={handleClick}
		className="text-xs text-white bg-green rounded-lg px-2"
	>
		{label}
	</button>
);

export const TinyRedBtn = ({
	handleClick = () => null,
	label,
}: TinyGreyBtnProps) => (
	<button
		onClick={handleClick}
		className="text-xs text-white bg-red rounded-lg px-2"
	>
		{label}
	</button>
);
