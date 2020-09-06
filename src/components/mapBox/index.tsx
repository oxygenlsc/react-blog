import React, { useState, useEffect } from 'react';
import './index.less';
import MapItem from './mapItem';

export default function MapBox(props: any) {
  // const [arr, setarr] = useState();
  useEffect(() => {
    // arr.length
  }, []);
  const list = props.allblog.map((el, i) => (
    <MapItem
      type={(i + 1) % 2 == 0 ? 'right' : 'left'}
      left={(i + 1) % 2 == 0 ? '60%' : '30%'}
      top={50 + i * 160}
      i={i}
      data={el}
    />
  ));
  return (
    <div
      className="map-Box-container "
      style={{ height: `${props.allblog.length * 160 + 40}px` }}
    >
      <div
        className="map-midde-line"
        style={{
          animation: `heights ${props.allblog.length}s linear  forwards `,
        }}
      ></div>
      {list}
      {/* <MapItem top={300}/>  */}
    </div>
  );
}
