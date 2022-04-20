import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import "leaflet/dist/images/marker-shadow.png"
import L from 'leaflet';

const Mapa = (props) => {
  props?.data[0]&&
  console.log(props?.data[0].coordenadas)
  let icon = L.icon({
     iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
     iconUrl: require('leaflet/dist/images/marker-icon.png'),
     shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})
  return (
    <MapContainer
      center={[11.228597901068992, -74.18948529948366]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: '100vh', width: '100vw' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        props.data.map((iten,index)=>(
          
      <Marker icon={icon} position={[iten.coordenadas.lat, iten.coordenadas.long]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker> 
        ))
      }

    </MapContainer>

  )
}

export default Mapa