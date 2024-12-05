import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalisComponent } from './calis.component';

describe('CalisComponent', () => {
  let component: CalisComponent;
  let fixture: ComponentFixture<CalisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
