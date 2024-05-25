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
            {props.data.map(item=><Card image={item.image}
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
`
