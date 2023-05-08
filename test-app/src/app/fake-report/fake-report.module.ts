import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FakeReportPageRoutingModule } from './fake-report-routing.module';

import { FakeReportPage } from './fake-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FakeReportPageRoutingModule
  ],
  declarations: [FakeReportPage]
})
export class FakeReportPageModule {}
