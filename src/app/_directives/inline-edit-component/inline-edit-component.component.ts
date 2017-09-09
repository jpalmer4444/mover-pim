import {Component, OnInit, forwardRef, ViewChild, ViewChildren, Input, Renderer2 } from '@angular/core';

import {ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

const INLINE_EDIT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InlineEditComponent),
    multi: true
  };

@Component({
  selector: 'app-inline-edit',
  templateUrl: './inline-edit-component.component.html',
  providers: [INLINE_EDIT_CONTROL_VALUE_ACCESSOR],
  styleUrls: ['./inline-edit-component.component.scss']
})

export class InlineEditComponent implements ControlValueAccessor, OnInit {

    @ViewChild('inlineEditControl') inlineEditControl; // input DOM element
    @Input() label: string = '';  // Label value for input element
    @Input() type: string = 'text'; // The type of input element
    @Input() required: boolean = false; // Is input requried?
    @Input() disabled: boolean = false; // Is input disabled?
    private _value: string = ''; // Private variable for input value
    private preValue: string = ''; // The value before clicking to edit
    private editing: boolean = false; // Is Component in edit mode?
    public onChange: any = Function.prototype; // Trascend the onChange event
    public onTouched: any = Function.prototype; // Trascend the onTouch event
    
    constructor(private _renderer: Renderer2){}

    // Control Value Accessors for ngModel
    get value(): any {
        return this._value;
    }

    set value(v: any) {
        if (v !== this._value) {
            this._value = v;
            this.onChange(v);
        }
    }
    
    ngOnInit(){
        
    }

    // Required for ControlValueAccessor interface
    writeValue(value: any) {
        this._value = value;
    }
    
    // Do stuff when the input element loses focus
  onBlur($event: Event) {
    this.editing = false;
  }

  // Start the editting process for the input element
  edit(value) {
    if (this.disabled) {
      return;
    }

    this.preValue = value;
    this.editing = true;
    // Focus on the input element just as the editing begins
    setTimeout(
        _ => this._renderer.selectRootElement(this.inlineEditControl.nativeElement.focus())
        );
  }


    // Required forControlValueAccessor interface
    public registerOnChange(fn: (_: any) => {}): void {
        this.onChange = fn;
    }

    // Required forControlValueAccessor interface
    public registerOnTouched(fn: () => {}): void {
        this.onTouched = fn;
    }

}
