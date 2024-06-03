import styled, {css, ThemeContext} from "styled-components";

import React, {useContext, useEffect, useState} from "react";
import { Container } from "../../styledComponents/Containers";
import { Logo } from "../../components/Logo";
import { Menu } from "../../components/Menu";
import { routes } from "../../assets/scripts/variables";
import { Socials } from "../../components/Socials";
import {ThemeToggler} from "../../components/ThemeToggler";
import {Mobile} from "../mobile/Mobile";

type HeaderPropsType = {
	isActive?: boolean
	fixed?: boolean
	toggleTheme?: () => void
}

export function Header(props:HeaderPropsType) {
	const [mobileActive, setMobileActive] = useState(false);
	const theme = useContext(ThemeContext)
	useEffect(() => {
		console.log(mobileActive)
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
		<StyledHead as={props.fixed ? "div" : "header"} fixed={props.fixed} isActive={props.isActive}>
			<Container display="flex" alignItems={"flex-start"}>

				<Logo iconType="gradient" />
				<Menu routes={routes} toggleMobile={toggleMobileMenu}/>
				<Socials color={theme.colors.primary} />
				<ThemeToggler toggleTheme={props.toggleTheme}/>
				<Mobile isActive={mobileActive} closeMobile={toggleMobileMenu}  routes={routes}	/>
			</Container>
		</StyledHead>
	);
}

const StyledHead = styled.header<HeaderPropsType>`
	width: 100%;
	padding: 40px 0;
	
	${props => props.fixed && css`
		width: 100%;
		padding: 20px 0;
		position: fixed;
		width: 100%;
		top: 0;
		left: 0;
		transform: ${props.isActive ? 'translateY(0)' : 'translateY(-100%)'};
		transition: transform 0.7s;
		background: ${props => props.theme.colors.fixedHeaderBg};
		backdrop-filter: blur(5px);
	`}
`;
