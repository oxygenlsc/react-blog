import React from 'react';
import './index.less';
export const Button1 = (props: { type: string }) => {
  return (
    <div
      className={`btn-one ${props.type}`}
      style={{ top: props.top, left: props.left, background: props.bg }}
      onClick={props.click}
    >
      {props.title}
    </div>
  );
};

export const Button2 = props => {
  return (
    <div
      className={`btn-one ${props.type}`}
      style={{ top: props.top, left: props.left, background: props.bg }}
      onClick={props.click}
    >
      {props.title}
    </div>
  );
};
