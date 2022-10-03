import { SteppersProps } from "../../interfaces";
// import {FaCheck} from 'react-icons/fa'

function Steppers({ activeStep, numberOfSteps }: SteppersProps) {
	const steps = new Array(numberOfSteps).fill(null).map((item, i) => i + 1);

	return (
		<div className="border h-0 mx-0 md:mx-12">
			<div className="mt-[-35px] flex flex-row justify-between">
				{steps.map((item) => (
					<span
						className={`px-8 py-6 text-white rounded-full ${
							item <= activeStep ? "bg-blue-600" : "bg-slate-300"
						}`}
						key={item}
					>
						{item < activeStep ? <span>&#10003;</span> : item}
					</span>
				))}
			</div>
		</div>
	);
}

export default Steppers;
