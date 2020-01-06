import React, { Component } from 'react';
import { storiesOf, action } from '@storybook/react';
import {LineGraph} from 'carbon-addons-data-viz-react';
import { withInfo } from '@storybook/addon-info';

class ProcessQuad extends Component {
  state = {
    data: this.createData(12).sort(function(a, b) {
      return a[a.length - 1] - b[b.length - 1];
    }),
  };

  componentDidMount() {
    let i = 0;
    this.interval = setInterval(() => {
      this.updateData(i);
      i++;
    }, 5000);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  //Here instead of producing randomly generated numbers, we will have three 
  //(or more numbers corresponding to specific features from the bluesight)
  createData(num) {
    let data = [];
    for (let i = 0; i < num; i++) {
      let tempArr = [];
      let d = new Date();
      let randomNum = Math.floor(Math.random() * 1000 + 1);
      let randomNumTwo = Math.floor(Math.random() * 1000 + 1);
      let randomNumThree = Math.floor(Math.random() * 1000 + 1);
      d = d.getTime() - i * 3000;
      tempArr.push(randomNum, randomNumTwo, randomNumThree, d);
      data.push(tempArr);
    }

    return data;
  }

  updateData(i) {
    let data = this.createData(12).sort(function(a, b) {
      return a[a.length - 1] - b[b.length - 1];
    });

    this.setState({
      data,
      xAxisLabel: `${i}`,
      yAxisLabel: `${i}`,
    });
  }

  render() {
    const props = {
      margin: {
        top: 30,
        right: 20,
        bottom: 75,
        left: 65,
      },
      height: 500,
      width: 1000,
      labelOffsetY: 55,
      labelOffsetX: 65,
      axisOffset: 16,
      timeFormat: '%I:%M:%S',
      yAxisLabel: this.state.yAxisLabel,
      xAxisLabel: this.state.xAxisLabel,
      data: this.state.data,
      onHover: () => {},
      onMouseOut: () => {},
      id: this.props.id,
      containerId: this.props.containerId,
      drawLine: this.props.drawLine,
      animateAxes: this.props.animateAxes,
      seriesLabels: ['Bluecard F1', 'Bluecard F2', 'Bluecard F3'],
    };

    return <div><LineGraph {...props} /></div>
  }
}

storiesOf('LineGraph', module)
  .add(
    'Updating',
    `
      Line Graph.
    `,
    () => (
      <div>
        <ProcessQuad
          onHover={action('Hover')}
          onMouseOut={action('Mouseout')}
          onBlur={action('Blur')}
        />
        <ProcessQuad
          id="two"
          containerId="test-two"
          onHover={action('Hover')}
          onMouseOut={action('Mouseout')}
          onBlur={action('Blur')}
        />
      </div>
    )
  )
  .add(
    'Updating without drawing line',
    `
      Line Graph without draw line animation.
    `,
    () => (
      <div>
        <ProcessQuad
          onHover={action('Hover')}
          onMouseOut={action('Mouseout')}
          onBlur={action('Blur')}
          drawLine={false}
        />
        <ProcessQuad
          id="two"
          containerId="test-two"
          onHover={action('Hover')}
          onMouseOut={action('Mouseout')}
          onBlur={action('Blur')}
          drawLine={false}
        />
      </div>
    )
  )
  .add(
    'Updating without animating axes',
    `
      Line Graph without axes animation.
    `,
    () => (
      <div>
        <ProcessQuad
          onHover={action('Hover')}
          onMouseOut={action('Mouseout')}
          onBlur={action('Blur')}
          animateAxes={false}
        />
        <ProcessQuad
          id="two"
          containerId="test-two"
          onHover={action('Hover')}
          onMouseOut={action('Mouseout')}
          onBlur={action('Blur')}
          animateAxes={false}
        />
      </div>
    )
  )
  .add('Static', ` Static Example. `, () => (
    <LineGraph
      datasets={[
        [[43, 1507563000000], [27, 1507563900000], [33, 1507564800000]],
        [
          [48.633333333333, 1507563004000],
          [21, 1507563900140],
          [38, 1507564830000],
        ],
      ]}
      onHover={action('Hover')}
      onMouseOut={action('Mouseout')}
      onBlur={action('Blur')}
    />
  ))
  .add('Number values for X', ` Static Example. `, () => (
    <LineGraph
      datasets={[
        [[45, 12], [23, 14], [33, 18], [31, 20], [12, 21]],
        [[48.633333333333, 11], [21, 15], [38, 16], [21, 19], [31, 21]],
      ]}
      onHover={action('Hover')}
      onMouseOut={action('Mouseout')}
      onBlur={action('Blur')}
      seriesLabels={['Series 1', 'Series 2', 'Series 3']}
      showLegend
      isXTime={false}
    />
  ))
  .add('Empty', ` Empty Example. `, () => (
    <LineGraph
      onHover={action('Hover')}
      onMouseOut={action('Mouseout')}
      onBlur={action('Blur')}
    />
  ));

  export default ProcessQuad;