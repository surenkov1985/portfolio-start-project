import React, { Children } from 'react';
import {WorkItem, WorkItemPropsType} from "./WorkItem";
import styled from "styled-components";

type WorkListPropsType = {
    data: WorkItemPropsType[]
}
export function WorkList(props:WorkListPropsType) {


    // @ts-ignore
    return <StyledWorkList>
        {props.data.map(item=><WorkItem key={item.id} type={item.type} id={item.id} name={item.name} company={item.company} dates={item.dates} place={item.place}/>)}
    </StyledWorkList>;

}

const StyledWorkList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 38px;
`

