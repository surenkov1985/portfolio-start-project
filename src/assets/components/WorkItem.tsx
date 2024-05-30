import React from 'react';
import styled from "styled-components";
import {Icon} from "./Icon";
import {FlexContainer} from "../styledComponents/FlexContainer";

export type WorkItemPropsType = {
    id: number|string
    name: string
    company: string
    place?: string
    dates: string
    type: string
}

export function WorkItem(props:WorkItemPropsType) {

        return (
            <StyledWorkItem align="normal" justify="space-between">
                <StyledWorkDesc>
                    <StyledWorkTitle>{props.name}</StyledWorkTitle>
                    <StyledWorkText align="center" justify="space-between">
                        <span>
                            <span><Icon iconId={"house"} width={"16px"} height={"12px"} viewBox={"viewBox=\"0 0 16 12\""}/>{props.company}</span>
                        </span>
                        <span>
                            {props.place && (<span><Icon iconId={"location"} width={"16px"} height={"12px"} viewBox={"viewBox=\"0 0 16 12\""}/> {props.place}</span>)}
                        </span>
                    </StyledWorkText>
                </StyledWorkDesc>
                <StyledWorkDate direction={"column"} align={"flex-end"} justify={"space-between"}>
                    <StyledWorkType>{props.type}</StyledWorkType>
                    <StyledWorkText align="center" justify="space-between">
                        <span>
                            <span><Icon iconId={"calendar"} width={"16px"} height={"12px"} viewBox={"viewBox=\"0 0 16 12\""}/> {props.dates}</span>
                        </span>

                </StyledWorkText>

                </StyledWorkDate>
            </StyledWorkItem>
        );

}

const StyledWorkItem = styled(FlexContainer)`
  
  padding-bottom: 25px;
  border-bottom: 2px solid rgb(235, 234, 237);
`

const StyledWorkDesc = styled.div`
  width: calc(460 / 696 * 100%);
`
const StyledWorkText = styled(FlexContainer)`
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 1px;
`
const StyledWorkTitle = styled.h3`
  color: #666666;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 1px;
  margin-bottom: 8px;
`

const StyledWorkType = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #25DAC5;
  border-radius: 100px;
  min-width: 85px;
  min-height: 24px;
  color: #018C0F;
  font-size: 9px;
  font-weight: 600;
  //line-height: 26px;
  letter-spacing: 0px;
  text-align: center;
`
const StyledWorkDate = styled(FlexContainer)`
  width: calc(225 / 696 * 100%);
  height: auto;
`