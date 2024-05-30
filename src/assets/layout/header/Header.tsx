import styled, {css} from "styled-components";

import React from "react";
import { Container } from "../../styledComponents/Containers";
import { Icon } from "../../components/Icon";
import { Logo } from "../../components/Logo";
import { Menu } from "../../components/Menu";
import { routes } from "../../scripts/variables";
import { Socials } from "../../components/Socials";
import {ThemeToggler} from "../../components/ThemeToggler";

type HeaderPropsType = {
	isActive?: boolean
	fixed?: boolean
}
export function Header(props:HeaderPropsType) {
	return (
		<StyledHead as={props.fixed ? "div" : "header"} fixed={props.fixed} isActive={props.isActive}>
			<Container display="flex" alignItems={"flex-start"}>

				<Logo iconType="gradient" />
				<Menu routes={routes} />
				<Socials />
				{/*<ThemeToggler/>*/}
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
		background: rgba(255,255,255,.5);
		backdrop-filter: blur(5px);
	`}
`;
