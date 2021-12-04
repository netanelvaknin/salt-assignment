import { styled, TextField, Button } from "@mui/material";

export const SearchField = styled(TextField)`
  width: 95%;
  position: relative;

  &:after {
    content: "";
    width: 2px;
    height: 50%;
    transform: translateY(50%);
    background: #ededed;
    top: 0;
    right: 0;
    position: absolute;
  }

  fieldset {
    border: 0;
  }
`;

export const Apply = styled(Button)`
  width: 100%;
  height: 60px;
  border-radius: 0;
  font-weight: bold;
`;
