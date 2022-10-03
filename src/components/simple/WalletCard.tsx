import { WalletCardProps } from "../../interfaces";

function WalletCard({
	label,
	amount,
	comment = "",
	highlight = false,
}: WalletCardProps) {
	return (
		<div
			className={`cursor-pointer border px-3 py-4 md:mr-8 rounded-2xl h-full ${
				highlight && "bg-blue-600 text-white"
			}`}
		>
			<div>{label}</div>
			<div className="text-7xl overflow-scroll no-scrollbar">
				{amount}
			</div>
			<div className="text-xs overflow-scroll no-scrollbar">
				{comment}
			</div>
		</div>
	);
}

export default WalletCard;
