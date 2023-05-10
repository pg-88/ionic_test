import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocCanvasPage } from './doc-canvas.page';

const routes: Routes = [
  {
    path: '',
    component: DocCanvasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocCanvasPageRoutingModule {}
