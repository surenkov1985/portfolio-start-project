import React from "react";
import { MenuList } from "./MenuList";
import {BurgerButton} from "./BurgerButton";
import {S} from "./menuStyles"
import {MenuPropsType} from "./menuTypes";

export function Menu(props: MenuPropsType) {
	return (
		<S.Menu>
			<MenuList routes={props.routes}/>
			<BurgerButton toggleMobile={props.toggleMobile}/>
		</S.Menu>
	);
}

