import React from "react";
import styled from "styled-components";
import { Route } from "../scripts/variables";
// import { StyledMenu } from "../styledComponents/StyledMenu";
import { MenuLink } from "./MenuLink";

export function FooterMenu(props: MenuPropsType) {
	return (
		<StyledMenu>
			<ul>
				{props.routes.map((item: Route) => {
					return (
						<li key={`link_${item.id}`}>
							<MenuLink data={item} isSmall={true}  color={props.color}/>
						</li>
					);
				})}
			</ul>
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
