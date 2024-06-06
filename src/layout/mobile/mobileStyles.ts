import styled from "styled-components";
import {S} from "../../styledComponents/socialsStyles"
import {StyledContactsMenu} from "../../styledComponents/StyledContactsMenu";

type StyledMobilePropsType = {
    isActive: boolean
}

const MobileWrapper = styled.div<StyledMobilePropsType>`
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
const MobileContainer = styled.div<StyledMobilePropsType>`
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
const CloseButton = styled.button`
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

const MobileHeader = styled.div`
  padding: 30px 0;
`

const MobileFooter = styled.div`
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
  
  & ${S.Socials} {
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

export const St = {
    MobileWrapper,
    MobileContainer,
    CloseButton,
    MobileHeader,
    MobileFooter
}