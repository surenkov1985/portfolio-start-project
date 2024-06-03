import React from "react";
import LogoIcon from "../assets/images/sprite.svg";

export function Icon(props: IconPropsType) {
	return (
		<svg style={{ transition: 'all 0.7s' }} width={props.width} height={props.height} viewBox={props.viewBox} xmlns="http://www.w3.org/2000/svg">
			<use xlinkHref={`${LogoIcon}#${props.iconId}`} fill={props.color} />
		</svg>
	);
}

type IconPropsType = {
	iconId?: string;
	width?: string;
	height?: string;
	viewBox?: string;
	color?: string;
};
