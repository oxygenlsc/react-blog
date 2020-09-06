import React, { useState, useEffect } from 'react';
import MapBox from '@/components/mapBox';
import { connect } from 'dva';

function MapContainer(props: any) {
  const [allblog, setallblog] = useState([]);
  const { dispatch } = props;
  useEffect(() => {
    dispatch({
      type: 'blog/getAllblogs',
      payload: '',
    }).then(res => {
      setallblog(res?.data);
    });
  }, []);
  return <MapBox allblog={allblog} />;
}
export default connect(blog => blog)(MapContainer);
