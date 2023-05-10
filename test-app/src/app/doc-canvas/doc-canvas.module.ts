import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocCanvasPageRoutingModule } from './doc-canvas-routing.module';

import { DocCanvasPage } from './doc-canvas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocCanvasPageRoutingModule
  ],
  declarations: [DocCanvasPage]
})
export class DocCanvasPageModule {}
