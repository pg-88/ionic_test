import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InserimentoVenditePageRoutingModule } from './inserimento-vendite-routing.module';

import { InserimentoVenditePage } from './inserimento-vendite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InserimentoVenditePageRoutingModule
  ],
  declarations: [InserimentoVenditePage]
})
export class InserimentoVenditePageModule {}
