import useLocation from "./hooks/useLocation";
import "./App.css";

function App() {
  const { getLocation, location, error, loading } = useLocation();
  return (
    <div className="App">
      <button onClick={getLocation}>
        {loading ? "Locating..." : "Get Location"}
      </button>
      <div>{location ? <span>Location: {location}</span> : null}</div>
      <div>{error}</div>
    </div>
  );
}

export default App;
