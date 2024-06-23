import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

const API_KEY = "AIzaSyDJEgXA4Z1P7Xsh4eCDubTJtji5EFoZftM";

function App() {
  return (
    <APIProvider apiKey={API_KEY}>
      <Map
        style={{ width: "100vw", height: "100vh" }}
        defaultCenter={{ lat: 0, lng: 0 }}
        defaultZoom={6}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      >
        <Marker
          position={{ lat: 0, lng: 0 }}
          clickable={true}
          onClick={() => alert("marker was clicked!")}
          title={"clickable google.maps.Marker"}
        />
      </Map>
    </APIProvider>
  );
}

export default App;
