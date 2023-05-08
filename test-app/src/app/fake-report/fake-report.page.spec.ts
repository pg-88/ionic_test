import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FakeReportPage } from './fake-report.page';

describe('FakeReportPage', () => {
  let component: FakeReportPage;
  let fixture: ComponentFixture<FakeReportPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FakeReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
