import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: [
  ]
})
export class GraficoDonaComponent implements OnInit {

 @Input('ChartLabels') public doughnutChartLabels: Label[] = [];
 @Input('ChartData') public doughnutChartData: MultiDataSet = [];
 @Input('ChartType') public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
  }

}
