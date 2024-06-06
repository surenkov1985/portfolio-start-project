import React from 'react';
import {FlexContainer} from "../../../../styledComponents/FlexContainer";
import {Icon} from "../../../../components/Icon";
import {S} from "./projectsStyles";

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
            <img src={require(`../../../../assets/images/${props.image}`)} alt="{props.name}"/>
            <S.CardContent>
                <S.CardTitle>{props.title}</S.CardTitle>
                <S.CardText>{props.text}</S.CardText>
                <S.CardStack>Tech stack: <span>{props.stack}</span></S.CardStack>
                <FlexContainer align={"center"} justify={"space-between"} >
                    <S.CardLink href={props.previewLink}><Icon iconId="link" width="20" height="20" viewBox="0 0 20 20" color={"none"}/> <span>Live Preview</span>
                    </S.CardLink>
                    <S.CardLink href={props.gitLink}>
                        <Icon iconId="git_sm" width="20" height="20" viewBox="0 0 20 20"  /> <span>View Code</span>
                    </S.CardLink>
                </FlexContainer>
            </S.CardContent>
        </S.Card>
    );
}

