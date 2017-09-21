import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
    selector: '[ng4-file-submit]'
})
export class FileSubmitDirective {
    @HostListener('change', ['$event'])

    onChange(e) {
        return this.setFileInput(e);
    }

    protected formData: FormData = new FormData();

    constructor(private el: ElementRef) {
    }

    setFileInput($event) {
        const file = $event.target.files[0];

        if (!file) {
            throw new Error('no file selected');
        }

        this.formData = new FormData();
        this.formData.append('file', file);
    }

    public getFormData() {
        return this.formData;
    }
}
