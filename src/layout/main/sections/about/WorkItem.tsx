import React, {useRef} from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/Icon";
import {FlexContainer} from "../../../../styledComponents/FlexContainer";
import { useInView } from "framer-motion";

export type WorkItemPropsType = {
    id: number|string
    name: string
    company: string
    place?: string
    dates: string
    type: string
}

export function WorkItem(props:WorkItemPropsType) {
    const ref = useRef(null);
    const isInView = useInView(ref)

        return (
            <StyledWorkItem ref={ref} align="normal" justify="space-between" direction={"column"} gap={"8px"}>
                <StyledWorkDesc
                    justify="space-between"
                    style={{
                    transform: isInView ? "none" : "translateY(20px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
                }}>
                    <StyledWorkTitle>{props.name}</StyledWorkTitle>
                    <StyledWorkType>{props.type}</StyledWorkType>

                </StyledWorkDesc>
                <StyledWorkDate
                    justify={"space-between"}
                                style={{
                                    transform: isInView ? "none" : "translateY(20px)",
                                    opacity: isInView ? 1 : 0,
                                    transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) "
                                }}>
                    <StyledWorkPlace align="center" justify="space-between" wrap={"wrap"}>
                        <span><Icon iconId={"house"} width={"16"} height={"12"} viewBox={"0 0 16 12"}/>{props.company}</span>
                        {props.place && (<span><Icon iconId={"location"} width={"16"} height={"12"} viewBox={"0 0 16 12"}/> {props.place}</span>)}
                    </StyledWorkPlace>
                    <StyledWorkText align="center" justify="space-between">
                        <span><Icon iconId={"calendar"} width={"16"} height={"12"} viewBox={"0 0 16 12"}/> {props.dates}</span>
                    </StyledWorkText>
                </StyledWorkDate>
            </StyledWorkItem>
        );

}

const StyledWorkItem = styled(FlexContainer)`
  
  padding-bottom: 25px;
  border-bottom: 2px solid rgb(235, 234, 237);

  @media ${props => props.theme.media.mobile} {
    padding-bottom: 16px;
    flex-direction: column;
    gap: 1rem;
  }
`

const StyledWorkDesc = styled(FlexContainer)`
  //width: calc(460 / 696 * 100%);
  
`
const StyledWorkText = styled(FlexContainer)`
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 1px;
  //max-width: 170px;
  justify-content: space-between;
  
  & span {
    white-space: nowrap;
  }
`
const StyledWorkPlace = styled(StyledWorkText)`
  width: 60%;
`
const StyledWorkTitle = styled.h3`
  color: #666666;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: 1px;
  margin-bottom: 8px;

  @media ${props => props.theme.media.mobile} {
    font-size: 1.125rem ;
    margin-bottom: 0;
  }
  
`

const StyledWorkType = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #D7FFE0;
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
  gap: 0.875rem ;
  flex-wrap: wrap;
  @media ${props => props.theme.media.mobile} {
    //margin-left: auto;
  }
`