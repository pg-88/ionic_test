# To Do
- [x] ([creare un component che prende i dati e disegna un canvas](#canvas))
- [ ] ([Creare una classe che tenga conto delle geometrie della pagina](#geometrie))
- [ ] ([disegno dei testi e struttura documento di base](#context))
- [ ] ([predisporre un sistema per poter selezionare quali parti introdurre nel documento]())
- [ ] ([validazione del documento generato]())
- [ ] ([generazione del pdf]())

## Canvas 
Deve essere un component per riuscire a richiamare la reference all'elemento nel template.
Avrà bisogno di 2 servizi, uno che fornisce i dati e uno per generare il pdf.

## Geometrie
Creare o vedere se si può gestire meglio con le proprietà già preenti.

## Context
Ci vuole una variabile ctx per ogni elemento del documento.
Testi [fillText](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillText), [strokeText](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/strokeText), [TextMetrics](https://developer.mozilla.org/en-US/docs/Web/API/TextMetrics). Font e colore del testo sono parametri del context
Pare troppo laborioso creare il canvas da zero, provo con la libreria html2canvas.
