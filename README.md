# ionic_test
prova delle funzionalità di Ionic


## [app component](test-app/src/app/app.component.html)

Parte HTML della pagina, sfrutta la logica del component che si trova in app.component.ts.

La pagina è di fatto angular e usa 

## Creare nuovo component

`ionic g component "component_name"`
comando che genera automaticamente una cartella (dentro app) con i 4 files che servono a far funzionare il component


## [routing app](test-app/src/app/app-routing.module.ts)

Gestisce l'indirizzamento dell'app. Anche per ogni component viene creato un file routing che serve per avere una parte di pagina renderizzata al suo interno 

## Usare un service

Nel constructor dei component vanno dichiarate le variabili che richiamano (nella dichiarazione del tipo) il modulo (routin piuttosto che service) da utilizzare nel codice.

Per utilizzare un service o un router bisogna dichiarare una variabile nel constructor che richiama nel tipo il modulo importato. Esempio:

<xml>
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  ...
})
export class MyComponent {

  constructor(private router: Router){}

  navigate(){
    this.router.navigate(['/my-page'])
  }
}
</xml>

nell'esempio sopra 