import React from 'react';
import {contacts, Route} from "../../assets/scripts/variables";
import {MobileMenu} from "../header/menu/MobileMenu";
import {Logo} from "../../components/Logo";
import {Socials} from "../../components/Socials";
import {ContactsMenu} from "../footer/footerMenu/ContactsMenu";
import {St} from "./mobileStyles";

type MobilePropsType = {
    isActive: boolean
    closeMobile: ()=>void
    routes: Route[];
}

export function Mobile(props:MobilePropsType) {
    return (
        <St.MobileWrapper isActive={props.isActive}>
            <St.MobileContainer isActive={props.isActive}>
                <St.MobileHeader>
                    <Logo iconType={'gradient'}/>
                </St.MobileHeader>
                <St.CloseButton onClick={props.closeMobile}><span></span><span></span></St.CloseButton>
                <MobileMenu routes={props.routes}/>
                <St.MobileFooter>
                    <Socials />
                    <ContactsMenu routes={contacts}/>
                </St.MobileFooter>
            </St.MobileContainer>
        </St.MobileWrapper>
    );
}

