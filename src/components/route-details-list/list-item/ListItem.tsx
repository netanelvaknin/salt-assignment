import { Grid, Paper, styled } from "@mui/material";
import { PIIButton, MaskedButton, TypeTag } from "../RouteDetailsList.styled";

type Field = "urlParams" | "queryParams" | "headers" | "body";

interface ListItemProps {
  index: number;
  field: Field;
  name: string;
  pii: boolean;
  masked: boolean;
  type: string;
  handleToggleButton: (field: string, property: string, index: number) => void;
}

export const ListItem = ({
  index,
  field,
  name,
  pii,
  masked,
  type,
  handleToggleButton,
}: ListItemProps) => {
  return (
    <StyledPaper>
      <Grid container key={name}>
        <Grid item xs={4}>
          <span>{name}</span>
        </Grid>

        <Grid item container justifyContent="space-around" xs={4}>
          <Grid item>
            <PIIButton
              isActive={pii}
              onClick={() => handleToggleButton(field, "pii", index)}
            >
              PII
            </PIIButton>
          </Grid>
          <Grid item>
            <MaskedButton
              isActive={masked}
              onClick={() => handleToggleButton(field, "masked", index)}
            >
              MASKED
            </MaskedButton>
          </Grid>
        </Grid>

        <Grid item xs={4} container justifyContent="center">
          <Grid item>
            <TypeTag>{type.toUpperCase()}</TypeTag>
          </Grid>
        </Grid>
      </Grid>
    </StyledPaper>
  );
};

const StyledPaper = styled(Paper)`
  padding: 16px;
  margin: 10px 10px 15px;
  border-radius: 0;
`;

export default ListItem;
