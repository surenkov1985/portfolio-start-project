import React from "react";
import { Route } from "../../../assets/scripts/variables";
import { StyledContactsMenu } from "../../../styledComponents/StyledContactsMenu";

import {MenuList} from "../../header/menu/MenuList";

export function ContactsMenu(props: MenuPropsType) {
	return (
		<StyledContactsMenu>
			<MenuList routes={props.routes}/>
		</StyledContactsMenu>
	);
}

type MenuPropsType = {
	routes: Route[];
	color?: string;
};
