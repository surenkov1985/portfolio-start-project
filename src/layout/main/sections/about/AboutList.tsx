import React from 'react';
import {S} from "./aboutStyles";
import {WorkList} from "./WorkList";
import {WorkItemPropsType} from "./WorkItem";

type AboutListPropsType = {
    title: string
    description?: string
    workList?: WorkItemPropsType[]
}
export function AboutList(props:AboutListPropsType) {

    return (
        <>
            <S.AboutTitle>{props.title}</S.AboutTitle>
            {props.description && <S.AboutText>{props.description}</S.AboutText>}
            {props.workList && <WorkList data={props.workList}/>}
        </>
    );
}
