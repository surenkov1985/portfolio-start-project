import React from 'react';
import {Card, CardPropTypes} from "./Card";
import {S} from "./projectsStyles";


type CardsPropTypes = {
    data: CardPropTypes[]
};

export function Cards(props:CardsPropTypes) {
    return (
        <S.Cards wrap={"wrap"}>
            {props.data.map((item, index)=><Card key={`card_${index}`} image={item.image}
                                        title={item.title}
                                        text={item.text}
                                        stack={item.stack}
                                        previewLink={item.previewLink}
                                        gitLink={item.gitLink}/>)}
        </S.Cards>
    );
}


