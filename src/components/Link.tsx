import React from "react";
import { Icon } from "./Icon";
import {S} from "../styledComponents/linkStyles";

export function Link(props: LinkPropsType) {
	return (
		<S.Link href={props.path} iconId={props.iconId} name={props.name} isSmall={props.isSmall} color={props.color}>
			{props.name && props.name}
			{props.iconId && (
				<Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox} color={props.color || "#666666"} />
			)}
		</S.Link>
	);
}

type LinkPropsType = {
	path: string;
	name?: string;
	iconId?: string;
	width?: string;
	height?: string;
	viewBox?: string;
	isSmall?: boolean;
	color?: string;
};



