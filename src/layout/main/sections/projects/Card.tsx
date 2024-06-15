import React from 'react';
import {FlexContainer} from "../../../../styledComponents/FlexContainer";
import {Icon} from "../../../../components/Icon";
import {S} from "./projectsStyles";
import styled from "styled-components";

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
        <S.Card >
            <CardImgLink>
                <img src={require(`../../../../assets/images/${props.image}`)} alt="{props.name}"/>
                <CardMoreLink href={"#"}>Show more</CardMoreLink>
            </CardImgLink>
            <S.CardContent>
                <S.CardTitle>{props.title}</S.CardTitle>
                <S.CardText>{props.text}</S.CardText>
                <S.CardStack>Tech stack: <span>{props.stack}</span></S.CardStack>
                <FlexContainer align={"center"} justify={"space-between"} >
                    <S.CardLink href={props.previewLink}><Icon iconId="link" width="20" height="20" viewBox="0 0 20 20" /> <span>Live Preview</span>
                    </S.CardLink>
                    <S.CardLink href={props.gitLink}>
                        <Icon iconId="git_sm" width="20" height="20" viewBox="0 0 20 20" color={"#000"} /> <span>View Code</span>
                    </S.CardLink>
                </FlexContainer>
            </S.CardContent>
        </S.Card>
    );
}


const CardMoreLink = styled.a`
  display: block;
  position: absolute;
  padding: 0.75rem 1.5rem;
  color: #fff;
  border-radius: .5rem;
  visibility: hidden;
  opacity: 0;
  transition: all 0.7s;
  z-index: 1;
  background: ${props => props.theme.colors.gradient};
  font-weight: 500;
  
  &:hover {
    transform: translateY(-7px);
  }
`

const CardImgLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background: ${props => props.theme.colors.fixedHeaderBg};
    position: absolute;
    z-index: 1;
    visibility: hidden;
    opacity: 0;
    transition: all 0.7s;
  }
  
  & img {
    transition: all 0.7s;
  }
  
  &:hover {
    
    &::before {
      visibility: visible;
      opacity: 1;
    }
    
    & img {
      transform: scale(1.05);
    }
    
    & ${CardMoreLink} {
      visibility: visible;
      opacity: 1;
    }
  }
`
