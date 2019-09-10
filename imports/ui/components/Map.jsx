import React from "react";
import { ReactBingmaps } from 'react-bingmaps';
import bing_map_api from '../../config/bing_map_api';

const MapComponent = () => {
  return (
    <ReactBingmaps bingmapKey={bing_map_api} center={[13.0827, 80.2707]}/>
  );
}

export default MapComponent;
