import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ControlValueAccessor} from "@angular/forms";

@Component({
  selector: 'px-color-picker',
  standalone: true,
  imports: [],
  templateUrl: './px-color-picker.component.html',
  styleUrl: './px-color-picker.component.scss'
})
export class PxColorPickerComponent implements ControlValueAccessor {

    @Input() disabled: boolean = false;

    @Output() valueChange = new EventEmitter<any>();

    private onChange = (value: any) => {};
    private onTouched = () => {};
    private touched = false;
    private _value: any = null;
    private incomingAngularFormValue = false;

    get value() {
        return this._value;
    }

    @Input()
    set value(val: any) {
        this._value = val;
        this.valueChange.next(val);
        if(!this.incomingAngularFormValue) {
            this.onChange(this.value);
            this.onTouched();
        }
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = () => {
            if(this.touched) {
                return;
            }

            this.touched = true;
            fn();
        };
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    writeValue(val: any): void {
        this.incomingAngularFormValue = true;
        this.value = val;
        this.incomingAngularFormValue = false;
    }
}
