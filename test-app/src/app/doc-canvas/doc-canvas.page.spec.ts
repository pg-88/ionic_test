import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DocCanvasPage } from './doc-canvas.page';

describe('DocCanvasPage', () => {
  let component: DocCanvasPage;
  let fixture: ComponentFixture<DocCanvasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DocCanvasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
