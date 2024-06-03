import React, {useContext, useEffect, useState} from "react";
import logoImg from "../assets/images/logo.svg"
import logoGrayImg from "../assets/images/logo_gray.svg"
import logoBlueImg from "../assets/images/logo_blue.svg"
import {Icon} from "./Icon";
import {ThemeContext} from "styled-components";

type LogoPropsType = {
	iconType: string;
	iconColor?: string;
};
export function Logo(props: LogoPropsType) {
	// const [myTheme, setMyTheme] = useState()
	const theme = useContext(ThemeContext)

	// useEffect(() => {
	// 	console.log(theme)
	// }, [theme]);
	return (
		<a href="/" style={{ marginRight: "auto" }}>
			{props.iconType === "gradient" ?
				<img src={logoImg} alt="logo"/>
			:
				<Icon  iconId={"logo"} color={theme.colors.title}  width="97.000000" height="59.000000" viewBox="0 0 97 59"	/>
			}

		</a>
	);
}
