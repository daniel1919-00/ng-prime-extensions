import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PxTableComponent} from './px-table.component';

describe('PxTableComponent', () => {
    let component: PxTableComponent;
    let fixture: ComponentFixture<PxTableComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PxTableComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(PxTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
