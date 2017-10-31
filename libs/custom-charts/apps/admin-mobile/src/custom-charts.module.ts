import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LineChartModule } from '@swimlane/ngx-charts/release';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, LineChartModule, BrowserAnimationsModule]
})
export class CustomChartsModule {}
