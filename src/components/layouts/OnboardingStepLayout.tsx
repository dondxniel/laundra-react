import { OnboardingStepLayoutProps } from "../../interfaces";
import {
	NormalGreyButton,
	NormalPrimaryButton,
	TinyGreyBtn,
} from "../simple/Buttons";

function OnboardingStepLayout({
	children,
	title,
	subtitle = "",
	whyTitle,
	whyDetails,
	canSkip = false,
	next,
	prev,
	activeStep,
	numberOfSteps,
}: OnboardingStepLayoutProps) {
	return (
		<div className="mt-28">
			<h1 className="text-3xl font-bold">
				{title}{" "}
				{canSkip && <TinyGreyBtn handleClick={next} label="Skip" />}
			</h1>
			<p>{subtitle}</p>
			<div>{children}</div>
			<div className="mt-5">
				{activeStep !== 1 && (
					<>
						<NormalGreyButton handleClick={prev} label="Back" />
						&nbsp;&nbsp;
					</>
				)}
				{activeStep !== numberOfSteps && (
					<NormalPrimaryButton handleClick={next} label="Next" />
				)}
				{activeStep === numberOfSteps && (
					<NormalPrimaryButton handleClick={next} label="Done" />
				)}
			</div>
			<div className="mt-4 max-w-sm">
				<div className="font-bold">{whyTitle}</div>
				<p>{whyDetails}</p>
			</div>
		</div>
	);
}

export default OnboardingStepLayout;
