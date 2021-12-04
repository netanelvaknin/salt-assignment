import { styled } from "@mui/material";

export const HeaderContainer = styled("header")`
  padding: 20px;
  font-size: 24px;
`;

export const Method = styled("span")`
  color: ${(props) => props.theme.palette.primary.light};
  margin-right: 10px;
`;

export const Path = styled("span")`
  color: ${(props) => props.theme.palette.primary.main};
  font-weight: bold;
  display: inline-block;
  margin-bottom: 10px;
`;

export const Crumb = styled("span")`
  color: ${(props) => props.theme.palette.primary.main};
  font-size: 18px;
  font-weight: bold;
`;
