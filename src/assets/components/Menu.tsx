import React from "react";
import styled from "styled-components";
import { Route } from "../scripts/variables";
import { MenuLink } from "./MenuLink";

export function Menu(props: MenuProps) {
	return (
		<StyledMenu>
			<ul>
				{props.routes.map((item: Route) => {
					return (
						<MenuItem key={`link_${item.id}`}>
							<MenuLink data={item} />
						</MenuItem>
					);
				})}
			</ul>
		</StyledMenu>
	);
}

type MenuProps = {
	routes: Route[];
};

const StyledMenu = styled.nav`
	margin-left: auto;

	& ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		gap: 3.5rem;
	}
`;

const MenuItem = styled.li``;
