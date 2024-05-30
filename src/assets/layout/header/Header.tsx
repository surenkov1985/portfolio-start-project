import styled from "styled-components";

import React from "react";
import { Container } from "../../styledComponents/Containers";
import { Icon } from "../../components/Icon";
import { Logo } from "../../components/Logo";
import { Menu } from "../../components/Menu";
import { routes } from "../../scripts/variables";
import { Socials } from "../../components/Socials";
import {ThemeToggler} from "../../components/ThemeToggler";

export function Header() {
	return (
		<StyledHead>
			<Container display="flex">

				<Logo iconType="gradient" />
				<Menu routes={routes} />
				<Socials />
				<ThemeToggler/>
			</Container>
		</StyledHead>
	);
}

const StyledHead = styled.header`
	width: 100%;
	padding: 40px 0;
`;
