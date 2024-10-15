import React from "react";
import { IconButton, Stack, useMediaQuery } from "@mui/material";
import { LoginIcon } from "../../../assets/icons/LoginIcon";
import styled from "@emotion/styled";
import { theme } from "../../../setting/mui.setting";

const CustomIconButton = styled(IconButton)`
  color: #1d1d1d;
  &:hover {
    color: ${theme.palette.primary.main};
  }
`;

export const HeaderButton = () => {
  return (
        <Stack direction={"row"} gap={"20px"}>
            <CustomIconButton>
              <LoginIcon />
            </CustomIconButton>
            <CustomIconButton>
              <LoginIcon />
            </CustomIconButton>
            <CustomIconButton>
              <LoginIcon />
            </CustomIconButton>
        </Stack>
  );
};
