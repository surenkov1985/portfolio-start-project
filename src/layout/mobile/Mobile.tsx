import React from 'react';
import styled from "styled-components";
import {contacts, Route} from "../../assets/scripts/variables";
import {MobileMenu} from "../header/menu/MobileMenu";
import {Logo} from "../../components/Logo";
import {Socials, StyledSocials} from "../../components/Socials";
import {ContactsMenu} from "../footer/footerMenu/ContactsMenu";
import {StyledContactsMenu} from "../../styledComponents/StyledContactsMenu";

type MobilePropsType = {
    isActive: boolean
    closeMobile: ()=>void
    routes: Route[];
}

type StyledMobilePropsType = {
    isActive: boolean
}
export function Mobile(props:MobilePropsType) {
    return (
        <StyledMobileWrapper isActive={props.isActive}>
            <StyledMobileContainer isActive={props.isActive}>
                <StyledMobileHeader>
                    <Logo iconType={'gradient'}/>
                </StyledMobileHeader>
                <StyledCloseButton onClick={props.closeMobile}><span></span><span></span></StyledCloseButton>
                <MobileMenu routes={props.routes}/>
                <StyledMobileFooter>
                    <Socials/>
                    <ContactsMenu routes={contacts}/>
                </StyledMobileFooter>
            </StyledMobileContainer>
        </StyledMobileWrapper>
    );
}

const StyledMobileWrapper = styled.div<StyledMobilePropsType>`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  right: 0;
  z-index:  1000;
  background: ${props => props.theme.colors.fixedHeaderBg};
  display: flex;
  justify-content: flex-end;
  backdrop-filter: blur(10px);
  visibility: ${props => props.isActive ? 'visible' : 'hidden'};
  opacity: ${props => props.isActive ? '1' : '0'};
  transition: opacity 0.3s;
  
  @media screen and (min-width: 1100px) {
    display: none;
  }
`
const StyledMobileContainer = styled.div<StyledMobilePropsType>`
  width: 90%;
  max-width: 400px;
  height: 100%;
  background: ${props => props.theme.colors.bg};
  box-shadow: 2px 2px 100px 0px rgba(0, 0, 0, 0.2);
  transform: translateX(${props => props.isActive ? '0' : '100%'});
  position: relative;
  transition: all 0.7s;
  padding: 0px 20px  ;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`
const StyledCloseButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  top: 40px;
  right: 10px;
  
  & span {
    display: block;
    width: 30px;
    height: 2px;
    background: ${props => props.theme.colors.primary};
    transform-origin: center;
    position: absolute;
    
    &:first-child {
      transform: rotate(45deg);
    }
    &:last-child {
      transform: rotate(-45deg);
    }
  }
  
  &:hover {
    
    & span {
      opacity: 0.7;
    }
  }
`

const StyledMobileHeader = styled.div`
  padding: 30px 0;
`

const StyledMobileFooter = styled.div`
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
  
  & ${StyledSocials} {
    @media ${props => props.theme.media.mobile} {
      display: flex;
    }
  }
  
  & ${StyledContactsMenu} {
    margin-right: 0;

    @media ${props => props.theme.media.mobile} {
      display: flex;
    }
    
    & ul {
      gap: 1rem;
      justify-content: flex-end;
    }
  }
`