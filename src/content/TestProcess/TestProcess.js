import React, {Component}from 'react';
import { storiesOf, action } from '@storybook/react';
import {ScatterPlot} from 'carbon-addons-data-viz-react';


class TestProcess extends Component {

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

createData(num) {
  let data = [];
  for (let i = 0; i < num; i++) {
    let tempArr = [];
    let d = new Date();
    let randomNum = Math.floor(Math.random() * 1000 + 1);
    d = d.setDate(d.getDate() - i * 30);
    tempArr.push(randomNum, d);
    data.push(tempArr);
  }

  return data;
}


updateData(i){
let data = this.createData(20).sort(function(a, b) {
  return a[1] - b[1];
});

this.setState({
  data,
  xAxisLabel: `${i}`,
  yAxisLabel:`${i}`,
});
}

render(){
const props = {
  data: this.state.data,
  margin: {
    top: 30,
    right: 20,
    bottom: 70,
    left: 65,
  },
  height: 300,
  width: 800,
  labelOffset: 55,
  axisOffset: 16,
  xAxisLabel: 'MONTH',
  yAxisLabel: 'USAGE ($)',
  timeFormat: '%b',
};
return(
<div><ScatterPlot {...props} /></div>)
}
}


export default TestProcess