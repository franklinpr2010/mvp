import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredorListComponent } from './credor-list.component';

describe('CredorListComponent', () => {
  let component: CredorListComponent;
  let fixture: ComponentFixture<CredorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CredorListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CredorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
