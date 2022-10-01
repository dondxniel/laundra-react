import React from "react";
import { TitleContentCardProps } from "../../interfaces";

function TitleContentCard({ title, content }: TitleContentCardProps) {
	return (
		<div className="title-content-card-container">
			<div className="title-content-card-title text-center text-bolder">
				{title}
			</div>
			<p className="title-content-card-content text-center">{content}</p>
		</div>
	);
}

export default TitleContentCard;
