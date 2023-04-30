import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredorNewComponent } from './credor-new.component';

describe('CredorNewComponent', () => {
  let component: CredorNewComponent;
  let fixture: ComponentFixture<CredorNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CredorNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CredorNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
