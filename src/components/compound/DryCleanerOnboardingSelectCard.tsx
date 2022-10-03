import { TinyGreenBtn, TinyGreyBtn, TinyRedBtn } from "../simple/Buttons";
import Rating from "../simple/Rating";
function DryCleanerOnboardingSelectCard() {
	return (
		<div className="bg-light-grey p-3 rounded-2xl flex flex-row md:mr-3 xs:mr-0 mt-3">
			<div className="flex flex-col justify-center">
				<span className="p-4 bg-black rounded-full" />
			</div>
			<div className="flex-1 mx-3">
				<div className="font-bold">Stancy's Dry Cleaners</div>
				<div className="text-sm">
					No 13 Gwari Avenue, Barnawa. Kaduna.
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-4 gap-y-2 md:gap-y-0 mt-2">
					<TinyGreyBtn label="Details" />
					<TinyGreenBtn label="Select" />
					<TinyRedBtn label="Remove" />
				</div>
			</div>
			<div className="flex flex-col justify-content-center">
				<Rating max={5} score={4} />
			</div>
		</div>
	);
}

export default DryCleanerOnboardingSelectCard;
