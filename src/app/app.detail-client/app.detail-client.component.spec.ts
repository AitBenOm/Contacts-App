import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDetailClientComponent } from './app.detail-client.component';

describe('App.DetailClientComponent', () => {
  let component: AppDetailClientComponent;
  let fixture: ComponentFixture<AppDetailClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDetailClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDetailClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
