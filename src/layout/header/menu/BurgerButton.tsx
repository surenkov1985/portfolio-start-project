import React from 'react';
import {S} from "./menuStyles"

export const BurgerButton = (props: { toggleMobile?: ()=> void }) => {
    return (
        <S.BurgerButton aria-label={"burger button"} aria-haspopup={true} onClick={props.toggleMobile}>
            <span></span><span></span><span></span>
        </S.BurgerButton>
    );
};
