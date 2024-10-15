import React, { Children } from "react";
import { SecondaryButton as StyledSecondaryButton} from "./style";


export const SecondaryButton = ({
    children,
    onclick,
    type = "button",
    ...res
}) =>{
    return(
        <StyledSecondaryButton {...res} type={type} onclick={onclick}>
            {children}
        </StyledSecondaryButton>
    );
};