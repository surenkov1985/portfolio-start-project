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
            <img src={require(`../images/${props.image}`)} alt="{props.name}"/>
            <StyledCardContent>
                <StyledCardTitle>{props.title}</StyledCardTitle>
                <StyledCardText>{props.text}</StyledCardText>
                <StyledCardStack>Tech stack: <span>{props.stack}</span></StyledCardStack>
                <FlexContainer align={"center"} justify={"space-between"} >
                    <StyledCardLink href={props.previewLink}><Icon iconId="link" width="20" height="20" viewBox="0 0 20 20" color={"none"}/> <span>Live Preview</span>
                    </StyledCardLink>
                    <StyledCardLink href={props.gitLink}>
                        <Icon iconId="git_sm" width="20" height="20" viewBox="0 0 20 20"  color={"#000000"}/> <span>View Code</span>
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
  flex: 1 1 300px;
  box-shadow: 2px 2px 100px 0px rgba(0, 0, 0, 0.2);
  background: rgb(255, 255, 255);
  flex-shrink: 0;
  
  & img {
    width: 100%;
    height: 260px;
    object-fit: cover;
  }
`

const StyledCardContent = styled.div`
  height: auto;
  padding: 25px 30px;
  width: 100%;
`

const StyledCardTitle = styled.h3`
  font-size: 28px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0px;
  color: #000000;
  margin-bottom: 1rem;
`

const StyledCardText = styled.p`
  font-size: 18px;
  font-weight: 300;
  line-height: 26px;
  letter-spacing: 0px;
  margin-bottom: 0.75rem;
`

const StyledCardStack = styled.div`
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0px;
  color: #42446E;
  margin-bottom: 1.25rem;
    
    & span {
      font-size: 14px;
        font-weight: 300;
    }
`
const StyledCardLink = styled.a`
  display: flex;
  align-items: center;
  gap: 7px;
  
  
  & span{
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0px;
    text-decoration-line: underline;
    color: #000000;
    transition: all .5s;
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
