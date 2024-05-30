import React from 'react';
import styled from "styled-components";

export  function SectionTitle(props:SectionTitlePropsType) {
    return (
        <StyledSectionTitle mBottom={props.mBottom}>
            <StyledTitle>{props.title}</StyledTitle>
            {props.subtitle && <StyledSubtitle>{props.subtitle}</StyledSubtitle>}
        </StyledSectionTitle>

    );
}

type SectionTitlePropsType = {
    title: string
    subtitle?: string
    mBottom?:string
}
type StyledSectionTitlePropsType = {
    mBottom?:string
}
const StyledSectionTitle = styled.div<StyledSectionTitlePropsType>`
  margin-bottom: ${props=>props.mBottom ? props.mBottom : "125px"};
`
const StyledTitle = styled.h2`
  color: #42446E;
  font-size: 3rem;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0px;
  text-align: center;
  margin-bottom: 48px;
`
const StyledSubtitle = styled.p`
  font-size: 2rem;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0px;
  text-align: center;
`