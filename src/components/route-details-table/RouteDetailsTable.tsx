import { useContext, useState } from "react";
import { RouteDetailsContext } from "../../contexts/route-details/RouteDetails";
import { RowHeading } from "./RouteDetailsTable.styled";
import { IconButton, Grid } from "@mui/material";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import TableHead from "./table-head/TableHead";
import Row from "./row/Row";

interface RouteDetailsTableProps {
  data: any;
  tableName: string;
}

export const RouteDetailsTable = ({
  data,
  tableName,
}: RouteDetailsTableProps) => {
  const { filteredDetails, setFilteredDetails } =
    useContext(RouteDetailsContext);
  const [collapsedRows, setCollapsedRows] = useState<any>({
    urlParams: true,
    queryParams: true,
    headers: true,
    body: true,
  });

  const handleToggleButton = (
    field: string,
    property: string,
    index: number
  ) => {
    const detailsCopy = { ...filteredDetails };
    const currentValue = detailsCopy[tableName][field][index][property];
    detailsCopy[tableName][field][index][property] = !currentValue;
    setFilteredDetails(detailsCopy);
  };

  const handleToggleCollapse = (rowName: string) => {
    setCollapsedRows({
      ...collapsedRows,
      [rowName]: !collapsedRows[rowName],
    });
  };

  return (
    <table style={{ width: "100%", textAlign: "left" }}>
      <TableHead />

      <tbody>
        {data?.urlParams?.length > 0 && (
          <>
            <Grid container alignItems="center">
              <IconButton onClick={() => handleToggleCollapse("urlParams")}>
                <ArrowDropDownCircleIcon />
              </IconButton>

              <RowHeading onClick={() => handleToggleCollapse("urlParams")}>
                URL Parameters
              </RowHeading>
            </Grid>

            {collapsedRows.urlParams &&
              data?.urlParams?.map((params: any, index: number) => (
                <Row
                  key={index}
                  index={index}
                  field="urlParams"
                  name={params.name}
                  pii={params.pii}
                  masked={params.masked}
                  type={params.type}
                  handleToggleButton={handleToggleButton}
                />
              ))}
          </>
        )}

        {data?.queryParams?.length > 0 && (
          <>
            <Grid container alignItems="center">
              <IconButton onClick={() => handleToggleCollapse("queryParams")}>
                <ArrowDropDownCircleIcon />
              </IconButton>
              <RowHeading onClick={() => handleToggleCollapse("queryParams")}>
                Query Parameters
              </RowHeading>
            </Grid>

            {collapsedRows.queryParams &&
              data?.queryParams?.map((params: any, index: number) => (
                <Row
                  key={index}
                  index={index}
                  field="queryParams"
                  name={params.name}
                  pii={params.pii}
                  masked={params.masked}
                  type={params.type}
                  handleToggleButton={handleToggleButton}
                />
              ))}
          </>
        )}

        {data?.headers?.length > 0 && (
          <>
            <Grid container alignItems="center">
              <IconButton onClick={() => handleToggleCollapse("headers")}>
                <ArrowDropDownCircleIcon />
              </IconButton>
              <RowHeading onClick={() => handleToggleCollapse("headers")}>
                Headers
              </RowHeading>
            </Grid>

            {collapsedRows.headers &&
              data?.headers?.map((header: any, index: number) => (
                <Row
                  key={index}
                  index={index}
                  field="headers"
                  name={header.name}
                  pii={header.pii}
                  masked={header.masked}
                  type={header.type}
                  handleToggleButton={handleToggleButton}
                />
              ))}
          </>
        )}

        {data?.body?.length > 0 && (
          <>
            <Grid container alignItems="center">
              <IconButton onClick={() => handleToggleCollapse("body")}>
                <ArrowDropDownCircleIcon />
              </IconButton>
              <RowHeading onClick={() => handleToggleCollapse("body")}>
                Body
              </RowHeading>
            </Grid>

            {collapsedRows.body &&
              data?.body?.map((item: any, index: number) => (
                <Row
                  key={index}
                  index={index}
                  field="body"
                  name={item.name}
                  pii={item.pii}
                  masked={item.masked}
                  type={item.type}
                  handleToggleButton={handleToggleButton}
                />
              ))}
          </>
        )}
      </tbody>
    </table>
  );
};

export default RouteDetailsTable;
