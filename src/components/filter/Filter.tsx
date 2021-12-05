import { useState, useContext, useEffect } from "react";
import {
  Button,
  Checkbox,
  Grid,
  FormGroup,
  FormControlLabel,
  Paper,
} from "@mui/material";
import {
  RouteDetailsContext,
  Parameter,
} from "../../contexts/route-details/RouteDetails";
import SearchIcon from "@mui/icons-material/Search";
import { SearchField, Apply } from "./Filter.styled";

export const Filter = () => {
  const { details, setFilteredDetails } = useContext(RouteDetailsContext);
  const [showOnlyPii, setShowOnlyPii] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>("");

  useEffect(() => {
    if (keyword === "") {
      setFilteredDetails(details);
    }
  }, [keyword, details, setFilteredDetails]);

  const findRows = (param: Parameter) => {
    if (showOnlyPii) {
      return (
        param.name.toLowerCase().includes(keyword.toLowerCase()) &&
        param.pii === true
      );
    } else {
      return param.name.toLowerCase().includes(keyword.toLowerCase());
    }
  };

  const findPiiRows = (param: Parameter) => {
    return param.pii === true;
  };

  const filterParameters = () => {
    if (keyword === "" && !showOnlyPii) {
      return setFilteredDetails(details);
    }

    const { request, response } = details;
    const filteredRequest: any = {};
    const filteredResponse: any = {};

    if (keyword === "" && showOnlyPii) {
      Object.entries(request).forEach(([key, value]: any) => {
        filteredRequest[key] = value.filter(findPiiRows);
      });

      Object.entries(response).forEach(([key, value]: any) => {
        filteredResponse[key] = value.filter(findPiiRows);
      });
    } else {
      Object.entries(request).forEach(([key, value]: any) => {
        filteredRequest[key] = value.filter(findRows);
      });

      Object.entries(response).forEach(([key, value]: any) => {
        filteredResponse[key] = value.filter(findRows);
      });
    }

    const filteredDetails = {
      ...details,
      request: filteredRequest,
      response: filteredResponse,
    };

    setFilteredDetails(filteredDetails);
  };

  const resetFilter = () => {
    setFilteredDetails(details);
    setKeyword("");
    setShowOnlyPii(false);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    filterParameters();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Paper>
        <Grid container alignItems="center">
          <Grid item xs={6} md={7}>
            <SearchField
              placeholder="Search"
              value={keyword}
              InputProps={{
                startAdornment: <SearchIcon sx={{ mr: "20px" }} />,
              }}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </Grid>

          <Grid item xs={4} md={3}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={showOnlyPii}
                    onChange={(e) => setShowOnlyPii(e.target.checked)}
                  />
                }
                label="Show PII only"
              />
            </FormGroup>
          </Grid>

          <Grid item xs={2} md={2}>
            <Apply type="submit" variant="contained">
              APPLY
            </Apply>
          </Grid>
        </Grid>
      </Paper>

      <Grid container justifyContent="flex-end">
        <Button onClick={resetFilter}>Reset Filter</Button>
      </Grid>
    </form>
  );
};

export default Filter;
