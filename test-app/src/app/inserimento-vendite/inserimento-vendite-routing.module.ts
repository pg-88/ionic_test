import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InserimentoVenditePage } from './inserimento-vendite.page';

const routes: Routes = [
  {
    path: '',
    component: InserimentoVenditePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InserimentoVenditePageRoutingModule {}
