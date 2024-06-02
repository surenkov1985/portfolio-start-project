import React from 'react';
import styled from "styled-components";
import {FlexContainer} from "../styledComponents/FlexContainer";
import {Icon} from "./Icon";

export type CardPropTypes = {
    image: string
    title: string
    text: string
    stack: string
    previewLink: string
    gitLink: string
};

export function Card(props:CardPropTypes) {
    return (
        <StyledCard >
            <img src={require(`../assets/images/${props.image}`)} alt="{props.name}"/>
            <StyledCardContent>
                <StyledCardTitle>{props.title}</StyledCardTitle>
                <StyledCardText>{props.text}</StyledCardText>
                <StyledCardStack>Tech stack: <span>{props.stack}</span></StyledCardStack>
                <FlexContainer align={"center"} justify={"space-between"} >
                    <StyledCardLink href={props.previewLink}><Icon iconId="link" width="20" height="20" viewBox="0 0 20 20" color={"none"}/> <span>Live Preview</span>
                    </StyledCardLink>
                    <StyledCardLink href={props.gitLink}>
                        <Icon iconId="git_sm" width="20" height="20" viewBox="0 0 20 20"  /> <span>View Code</span>
                    </StyledCardLink>
                </FlexContainer>
            </StyledCardContent>
        </StyledCard>
    );
}

const StyledCard = styled.article`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  overflow: hidden;
  flex: 1 1 290px;
  box-shadow: 2px 2px 100px 0px rgba(0, 0, 0, 0.2);
  background: ${props => props.theme.cardBg};
  flex-shrink: 0;
  
  & img {
    width: 100%;
    height: 260px;
    object-fit: cover;
  }

  @media ${props => props.theme.media.mobile} {
    box-shadow: 2px 2px 40px 0px rgba(0, 0, 0, 0.2);
    & img {
      height: 200px;
    }
    
  }
`

const StyledCardContent = styled.div`
  height: auto;
  padding: 28px 30px 24px;
  width: 100%;

  @media ${props => props.theme.media.mobile} {
    padding: 24px 20px 20px;
  }
`

const StyledCardTitle = styled.h3`
  font-size: 28px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0px;
  color: ${props => props.theme.cardTitle};
  margin-bottom: 1rem;

  @media ${props => props.theme.media.tablet} {
    font-size: 24px;
  }

  @media ${props => props.theme.media.mobile} {
    font-size: 20px;
  }

  @media (max-width: 320px) {
   font-size: 18px;
    margin-bottom: 0.75rem;
  }
`

const StyledCardText = styled.p`
  font-size: 18px;
  font-weight: 300;
  line-height: 26px;
  letter-spacing: 0px;
  margin-bottom: 0.875rem;

  @media ${props => props.theme.media.mobile} {
    font-size: 16px;
  }
`

const StyledCardStack = styled.div`
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0px;
  color: ${props => props.theme.title};
  margin-bottom: 1.25rem;
  display: flex;
  gap: 8px;
  align-items: baseline;
  flex-wrap: nowrap;
  white-space: nowrap;
    
    & span {
      font-size: 14px;
        font-weight: 300;
      white-space: break-spaces;
    }

  @media ${props => props.theme.media.mobile} {
    
  }
`
const StyledCardLink = styled.a`
  display: flex;
  align-items: center;
  gap: 7px;
  
  
  & span{
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 0px;
    text-decoration-line: underline;
    color: ${props => props.theme.cardTitle};
    transition: all .5s;
  }
  
  & svg path {
    fill: ${props => props.theme.cardTitle} !important;
  }
  
  &:hover {
    & span {
      color: #42446E;
    }
    
    & svg {
      fill: #42446E;
    }
  }
  
`
