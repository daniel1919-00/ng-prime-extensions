import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PxSearchableAccordionComponent } from './px-searchable-accordion.component';

describe('PxSearchableAccordionComponent', () => {
  let component: PxSearchableAccordionComponent;
  let fixture: ComponentFixture<PxSearchableAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PxSearchableAccordionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PxSearchableAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
