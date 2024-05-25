import React from 'react';
import styled from "styled-components";

export  function SectionTitle(props:SectionTitlePropsType) {
    return (
        <StyledSectionTitle>
            <StyledTitle>{props.title}</StyledTitle>
            {props.subtitle && <StyledSubtitle>{props.subtitle}</StyledSubtitle>}
        </StyledSectionTitle>

    );
}

type SectionTitlePropsType = {
    title: string
    subtitle?: string
}
const StyledSectionTitle = styled.div`
  margin-bottom: 110px;
`
const StyledTitle = styled.h2`
  color: #42446E;
  font-size: 3rem;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0px;
  text-align: center;
  margin-bottom: 49px;
`
const StyledSubtitle = styled.p`
  font-size: 2rem;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0px;
  text-align: center;
`