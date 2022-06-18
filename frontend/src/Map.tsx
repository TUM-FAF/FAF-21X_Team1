import './App.css';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import huntingLocData from "./data/hunting_treasure_data.json";
import { useNavigate } from "react-router-dom";

export const Map=() => {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      const path = `/newPath`; 
      navigate(path);
      console.log("Hello")
    }

    return (
        <MapContainer center={[47.059387, 28.866936]} zoom={16} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

      <button id="allbus" className="btn btn-success" onClick={routeChange}>All</button>

      {huntingLocData.map(hdata => (
        <Marker 
        key = {hdata.id}
        position={[hdata.lat, hdata.lng]}>
        </Marker>
      ))}
      
      </MapContainer>
    )
}