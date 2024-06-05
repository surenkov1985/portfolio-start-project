import React from 'react';
import {Route} from "../../../assets/scripts/variables";
import {MenuItem} from "../../../components/MenuItem";
import {MenuPropsType} from "./menuTypes";
import {S} from "./menuStyles";

export const MenuList = (props:MenuPropsType) => {
    return (
        <S.MenuList role={"menu"}>
            {props.routes.map((item: Route) => {
                return (
                   <MenuItem key={`link_${item.id}`} data={item} />
                );
            })}
        </S.MenuList>
    );
};

