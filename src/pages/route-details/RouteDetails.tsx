import { useState, useContext } from "react";
import { RouteDetailsContext } from "../../contexts/route-details/RouteDetails";
import Header from "../../components/header/Header";
import { Tabs, Tab } from "@mui/material";
import EndpointDetails from "../../components/endpoint-details/EndpointDetails";
import Filter from "../../components/filter/Filter";

export const RouteDetails = () => {
  const { details } = useContext(RouteDetailsContext);
  const [tab, setTab] = useState(0);
  const tabsData = [details?.request, details?.response];

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

      <Tabs value={tab} onChange={handleTabChange}>
        <Tab label="Request" />
        <Tab label="Response" />
      </Tabs>

      <Filter />

      <EndpointDetails value={tab} data={tabsData[tab]} />
    </div>
  );
};

export default RouteDetails;
