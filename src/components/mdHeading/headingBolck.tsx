import React, { PureComponent } from 'react';
import Heading from './heading';

export default class headingBolck extends PureComponent {
  renderHtml = () => {
    const { level, children } = this.props;
    if (children && children.length > 0) {
      const nodeValue = children[0].props.value;
      return (
        <Heading level={`h${level}`} id={nodeValue}>
          {children}
        </Heading>
      );
    } else {
      return <>{children}</>;
    }
  };
  render() {
    return <>{this.renderHtml()}</>;
  }
}
