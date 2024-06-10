import  {ThemeContext} from "styled-components";

import React, {useContext, useEffect, useState} from "react";
import { Container } from "../../styledComponents/Containers";
import { Logo } from "../../components/Logo";
import { Menu } from "./menu/Menu";
import { routes } from "../../assets/scripts/variables";
import { Socials } from "../../components/Socials";
import {ThemeToggler} from "./ThemeToggler";
import {Mobile} from "../mobile/Mobile";
import {S} from "./HeaderStyles";
import {HeaderPropsType} from "./HeaderTypes";


export const  Header:React.FC<HeaderPropsType> = (props:HeaderPropsType) => {
	const [mobileActive, setMobileActive] = useState(false);
	const theme = useContext(ThemeContext)
	useEffect(() => {

		if (mobileActive) {
			document.body.classList.add("hidden")
		} else {
			document.body.classList.remove("hidden")
		}
	}, [mobileActive]);

	function toggleMobileMenu() {
		setMobileActive(!mobileActive)
	}

	return (
		<S.StyledHead as={props.fixed ? "div" : "header"} fixed={props.fixed} isActive={props.isActive}>
			<Container display="flex" alignItems={"flex-start"}>
				<Logo iconType="gradient" />
				<Menu routes={routes} toggleMobile={toggleMobileMenu}/>
				<Socials color={theme.colors.primary} />
				<ThemeToggler toggleTheme={props.toggleTheme} theme={props.theme}/>
				<Mobile isActive={mobileActive} closeMobile={toggleMobileMenu}  routes={routes}	/>
			</Container>
		</S.StyledHead>
	);
}
