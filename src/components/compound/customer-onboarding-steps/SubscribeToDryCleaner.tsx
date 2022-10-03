import { DryCleanerSearchField } from "../../simple/InputField";
import DryCleanerOnboardingSelectCard from "../DryCleanerOnboardingSelectCard";

function SubscribeToDryCleaner() {
	return (
		<div>
			<div className="mt-3">
				<DryCleanerSearchField />
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 mt-3">
				<DryCleanerOnboardingSelectCard />
				<DryCleanerOnboardingSelectCard />
				<DryCleanerOnboardingSelectCard />
				<DryCleanerOnboardingSelectCard />
				<DryCleanerOnboardingSelectCard />
				<DryCleanerOnboardingSelectCard />
			</div>
		</div>
	);
}

export default SubscribeToDryCleaner;
