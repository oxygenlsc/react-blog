import React from 'react';
import Particles from 'react-tsparticles';
import { bgc } from './config';
import './index.less';
export default function Index(props: any) {
  return (
    <>
      <Particles
        width="100%"
        height="100%"
        className="p-bg"
        params={bgc}
      ></Particles>
      <div className="upTop">UP</div>
    </>
  );
}
