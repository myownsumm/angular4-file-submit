import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FileSubmitDirective} from './file-submit.directive';

export * from './file-submit.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        FileSubmitDirective,
    ],
    exports: [
        FileSubmitDirective,
    ]
})
export class FileSubmitModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: FileSubmitModule,
            providers: []
        };
    }
}
