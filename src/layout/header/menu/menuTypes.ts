import {Route} from "../../../assets/scripts/variables";

export type MenuPropsType = {
    routes: Route[];
    color?: string;
    toggleMobile?: ()=> void
};