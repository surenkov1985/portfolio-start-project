import React from "react";
import logoImg from "../assets/images/logo.svg"
import logoGrayImg from "../assets/images/logo_gray.svg"
import logoBlueImg from "../assets/images/logo_blue.svg"

type LogoPropsType = {
	iconType: string;
	iconColor?: string;
};
export function Logo(props: LogoPropsType) {
	return (
		<a href="/" style={{ marginRight: "auto" }}>
			<img src={props.iconType === "gradient" ? logoImg : logoBlueImg} alt="logo"/>
		</a>
	);
}
