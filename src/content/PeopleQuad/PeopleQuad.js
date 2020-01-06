import PieChart from 'react-minimal-pie-chart';
import React from 'react';


const PeopleQuad =() => (

<PieChart
  data={[
    { title: 'One', value: 10, color: "#00a68f" },
    { title: 'Two', value: 15, color:  "#3b1a40" },
    { title: 'Three', value: 20, color: "#473793" },
  ]}

  style={{height: '500px'}}
  animate
  label
  labelStyle={{
  fontSize: '5px',
  fontFamily: 'sans-serif'
  }}
  radius={42}
  labelPosition={112}
/>

);

export default PeopleQuad;


