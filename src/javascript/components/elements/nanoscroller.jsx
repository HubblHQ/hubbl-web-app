import React from 'react';
import nanoScroller from 'nanoscroller';

export default class Nanoscroller  extends React.Component {
  componentDidMount() {
    this.scrollContainer.nanoScroller();
  }

  componentDidUpdate() {
    this.scrollContainer.nanoScroller();
  }

  componentWillUnmount() {
    this.scrollContainer.nanoScroller({destroy: true});
  }

  render() {
    return (
      <div className="nano" {...this.props} ref={(r) => this.scrollContainer = $(r)}>
        <div className="nano-content">
          {this.props.children}
        </div>
      </div>
    )
  }
}
