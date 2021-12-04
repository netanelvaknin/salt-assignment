import { styled, Button } from "@mui/material";

interface ButtonProps {
  isActive: boolean;
}

export const RowHeading = styled("div")`
  font-weight: bold;
  cursor: pointer;
`;

const StyledButton = styled(Button)`
  border-radius: 0;
  min-width: 100px;
  height: 27px;
  font-size: 15px;
  font-weight: bold;
`;

export const PIIButton = styled(StyledButton)<ButtonProps>(
  ({ isActive, theme }) => ({
    "&, &:hover": {
      background: isActive ? theme.palette.secondary.main : "white",
      color: isActive ? "white" : theme.palette.secondary.main,
      border: `2px solid ${theme.palette.secondary.main}`,
    },
  })
);

export const MaskedButton = styled(StyledButton)<ButtonProps>(
  ({ isActive, theme }) => ({
    "&, &:hover": {
      background: isActive ? theme.palette.primary.main : "white",
      color: isActive ? "white" : theme.palette.primary.main,
      border: `2px solid ${theme.palette.primary.main}`,
    },
  })
);

export const TypeTag = styled("span")`
  &,
  &:hover {
    border-radius: 0;
    min-width: 100px;
    max-width: 100px;
    height: 27px;
    font-size: 15px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #cee4ec;
    color: #78b8cb;
    cursor: initial;
  }
`;
