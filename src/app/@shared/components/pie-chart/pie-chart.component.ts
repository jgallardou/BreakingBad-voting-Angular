import { Component, Input, OnChanges } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { ICharacter } from 'src/app/@interfaces/character';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnChanges {

  @Input() characterList: ICharacter[] = [];

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (_: void, ctx: any) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)', 'rgb(91.3%, 86.6%, 27.4%)', 'rgb(16.6%, 76.1%, 76.1%)', 'rgb(85.5%, 43.9%, 83.9%)', 'rgb(109, 67, 131)', 'rgb(46, 71, 90)', 'rgb(143, 228, 43)'],
    }
  ];

  constructor() { }

  ngOnChanges(changes: any): void {
    this.characterList = changes.characterList.currentValue;
    this.loadData();
    console.log(changes);

  }

  loadData() {
    this.pieChartLabels = [];
    this.pieChartData = [];

    this.characterList.map(character => {
      this.pieChartData.push(character.votes);
      this.pieChartLabels.push(character.name)
    });


  }
}
