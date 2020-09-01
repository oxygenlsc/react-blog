import React, { useState, useEffect } from 'react';
import './index.less';
import MapItem from './mapItem';
export default function MapBox(props: any) {
  const [arr, setarr] = useState([1, 3, 3, 4, 3, 2, 3, 4]);
  useEffect(() => {
    // arr.length
  }, []);
  const list = arr.map((el, i) => (
    <MapItem
      type={(i + 1) % 2 == 0 ? 'right' : 'left'}
      left={(i + 1) % 2 == 0 ? '60%' : '30%'}
      top={40 + i * 160}
    />
  ));
  return (
    <div className="map-Box-container">
      <div
        className="map-midde-line"
        style={{ height: `${arr.length * 160 + 40}px` }}
      ></div>
      {list}
      {/* <MapItem top={300}/>  */}
    </div>
  );
}
