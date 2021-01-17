import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VotesRoutingModule } from './votes-routing.module';
import { VotesComponent } from './votes.component';
import { PieChartModule } from 'src/app/@shared/components/pie-chart/pie-chart.module';
import { LoadingModule } from 'src/app/@shared/components/loading/loading.module';



@NgModule({
  declarations: [VotesComponent],
  imports: [CommonModule, VotesRoutingModule, PieChartModule, LoadingModule]
})
export class VotesModule { }
