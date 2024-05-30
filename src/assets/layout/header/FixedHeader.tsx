import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from "styled-components";
import {Container} from "../../styledComponents/Containers";
import {Logo} from "../../components/Logo";
import {Menu} from "../../components/Menu";
import {routes} from "../../scripts/variables";
import {Socials} from "../../components/Socials";

type FixedHeaderPropTypes = {
    isActive:boolean
};

export function FixedHeader(props:FixedHeaderPropTypes) {
    return (
        <StyledFixedHead aria-hidden={"true"} isActive={props.isActive}>
            <Container display="flex">
                <Logo iconType="gradient" />
                <Menu routes={routes} />
                <Socials />
            </Container>
        </StyledFixedHead>
    );
}

const StyledFixedHead = styled.div`
      width: 100%;
      padding: 20px 0;
      position: fixed;
      width: 100%;
      top: 0;
      left: 0;
      transform: ${(props:FixedHeaderPropTypes)=> props.isActive ? 'translateY(0)' : 'translateY(-100%)'};
      transition: transform 0.7s;
      background: rgba(255,255,255,.5);
      backdrop-filter: blur(5px);
`;