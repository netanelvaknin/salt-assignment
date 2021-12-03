import { Button, Checkbox, TextField } from "@mui/material";

export const Filter = () => {
  return (
    <form>
      <TextField placeholder="Search" />
      <Checkbox />
      <Button>APPLY</Button>
    </form>
  );
};

export default Filter;
