import TabPanel from "../tab-panel/TabPanel";
import RouteDetailsTable from "../route-details-list/RouteDetailsList";
import { Details } from "../../contexts/route-details/RouteDetails";

interface EndpointDetailsProps {
  value: number;
  data: Details;
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
