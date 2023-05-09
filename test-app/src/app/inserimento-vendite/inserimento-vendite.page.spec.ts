import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InserimentoVenditePage } from './inserimento-vendite.page';

describe('InserimentoVenditePage', () => {
  let component: InserimentoVenditePage;
  let fixture: ComponentFixture<InserimentoVenditePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InserimentoVenditePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
