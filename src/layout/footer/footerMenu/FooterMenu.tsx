import React from "react";
import styled from "styled-components";
import { Route } from "../../../assets/scripts/variables";
// import { StyledMenu } from "../styledComponents/StyledMenu";

import {MenuList} from "../../header/menu/MenuList";

export function FooterMenu(props: MenuPropsType) {
	return (
		<StyledMenu>
			<MenuList routes={props.routes}/>
		</StyledMenu>
	);
}

type MenuPropsType = {
	routes: Route[];
	color?: string;
};

export const StyledMenu = styled.nav`
	/* margin-left: auto; */

	& ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		gap: 3.5rem;
		flex-wrap: wrap;
		
		@media ${props => props.theme.media.tablet} {
			gap: 1rem 2.5rem;
		}
	}
`;
