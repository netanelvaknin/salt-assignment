import { useState, useContext, useEffect } from "react";
import { Button, Checkbox, TextField } from "@mui/material";
import { RouteDetailsContext } from "../../contexts/route-details/RouteDetails";

export const Filter = () => {
  const { details, setFilteredDetails } = useContext(RouteDetailsContext);
  const [showOnlyPii, setShowOnlyPii] = useState(false);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    if (keyword === "") {
      setFilteredDetails(details);
    }
  }, [keyword, details, setFilteredDetails]);

  const findRows = (param: any) => {
    if (showOnlyPii) {
      return (
        param.name.toLowerCase().includes(keyword.toLowerCase()) &&
        param.pii === true
      );
    } else {
      return param.name.toLowerCase().includes(keyword.toLowerCase());
    }
  };

  const findPiiRows = (param: any) => {
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
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    filterParameters();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        placeholder="Search"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <Checkbox
        value={showOnlyPii}
        onChange={(e) => setShowOnlyPii(e.target.checked)}
      />
      <Button type="submit" variant="contained">
        APPLY
      </Button>
      <Button onClick={resetFilter}>Reset Filter</Button>
    </form>
  );
};

export default Filter;
