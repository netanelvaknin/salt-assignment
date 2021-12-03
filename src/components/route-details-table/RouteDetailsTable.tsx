import { useContext, useState } from "react";
import { RouteDetailsContext } from "../../contexts/route-details/RouteDetails";
import { RowHeading } from "./RouteDetailsTable.styled";
import Row from "./row/Row";

interface RouteDetailsTableProps {
  data: any;
  tableName: string;
}

export const RouteDetailsTable = ({
  data,
  tableName,
}: RouteDetailsTableProps) => {
  const { details, setDetails } = useContext(RouteDetailsContext);
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
    const detailsCopy = { ...details };
    const currentValue = detailsCopy[tableName][field][index][property];
    detailsCopy[tableName][field][index][property] = !currentValue;
    setDetails(detailsCopy);
  };

  const handleToggleCollapse = (rowName: string) => {
    setCollapsedRows({
      ...collapsedRows,
      [rowName]: !collapsedRows[rowName],
    });
  };

  return (
    <table style={{ width: "100%", textAlign: "left" }}>
      <thead>
        <tr>
          <th>NAME</th>
          <th>PII</th>
          <th>MASKING</th>
          <th>TYPE</th>
        </tr>
      </thead>

      <tbody>
        {data?.urlParams?.length > 0 && (
          <>
            <RowHeading onClick={() => handleToggleCollapse("urlParams")}>
              URL Parameters
            </RowHeading>
            {collapsedRows.urlParams &&
              data?.urlParams?.map((params: any, index: number) => {
                return (
                  <Row
                    index={index}
                    field="urlParams"
                    name={params.name}
                    pii={params.pii}
                    masked={params.masked}
                    type={params.type}
                    handleToggleButton={handleToggleButton}
                  />
                );
              })}
          </>
        )}

        {data?.queryParams?.length > 0 && (
          <>
            <RowHeading onClick={() => handleToggleCollapse("queryParams")}>
              Query Parameters
            </RowHeading>
            {collapsedRows.queryParams &&
              data?.queryParams?.map((params: any, index: number) => {
                return (
                  <Row
                    index={index}
                    field="queryParams"
                    name={params.name}
                    pii={params.pii}
                    masked={params.masked}
                    type={params.type}
                    handleToggleButton={handleToggleButton}
                  />
                );
              })}
          </>
        )}

        {data?.headers?.length > 0 && (
          <>
            <RowHeading onClick={() => handleToggleCollapse("headers")}>
              Headers
            </RowHeading>
            {collapsedRows.headers &&
              data?.headers?.map((header: any, index: number) => {
                return (
                  <Row
                    index={index}
                    field="headers"
                    name={header.name}
                    pii={header.pii}
                    masked={header.masked}
                    type={header.type}
                    handleToggleButton={handleToggleButton}
                  />
                );
              })}
          </>
        )}

        {data?.body?.length > 0 && (
          <>
            <RowHeading onClick={() => handleToggleCollapse("body")}>
              Body
            </RowHeading>
            {collapsedRows.body &&
              data?.body?.map((item: any, index: number) => {
                return (
                  <Row
                    index={index}
                    field="body"
                    name={item.name}
                    pii={item.pii}
                    masked={item.masked}
                    type={item.type}
                    handleToggleButton={handleToggleButton}
                  />
                );
              })}
          </>
        )}
      </tbody>
    </table>
  );
};

export default RouteDetailsTable;
