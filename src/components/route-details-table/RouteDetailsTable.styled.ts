import { styled, Button } from "@mui/material";

interface ButtonProps {
  isActive: boolean;
}

export const RowHeading = styled("tr")`
  font-weight: bold;
`;

export const PIIButton = styled(Button)<ButtonProps>(({ isActive }) => ({
  "&, &:hover": {
    background: isActive ? "blue" : "white",
  },
}));

export const MaskedButton = styled(Button)<ButtonProps>(({ isActive }) => ({
  "&, &:hover": {
    background: isActive ? "purple" : "white",
  },
}));
