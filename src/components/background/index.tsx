import React, { useState } from 'react';
import Particles from 'react-tsparticles';
import { bgc } from './config';
import './index.less';
export default function Index(props: any) {
  const [model, setmodel] = useState(true);
  return (
    <>
      <div className="p-bg">
        <div
          className="bg-masks"
          style={{
            backgroundColor: `${model ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0)'}`,
          }}
        ></div>
      </div>
      {/* <Particles
        width="100%"
        height="100%"
        className="p-bg"
        params={bgc}
      ></Particles> */}
      <div className="fixed-btn-box">
        <div
          className="upTop"
          onClick={() => {
            window.scroll(0, 0);
          }}
        >
          UP
        </div>
        <div
          className="model"
          onClick={() => {
            setmodel(!model);
          }}
        >
          {model ? 'light' : 'dark'}
        </div>
      </div>
    </>
  );
}
