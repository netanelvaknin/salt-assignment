import { useState, useContext } from "react";
import { RouteDetailsContext } from "../../contexts/route-details/RouteDetails";
import { Tabs } from "@mui/material";
import { Preview, RouteTab } from "./RouteDetails.styled";
import Header from "../../components/header/Header";
import EndpointDetails from "../../components/endpoint-details/EndpointDetails";
import Filter from "../../components/filter/Filter";

export const RouteDetails = () => {
  const { details, filteredDetails } = useContext(RouteDetailsContext);
  const [tab, setTab] = useState(0);
  const tabsData = [filteredDetails?.request, filteredDetails?.response];
  const selectedTabData = tabsData[tab];

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <div>
      <Header
        method={details?.method}
        api={details?.api}
        path={details?.path}
      />

      <Tabs value={tab} sx={{ pl: "15px" }} onChange={handleTabChange}>
        <RouteTab label="Request" />
        <RouteTab label="Response" />
      </Tabs>

      <Preview>
        <Filter />

        <EndpointDetails value={tab} data={selectedTabData} />
      </Preview>
    </div>
  );
};

export default RouteDetails;
