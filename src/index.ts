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
export class SampleModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SampleModule,
            providers: []
        };
    }
}
