import React from "react";
import { Route } from "../assets/scripts/variables";
import { StyledContactsMenu } from "../styledComponents/StyledContactsMenu";
import { MenuLink } from "./MenuLink";

export function ContactsMenu(props: MenuPropsType) {
	return (
		<StyledContactsMenu>
			<ul>
				{props.routes.map((item: Route) => {
					return (
						<li key={`link_${item.id}`}>
							<MenuLink data={item} isSmall={true} color={props.color} />
						</li>
					);
				})}
			</ul>
		</StyledContactsMenu>
	);
}

type MenuPropsType = {
	routes: Route[];
	color?: string;
};
