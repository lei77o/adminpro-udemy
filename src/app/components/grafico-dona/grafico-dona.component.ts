import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styleUrls: ['./grafico-dona.component.css']
})
export class GraficoDonaComponent implements OnInit {
 
  // Doughnut
  /*
  @Input() doughnutChartLabels: string[] = [];
  @Input() doughnutChartData: number [] = [];
  @Input() doughnutChartType: string = 'doughnut';
  */

 @Input() public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
 @Input() public doughnutChartData: MultiDataSet = [
    [350, 450, 100],
  ];
 @Input() public doughnutChartType: string = "";


  constructor() { 
  }

  ngOnInit() {
  }
}
