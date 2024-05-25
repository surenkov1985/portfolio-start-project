"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.GlobalStyles = void 0;
var styled_components_1 = require("styled-components");
exports.GlobalStyles = styled_components_1.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    html,\n    body,\n    div,\n    span,\n    h1,\n    h2,\n    h3,\n    h4,\n    h5,\n    h6,\n    p,\n    a,\n    b,\n    u,\n    i,\n    ol,\n    ul,\n    li,\n    form,\n    label,\n    caption,\n    article,\n    footer,\n    header,\n    nav,\n    section,\n    audio,\n    video {\n        margin: 0;\n        padding: 0;\n        font-size: 100%;\n        vertical-align: baseline;\n    }\n\n    html {\n        scroll-behavior: smooth;\n    }\n\n    address {\n        font-style: normal;\n    }\n\n    a {\n        text-decoration: none;\n        -webkit-tap-highlight-color: transparent;\n        -webkit-touch-callout: none;\n    }\n\n    ul,\n    li,\n    img {\n        list-style-type: none;\n        margin: 0;\n        padding: 0;\n        -webkit-touch-callout: none;\n        -webkit-tap-highlight-color: transparent;\n    }\n\n    img {\n        -webkit-touch-callout: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n    }\n\n    h1,\n    h2,\n    h3,\n    h4,\n    h5,\n    h6 {\n        font-size: 100%;\n        font-weight: normal;\n    }\n\n    html {\n        -webkit-box-sizing: border-box;\n        box-sizing: border-box;\n    }\n\n    *,\n    *:before,\n    *:after {\n        -webkit-box-sizing: border-box;\n        box-sizing: border-box;\n    }\n\n    :focus {\n        outline: 0;\n    }\n\n    img,\n    audio,\n    video {\n        max-width: 100%;\n        height: auto;\n    }\n\n    audio,\n    iframe,\n    video,\n    img,\n    svg {\n        vertical-align: middle;\n    }\n\n    iframe {\n        border: 0;\n    }\n\n    textarea {\n        resize: none;\n        /*remove the resize handle on the bottom right*/\n        overflow: auto;\n        vertical-align: top;\n        box-shadow: none;\n        -webkit-box-shadow: none;\n        -moz-box-shadow: none;\n    }\n\n    input,\n    textarea,\n    select,\n    button,\n    label,\n    div {\n        outline: none;\n        border: none;\n            font-size: 100%;\n        margin: 0;\n        padding: 0;\n        -webkit-tap-highlight-color: transparent;\n        -webkit-touch-callout: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n    }\n\n    textarea,\n    button,\n    input {\n        line-height: normal;\n        background: none;\n    }\n\n    input:-webkit-autofill,\n    input:-webkit-autofill:hover,\n    input:-webkit-autofill:focus,\n    textarea:-webkit-autofill,\n    textarea:-webkit-autofill:hover,\n    textarea:-webkit-autofill:focus,\n    select:-webkit-autofill,\n    select:-webkit-autofill:hover,\n    select:-webkit-autofill:focus {\n        border: none;\n        outline: none !important;\n        background: rgba(255, 255, 255, 0);\n        transition: all 5000s ease-in-out;\n    }\n\n    input:active,\n    input:focus,\n    textarea:-webkit-autofill,\n    textarea:-webkit-autofill:hover,\n    textarea:-webkit-autofill:focus,\n    select:-webkit-autofill,\n    select:-webkit-autofill:hover,\n    select:-webkit-autofill:focus {\n        border: none;\n        outline: none !important;\n    }\n\n\n    html {\n        font-size: var(--font-size);\n    }\n\n    body {\n        position: relative;\n        width: 100%;\n        min-height: 100vh;\n        min-width: 320px;\n        margin: 0;\n        overflow-x: hidden;\n        color: var(--clr-black);\n        font-size: var(--font-size);\n        font-family: var(--font-accent);\n        background: var(--clr-white);\n\n\n    }\n\n    a {\n        color: var(--clr-black);\n        text-decoration: none;\n    }\n\n    ::selection {\n        color: #fff;\n        // background-color: var(--clr-accent);\n    }\n\n    :focus {\n        outline: none !important;\n    }\n\n    input,\n    textarea,\n    button,\n    select,\n    a {\n        margin: 0;\n        padding: 0;\n        border: none;\n        outline: none !important;\n        font-size: 1em;\n        font-family: inherit;\n        background: none;\n        box-shadow: none;\n    }\n\n    input,\n    button,\n    select {\n        line-height: 1;\n    }\n\n    input[type=number] {\n        -moz-appearance: textfield;\n    }\n\n    input[type=number]::-webkit-inner-spin-button {\n        -webkit-appearance: none;\n    }\n\n    *[class$=__media] {\n        flex-shrink: 0;\n    }\n\n    ul {\n        list-style: none;\n    }\n\n    button {\n        cursor: pointer;\n    }\n\n    * {\n        -webkit-tap-highlight-color: transparent !important;\n    }\n\n    textarea {\n        overflow: auto;\n        resize: none;\n    }\n\n    article,\n    aside,\n    dialog,\n    figcaption,\n    figure,\n    footer,\n    header,\n    hgroup,\n    main,\n    nav,\n    section,\n    form {\n        display: block;\n    }\n\n    main {\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        flex-grow: 1;\n        /* gap: var(--main-content-gap); */\n    }\n\n    * {\n        box-sizing: border-box;\n    }\n\n    *::before,\n    *::after {\n        box-sizing: border-box;\n    }\n\n    h1,\n    h2,\n    h3,\n    h4,\n    h5,\n    h6 {\n        margin-top: 0;\n        margin-bottom: 0;\n    }\n\n    body {\n        margin: 0;\n        font-family: \"Poppins\",\n            sans-serif;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        margin: 0;\n        padding: 0;\n        width: 100%;\n        height: 100%;\n\n    }\n\n    * {\n        box-sizing: border-box;\n    }\n\n    code {\n        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n        monospace;\n    }\n\n    #root {\n        width: 100%;\n        height: 100%;\n        min-height: 100vh;\n    }\n"], ["\n    html,\n    body,\n    div,\n    span,\n    h1,\n    h2,\n    h3,\n    h4,\n    h5,\n    h6,\n    p,\n    a,\n    b,\n    u,\n    i,\n    ol,\n    ul,\n    li,\n    form,\n    label,\n    caption,\n    article,\n    footer,\n    header,\n    nav,\n    section,\n    audio,\n    video {\n        margin: 0;\n        padding: 0;\n        font-size: 100%;\n        vertical-align: baseline;\n    }\n\n    html {\n        scroll-behavior: smooth;\n    }\n\n    address {\n        font-style: normal;\n    }\n\n    a {\n        text-decoration: none;\n        -webkit-tap-highlight-color: transparent;\n        -webkit-touch-callout: none;\n    }\n\n    ul,\n    li,\n    img {\n        list-style-type: none;\n        margin: 0;\n        padding: 0;\n        -webkit-touch-callout: none;\n        -webkit-tap-highlight-color: transparent;\n    }\n\n    img {\n        -webkit-touch-callout: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n    }\n\n    h1,\n    h2,\n    h3,\n    h4,\n    h5,\n    h6 {\n        font-size: 100%;\n        font-weight: normal;\n    }\n\n    html {\n        -webkit-box-sizing: border-box;\n        box-sizing: border-box;\n    }\n\n    *,\n    *:before,\n    *:after {\n        -webkit-box-sizing: border-box;\n        box-sizing: border-box;\n    }\n\n    :focus {\n        outline: 0;\n    }\n\n    img,\n    audio,\n    video {\n        max-width: 100%;\n        height: auto;\n    }\n\n    audio,\n    iframe,\n    video,\n    img,\n    svg {\n        vertical-align: middle;\n    }\n\n    iframe {\n        border: 0;\n    }\n\n    textarea {\n        resize: none;\n        /*remove the resize handle on the bottom right*/\n        overflow: auto;\n        vertical-align: top;\n        box-shadow: none;\n        -webkit-box-shadow: none;\n        -moz-box-shadow: none;\n    }\n\n    input,\n    textarea,\n    select,\n    button,\n    label,\n    div {\n        outline: none;\n        border: none;\n            font-size: 100%;\n        margin: 0;\n        padding: 0;\n        -webkit-tap-highlight-color: transparent;\n        -webkit-touch-callout: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n    }\n\n    textarea,\n    button,\n    input {\n        line-height: normal;\n        background: none;\n    }\n\n    input:-webkit-autofill,\n    input:-webkit-autofill:hover,\n    input:-webkit-autofill:focus,\n    textarea:-webkit-autofill,\n    textarea:-webkit-autofill:hover,\n    textarea:-webkit-autofill:focus,\n    select:-webkit-autofill,\n    select:-webkit-autofill:hover,\n    select:-webkit-autofill:focus {\n        border: none;\n        outline: none !important;\n        background: rgba(255, 255, 255, 0);\n        transition: all 5000s ease-in-out;\n    }\n\n    input:active,\n    input:focus,\n    textarea:-webkit-autofill,\n    textarea:-webkit-autofill:hover,\n    textarea:-webkit-autofill:focus,\n    select:-webkit-autofill,\n    select:-webkit-autofill:hover,\n    select:-webkit-autofill:focus {\n        border: none;\n        outline: none !important;\n    }\n\n\n    html {\n        font-size: var(--font-size);\n    }\n\n    body {\n        position: relative;\n        width: 100%;\n        min-height: 100vh;\n        min-width: 320px;\n        margin: 0;\n        overflow-x: hidden;\n        color: var(--clr-black);\n        font-size: var(--font-size);\n        font-family: var(--font-accent);\n        background: var(--clr-white);\n\n\n    }\n\n    a {\n        color: var(--clr-black);\n        text-decoration: none;\n    }\n\n    ::selection {\n        color: #fff;\n        // background-color: var(--clr-accent);\n    }\n\n    :focus {\n        outline: none !important;\n    }\n\n    input,\n    textarea,\n    button,\n    select,\n    a {\n        margin: 0;\n        padding: 0;\n        border: none;\n        outline: none !important;\n        font-size: 1em;\n        font-family: inherit;\n        background: none;\n        box-shadow: none;\n    }\n\n    input,\n    button,\n    select {\n        line-height: 1;\n    }\n\n    input[type=number] {\n        -moz-appearance: textfield;\n    }\n\n    input[type=number]::-webkit-inner-spin-button {\n        -webkit-appearance: none;\n    }\n\n    *[class$=__media] {\n        flex-shrink: 0;\n    }\n\n    ul {\n        list-style: none;\n    }\n\n    button {\n        cursor: pointer;\n    }\n\n    * {\n        -webkit-tap-highlight-color: transparent !important;\n    }\n\n    textarea {\n        overflow: auto;\n        resize: none;\n    }\n\n    article,\n    aside,\n    dialog,\n    figcaption,\n    figure,\n    footer,\n    header,\n    hgroup,\n    main,\n    nav,\n    section,\n    form {\n        display: block;\n    }\n\n    main {\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        flex-grow: 1;\n        /* gap: var(--main-content-gap); */\n    }\n\n    * {\n        box-sizing: border-box;\n    }\n\n    *::before,\n    *::after {\n        box-sizing: border-box;\n    }\n\n    h1,\n    h2,\n    h3,\n    h4,\n    h5,\n    h6 {\n        margin-top: 0;\n        margin-bottom: 0;\n    }\n\n    body {\n        margin: 0;\n        font-family: \"Poppins\",\n            sans-serif;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        margin: 0;\n        padding: 0;\n        width: 100%;\n        height: 100%;\n\n    }\n\n    * {\n        box-sizing: border-box;\n    }\n\n    code {\n        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n        monospace;\n    }\n\n    #root {\n        width: 100%;\n        height: 100%;\n        min-height: 100vh;\n    }\n"])));
var templateObject_1;