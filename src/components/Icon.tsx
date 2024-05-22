import React from "react";
import LogoIcon from "../images/sprite.svg";

export function Icon(props: any) {
	return (
		<svg width="97" height="59" viewBox="0 0 97 59" xmlns="http://www.w3.org/2000/svg">
			<use xlinkHref={`${LogoIcon}#${props.iconId}`} />
		</svg>
	);
}
