import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'to-do',
    loadChildren: () => import('./to-do/to-do.module').then( m => m.ToDoPageModule)
  },
  {
    path: 'fake-report',
    loadChildren: () => import('./fake-report/fake-report.module').then( m => m.FakeReportPageModule)
  },
  {
    path: 'inserimento-vendite',
    loadChildren: () => import('./inserimento-vendite/inserimento-vendite.module').then( m => m.InserimentoVenditePageModule)
  },
  {
    path: 'doc-canvas',
    loadChildren: () => import('./doc-canvas/doc-canvas.module').then( m => m.DocCanvasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
