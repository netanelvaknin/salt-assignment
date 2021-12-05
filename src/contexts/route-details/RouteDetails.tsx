import { createContext, useState, useEffect } from "react";
import http from "../../http";

export const RouteDetailsContext = createContext<any>(undefined);

export interface Parameter {
  name: string;
  pii: boolean;
  masked: boolean;
  type: string;
}

export interface Request {
  urlParams: Parameter[];
  queryParams: Parameter[];
  headers: Parameter[];
  body: Parameter[];
}

export interface Response {
  headers: Parameter[];
  body: Parameter[];
}
export interface Details {
  api: string;
  method: string;
  path: string;
  request: Request;
  response: Response;
}

interface RouteDetailsProps {
  children?: React.ReactNode;
}

export const RouteDetails = ({ children }: RouteDetailsProps) => {
  const [details, setDetails] = useState<Details | null>(null);
  const [filteredDetails, setFilteredDetails] = useState<Details | null>(
    details
  );

  useEffect(function getRouteDetails() {
    (async () => {
      try {
        const { data } = await http.get("/fe_data.json");

        if (data) {
          setDetails(data);
          setFilteredDetails(data);
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
        filteredDetails,
        setDetails,
        setFilteredDetails,
      }}
    >
      {children}
    </RouteDetailsContext.Provider>
  );
};

export default RouteDetails;
