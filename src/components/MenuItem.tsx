import React from "react";
import { Route } from "../assets/scripts/variables";
import { Link } from "./Link";

export function MenuItem(props: MenuLinkPropsType) {
	return(
	<li role={"menuitem"}>
		<Link path={props.data.path} name={props.data.name} isSmall={props.isSmall} color={props.color} />
	</li>);
}

type MenuLinkPropsType = {
	data: Route;
	isSmall?: boolean;
	color?: string;
};

