import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PxTableDocsComponent} from './px-table-docs.component';

describe('PxTableComponent', () => {
    let component: PxTableDocsComponent;
    let fixture: ComponentFixture<PxTableDocsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PxTableDocsComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(PxTableDocsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
