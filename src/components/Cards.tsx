import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import {FlexContainer} from "../styledComponents/FlexContainer";
import {Card, CardPropTypes} from "./Card";

type CardsPropTypes = {
    data: CardPropTypes[]
};

export function Cards(props:CardsPropTypes) {
    return (
        <StyledCards wrap={"wrap"}>
            {props.data.map((item, index)=><Card key={`card_${index}`} image={item.image}
                                        title={item.title}
                                        text={item.text}
                                        stack={item.stack}
                                        previewLink={item.previewLink}
                                        gitLink={item.gitLink}/>)}
        </StyledCards>
    );
}

const StyledCards = styled(FlexContainer)`
  gap: 62px 34px;

  @media ${props => props.theme.media.tablet} {
    gap: 50px 30px;
  }

  @media ${props => props.theme.media.mobile} {
    gap: 40px 25px;
  }

  @media (max-width: 320px) {
    gap: 20px;
  }
`
