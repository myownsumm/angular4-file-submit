import {Directive, ElementRef} from '@angular/core';

@Directive({
    selector: '[ng4-file-submit]'
})
export class SampleDirective {

    protected formData: FormData = new FormData();


    constructor(private el: ElementRef) {
    }

    setFileInput($event) {
        const file = $event.target.files[0];

        if (!file) {
            throw new Error('no file selected');
        }

        this.formData.set('file', file);
    }
}
