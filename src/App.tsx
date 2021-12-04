import RouteDetails from "./pages/route-details/RouteDetails";
import RouteDetailsProvider from "./contexts/route-details/RouteDetails";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouteDetailsProvider>
        <RouteDetails />
      </RouteDetailsProvider>
    </ThemeProvider>
  );
};

export default App;
