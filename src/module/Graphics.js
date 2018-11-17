import React, {Component} from 'react';
import Chart from 'chart.js';
import ApiLib from '../module/ApiLib';


export class Graphics {
  constructor(props){
    super(props);
    this.state = {
      options: null,
    }
  }

  barChart(name, depth) {
    ApiLib.getHistory({id: 1, account: name, depth: depth})
    .then(response => {
      let data = response.forEach(item => item.memo.to)
      let counts = {};

      for (let i = 0; i < arr.length; i++) {
        let num = data[i];
        counts[num] = counts[num] ? counts[num] + 1 : 1;
      };
      let labels = keys(counts);
      let dataset = [];
      let i;
      for(i=0; i<labels.length; i++){
        dataset.push(counts[labels[i]])
      }
      let barChartValues = {
        type: 'horizontalBar',
        data: {
          labels: labels,
          datasets: [dataset]
        },
        options: {
          title: {
            display: true,
            text: title
          },
        }
      };
      this.setState({options: barChartValues})
    })
  }


}
