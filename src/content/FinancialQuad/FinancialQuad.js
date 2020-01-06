import React from 'react';
import { Tile, Button } from "carbon-components-react";
import { BarChart } from "@carbon/charts-react";




const colors = ["#00a68f", "#3b1a41", "#471793", "#3c4df0", "#56F2BB"];

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
      formatter:axisValue => {
          return`${axisValue/1000}`;

      },
      yMaxAdjuster: yMaxValue => yMaxValue * 1.1,
      stacked: true
    }
  },
  legendClickable: true,
  containerResizable: true
};



const FinancialQuad = () => {
    return (
<div className="bx--grid bx--grid--full-width bx--grid--no-gutter financial-page">
<div className='bx--row landing-page__banner'>
    <div className='bx--col-lg-16'>
<div className="box">
        <div class="tooltip">FinancialQuad
        <span class="tooltiptext">Tooltip text</span>
        </div>
          <BarChart
            data={simpleBarData}
            options={simpleBarOptions}
            width='100%'
            height={400}

            />
        
    </div>
</div>
</div>
</div>
  )
};

export default FinancialQuad;
