import React from 'react';
import './BottomGraph.scss';

class Graph extends React.Component {
  constructor() {
    super();
    this.canvas = React.createRef();
  }

  componentDidMount() {
    this.renderGraph();
  }

  renderGraph() {
    const context = this.canvas.current.getContext("2d");

    /* Start a new Path */
    context.beginPath();
    context.lineWidth = 2;

    context.moveTo(0, 300);
    context.bezierCurveTo(0, 280, 250, 270, 250, 265);

    context.moveTo(250, 265);
    context.bezierCurveTo(250, 265, 450, 225, 450, 225);

    context.moveTo(450, 225);
    context.bezierCurveTo(450, 225, 650, 200, 650, 210);

    context.moveTo(650, 210);
    context.bezierCurveTo(650, 210, 850, 150, 850, 130);


    /* Drawing line on the canvas  */
    context.stroke();
  }

  render() {
    return (
      <div className="BottomGraph__Container">
        <canvas ref={this.canvas} width="800" height="600"></canvas>;
      </div>
    )
  }
}

export default Graph;