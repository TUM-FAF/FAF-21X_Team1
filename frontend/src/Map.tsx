import './App.css';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import huntingLocData from "./data/hunting_treasure_data.json";
import { Link } from 'react-router-dom';

export const Map=() => {
    return (
    <MapContainer center={[47.059387, 28.866936]} zoom={16} scrollWheelZoom={true}>
    <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    <Link to="/qrcode">    
      <button id="allbus" className="btn btn-success">QR Scan</button>
      </Link>
      {huntingLocData.map(hdata => (
        <Marker 
        key = {hdata.id}
        position={[hdata.lat, hdata.lng]}>
        </Marker>
      ))}
      
      </MapContainer>
    )
}
