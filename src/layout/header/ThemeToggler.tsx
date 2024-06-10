import React, {useContext, useState} from 'react';
import styled, {ThemeContext, useTheme} from "styled-components";
import {FlexContainer} from "../../styledComponents/FlexContainer";

type ThemeTogglerPropsType = {
    toggleTheme?: () => void
    theme: string
}
export function ThemeToggler(props:ThemeTogglerPropsType) {

    return (
        <FlexContainer align={"center"} style={{marginLeft: "40px"}}>
            <StyledTHemeToggler className="switch">
                <input type="checkbox"  onChange={props.toggleTheme} checked={props.theme === 'dark'} />
                    <StyledSlider className="slider round"/>
            </StyledTHemeToggler>
        </FlexContainer>
    );
}

const StyledTHemeToggler = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 30px;
  margin-top: 6px;
  
  & input {
    display: none;
    
    &:checked + .slider {
      background: linear-gradient(90deg,rgb(19,176,245),rgb(231,15,170));

      &::before {
        //background-image: url(/assets/img/icons/check_dark.svg);
      }

    }
    &:focus + .slider {
      box-shadow: 0 0 1px #2196F3;
    }  
      
    &:checked + .slider:before {
         -webkit-transform: translateX(20px);
         -ms-transform: translateX(20px);
         transform: translateX(20px);
    }
  }
`

const StyledSlider = styled.span`
  position: absolute;
       cursor: pointer;
       top: 0;
       left: 0;
       right: 0;
       bottom: 0;
       background-color: #ccc;
       -webkit-transition: .4s;
       transition: .4s;
  
  &::before {
         position: absolute;
         content: "";
         height: 24px;
         width: 24px;
         left: 3px;
         bottom: 3px;
         //background-image: url(/assets/img/icons/close-sm.svg);
         background-repeat: no-repeat;
         background-position: center;
         // background-size: contain;
         background-color: white;
         -webkit-transition: .4s;
         transition: .4s;
         -webkit-transform: translateX(0);
         -ms-transform: translateX(0);
         transform: translateX(0);
     }
  
  &.round {
    border-radius: 40px;
    
    &:before {
           border-radius: 50%;
       }
  }
`
// .slider {
//     position: absolute;
//     cursor: pointer;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background-color: #ccc;
//     -webkit-transition: .4s;
//     transition: .4s;
// }
//
// .slider
//
// input:checked + .slider  {
//     // background-color: #2196F3;
//
// &::before {
//         background-image: url(/assets/img/icons/check_dark.svg);
//     }
// }
//
// input:focus + .slider {
//     box-shadow: 0 0 1px #2196F3;
// }
//
// input:checked + .slider:before {
//     -webkit-transform: translateX(28px);
//     -ms-transform: translateX(28px);
//     transform: translateX(28px);
// }
//
// /* Rounded sliders */
// .slider.round {
//     border-radius: 40px;
// }
//
// .slider.round:before {
//     border-radius: 50%;
// }