import { Divider, Grid, Typography, styled } from "@mui/material";

export const Headers = () => {
  return (
    <>
      <Grid container sx={{ p: "10px 35px" }}>
        <Grid item xs={4}>
          <Heading>NAME</Heading>
        </Grid>

        <Grid item container justifyContent="space-around" xs={4}>
          <Grid item>
            <Heading>PII</Heading>
          </Grid>
          <Grid item>
            <Heading>MASKING</Heading>
          </Grid>
        </Grid>

        <Grid item xs={4} container justifyContent="center">
          <Grid item>
            <Heading>TYPE</Heading>
          </Grid>
        </Grid>
      </Grid>
      <Divider />
    </>
  );
};

const Heading = styled(Typography)`
  color: ${(props) => props.theme.palette.primary.main};
  font-weight: bold;
`;

export default Headers;
