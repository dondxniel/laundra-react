import { Link } from "react-router-dom";
import { LinkProps } from "../../interfaces";

export default function CustomLink({ path, label }: LinkProps) {
	return (
		<Link to={path} className="custom-link">
			{label}
		</Link>
	);
}
