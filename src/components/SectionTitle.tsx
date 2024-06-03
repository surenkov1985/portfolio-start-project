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

  @media ${props => props.theme.media.tablet} {
    margin-bottom: 90px;
  }

  @media ${props => props.theme.media.mobile} {
    margin-bottom: 50px;
  }
  @media (max-width: 360px) {
    margin-bottom: 30px;
  }
`
const StyledTitle = styled.h2`
  color: ${props => props.theme.colors.title};
  font-size: 3rem;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0px;
  text-align: center;
  margin-bottom: 48px;
  transition: color 0.7s;

  @media ${props => props.theme.media.tablet} {
    font-size: 2rem; 
    line-height: 1;
    margin-bottom: 42px;
  }

  @media ${props => props.theme.media.mobile} {
    font-size: 1.875rem;
    margin-bottom: 30px;

    @media (max-width: 360px) {
      margin-bottom: 16px;
    }
  }
`
const StyledSubtitle = styled.p`
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: 0px;
  text-align: center;
  color: ${props => props.theme.colors.primary};
  transition: color 0.7s;
  
  @media ${props => props.theme.media.tablet} {
    font-size: 1.5rem;
  }

  @media ${props => props.theme.media.mobile} {
    font-size: 1.25rem;
  }
  
`