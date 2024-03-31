import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PxUploaderComponent} from './px-uploader.component';

describe('PxUploaderComponent', () => {
    let component: PxUploaderComponent;
    let fixture: ComponentFixture<PxUploaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PxUploaderComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(PxUploaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
