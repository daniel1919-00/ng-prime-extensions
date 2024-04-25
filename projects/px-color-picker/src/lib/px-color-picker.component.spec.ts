import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PxColorPickerComponent} from './px-color-picker.component';
import {calculateHue, convertColor} from "./utilities";
import {PxColorFormatHEX, PxColorFormatHSL, PxColorFormatHSV, PxColorFormatRGBA} from "./px-color-picker";

describe('PxColorPickerComponent', () => {
    let component: PxColorPickerComponent;
    let fixture: ComponentFixture<PxColorPickerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PxColorPickerComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(PxColorPickerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('convertColor utility function should calculate hue correctly', () => {
        const rgb = {r: 62, g: 142, b: 175};
        expect(calculateHue(rgb.r / 255, rgb.g / 255, rgb.b / 255)).toEqual(197.5221238938053);
    });

    it('convertColor utility function should handle HEX -> RGBA', () => {
        expect(convertColor<PxColorFormatRGBA>('#3E8EAF', "rgba")).toEqual({r: 62, g: 142, b: 175, a: 1});
    });

    it('convertColor utility function should handle RGBA -> HEX', () => {
        expect(convertColor<PxColorFormatHEX>({r: 62, g: 142, b: 175, a: 1}, "hex")).toBe('#3e8eaf');
    });

    it('convertColor utility function should handle HEX -> HSV', () => {
        expect(convertColor<PxColorFormatHSV>('#3E8EAF', "hsv")).toEqual({h: 197.5221238938053, s: 64.57142857142857, v: 68.62745098039215});
    });

    it('convertColor utility function should handle HSV -> HEX', () => {
        expect(convertColor<PxColorFormatHEX>({h: 197.5221238938053, s: 64.57142857142857, v: 68.62745098039215}, "hex")).toEqual('#3e8eaf');
    });

    it('convertColor utility function should handle HEX -> HSL', () => {
        expect(convertColor<PxColorFormatHSL>('#3E8EAF', "hsl")).toEqual({h: 197.5221238938053, s: 47.679324894514764, l: 46.470588235294116});
    });

    it('convertColor utility function should handle HSL -> HEX', () => {
        expect(convertColor<PxColorFormatHEX>({h: 197.5221238938053, s: 47.679324894514764, l: 46.470588235294116}, "hex")).toEqual('#3e8eaf');
    });

    it('should handle HEX colors', () =>
    {
        component.value = '#3E8EAF';
        expect(component.getValueAs('rgba')).toEqual({r: 62, g: 142, b: 175, a: 1});
    });

    // it('should handle RGBA colors', () =>
    // {
    //
    // });
    //
    // it('should handle HSV colors', () =>
    // {
    //
    // });
    //
    // it('should handle HSL colors', () =>
    // {
    //
    // });
});
