import React, {useContext} from "react";
import LogoIcon from "../assets/images/sprite.svg";
import {ThemeContext} from "styled-components";

export function Icon(props: IconPropsType) {
	const theme = useContext(ThemeContext)
	return (
		<svg style={{ transition: 'all 0.7s' }} width={props.width} height={props.height} viewBox={props.viewBox} xmlns="http://www.w3.org/2000/svg">
			<use xlinkHref={`${LogoIcon}#${props.iconId}`} fill={props.color && theme.colors.cardTitle} />
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
