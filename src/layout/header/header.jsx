import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { navigation } from "./headerData";
import { Link } from "react-router-dom";
import { navigation } from "./headerData";
import { theme } from "../../setting/mui.setting";

export const Header = () => {
  return (
    <>
      <Container maxWidth="sm">
        <Stack
          py={{ sm: "14px", md: "30px" }}
          direction={"row"}
          alignItems={"center"}
          gap={{ sm: "33px", md: "61px" }}
        >
          <Search />
          <Box display={{ sm: "none", md: "block" }}>
            <HeaderButton />
          </Box>
        </Stack>
      </Container>
      <Box bgcolor={theme.palette.grey.main}>
        <Container maxWidth="sm">
          <Stack
            display={{ sm: "none", md: "flex" }}
            direction={"row"}
            justifyContent={"space-between"}
            py={"30px"}
          >
            {navigation.map((item) => (
                <Link style={{textDecoration: "none"}}
                to={item.path}
                key={item.id}
                >
                    <Typography variant="body1">{item.name}</Typography>
                </Link>
            ))}
          </Stack>
        </Container>
      </Box>
    </>
  );
};
