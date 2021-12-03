import { createContext, useState, useEffect } from "react";
import http from "../../http";

export const RouteDetailsContext = createContext<any>(undefined);

interface RouteDetailsProps {
  children?: React.ReactNode;
}

export const RouteDetails = ({ children }: RouteDetailsProps) => {
  const [details, setDetails] = useState<any>(null);

  useEffect(function getRouteDetails() {
    (async () => {
      try {
        const { data } = await http.get("/fe_data.json");

        if (data) {
          setDetails(data);
        }
      } catch (error) {
        alert("Something went wrong...");
      }
    })();
  }, []);

  return (
    <RouteDetailsContext.Provider
      value={{
        details,
        setDetails,
      }}
    >
      {children}
    </RouteDetailsContext.Provider>
  );
};

export default RouteDetails;
