import TabPanel from "../tab-panel/TabPanel";
import RouteDetailsTable from "../route-details-table/RouteDetailsTable";

interface EndpointDetailsProps {
  value: number;
  data: any;
}

export const EndpointDetails = ({ value, data }: EndpointDetailsProps) => {
  return (
    <>
      <TabPanel index={0} value={value}>
        <RouteDetailsTable data={data} tableName="request" />
      </TabPanel>

      <TabPanel index={1} value={value}>
        <RouteDetailsTable data={data} tableName="response" />
      </TabPanel>
    </>
  );
};

export default EndpointDetails;
