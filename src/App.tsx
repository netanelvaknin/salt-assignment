import RouteDetails from "./pages/route-details/RouteDetails";
import RouteDetailsProvider from "./contexts/route-details/RouteDetails";

const App = () => {
  return (
    <RouteDetailsProvider>
      <RouteDetails />
    </RouteDetailsProvider>
  );
};

export default App;
