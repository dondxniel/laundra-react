import { FaStar } from "react-icons/fa";
import { RatingProps } from "../../interfaces";

function Rating({ max, score }: RatingProps) {
	const stars = new Array(max)
		.fill(null)
		.map((item, i) => (i + 1 <= score ? 1 : null));
	return (
		<div className="flex flex-row">
			{stars.map((item) => (
				<FaStar color={item === 1 ? "#FFD700" : "#CCCCCC"} />
			))}
		</div>
	);
}

export default Rating;
