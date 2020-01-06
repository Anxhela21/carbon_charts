import React from 'react';
import {
    Tile,
    Breadcrumb,
    BreadcrumbItem,
    Button,
    Tabs,
    Tab,
  } from 'carbon-components-react';
  
import { BarChart } from "@carbon/charts-react";
import PieChart from 'react-minimal-pie-chart';
import {LineGraph} from 'carbon-addons-data-viz-react';

// Props for LP Barchart:

const colors = ["#00a68f", "#3b1a40", "#473793", "#3c6df0", "#56D2BB"];

const simpleBarData = {
  labels: [
    "Qty",
    "More",
    "Sold",
    "Restocking",
    "Misc",
    "Qty 01",
    "More 12",
    "Sold 23",
    "Restocking 43",
    "Misc 45"
  ],
  datasets: [
    {
      label: "Dataset 1",
      backgroundColors: colors,
      data: [23, 44, 19, 42, 4, 23, 44, 19, 42, 4]
    }
  ]
};

const simpleBarOptions = {
  accessibility: false,
  scales: {
    x: {
      title: "2018 Annual Sales Figures"
    },
    y: {
      title: "Sales quanity",
      stacked: false
    }
  },
  legendClickable: true,
  containerResizable: true
};


const LandingPage = () => {
  return (


 <div className="bx--grid bx--grid--full-width landing-page">

        <div className="bx--row landing-page__banner">
          <div className="bx--col-lg-16">
          <Breadcrumb noTrailingSlash aria-label="Page navigation">
              <BreadcrumbItem>
                <a href="/">Getting started</a>
              </BreadcrumbItem>
            </Breadcrumb>
            <h1 className="landing-page__heading">
              Monitor &amp; Track with Quadrants
            </h1>
          </div>
        </div>

<div className='container'>

  <div className="box">
        <Tile>
          <BarChart
            data={simpleBarData}
            options={simpleBarOptions}
            />
        </Tile>
    </div>


<div className='bx--row'>
    <div className="box">
        <Tile>
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
</Tile>
    </div>
</div>

<div className='bx--col'>
    <div className="box">
    <Tile>
   <LineGraph/>
        </Tile>
    </div>
</div>

<div className='bx--row'>
    <div className="box">
    <Tile>
    <BarChart
            data={simpleBarData}
            options={simpleBarOptions}
            />
   </Tile>
    </div>
</div>


    </div>
  </div>
  );
}

export default LandingPage;