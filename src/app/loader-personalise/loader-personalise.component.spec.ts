import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderPersonaliseComponent } from './loader-personalise.component';

describe('LoaderPersonaliseComponent', () => {
  let component: LoaderPersonaliseComponent;
  let fixture: ComponentFixture<LoaderPersonaliseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoaderPersonaliseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderPersonaliseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
