import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { theme } from "../../setting/mui.setting";


export const SecondaryButton = styled(Button)`
    background-color: ${theme.palette.secondary.main};
    color: #fff;
    padidn: 13px 38px;
    color: #fff;
    &:hover{
        background-color: ${theme, palette, secondary[600]};
}
`;